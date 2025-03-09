import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Avatar,
  Switch,
  Box,
} from "@mui/material";
import {
  Button,
  FunctionField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  Toolbar,
  required,
  useUpdate,
  useTranslate,
  useNotify,
  useListContext,
} from "react-admin";
import { Save, QrCode, Check, Close } from "@mui/icons-material";
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import { useWatch } from "react-hook-form";
import { useState, FC } from "react";

import { List, TranslatedEnumTextField } from "@/common/components/list";
import { PresenceStatus, UserRoleEnum } from "@/gen/jfds-api-client";
import {
  BoxPaperTitled,
  FlexBox,
  WithLayoutPadding,
} from "@/common/components";
import { usePalette } from "@/common/hooks";
import { formatUserName } from "@/common/utils/format-user-name";
import { createImageUrl } from "@/providers";
import { MAX_ITEM_PER_LIST } from "@/common/utils/constant";
import {
  PRESENCE_TYPE_CHOICES,
  PresenceTypeEnum,
} from "./utils/presence-type-choices";
import { StateSetter } from "@/common/utils/types";
import { createTranform } from "@/common/utils/transform";
import { ParsedQrValue } from "@/common/utils/to-qrcode-value";
import { ShowIfRole } from "@/security/components";

type Filter = {
  activityId: string;
  type?: PresenceTypeEnum;
};
enum View {
  QRSCAN,
  LIST,
  UPDATE,
}
export const PresencePage = () => {
  const { textPrimaryColor } = usePalette();
  const [filter, setFilter] = useState<Filter>({
    activityId: "",
  });
  const [view, setView] = useState<View>(View.LIST);
  const translate = useTranslate();
  const [ids, setIds] = useState<{ absent: string[]; present: string[] }>({
    absent: [],
    present: [],
  });

  const getIsPresentValue = (presentStatus: PresenceStatus) => {
    if (ids.present.includes(presentStatus.user.id)) {
      return true;
    }
    if (ids.absent.includes(presentStatus.user.id)) {
      return false;
    }
    return presentStatus.isPresent;
  };

  const toggleIsPresent = (
    isPresent: boolean,
    presentStatus: PresenceStatus
  ) => {
    setIds((prev) => {
      let isPresentIds = [];
      let isAbsentIds = [];

      if (isPresent) {
        isAbsentIds = prev.absent.filter((el) => el !== presentStatus.user.id);
        isPresentIds = [...prev.present, presentStatus.user.id];
      } else {
        isPresentIds = prev.present.filter(
          (el) => el !== presentStatus.user.id
        );
        isAbsentIds = [...prev.absent, presentStatus.user.id];
      }
      return {
        absent: isAbsentIds,
        present: isPresentIds,
      };
    });
  };

  return (
    <WithLayoutPadding sx={{ p: 3 }}>
      <Typography
        sx={{ fontSize: "1.5rem", fontWeight: "bold", color: textPrimaryColor }}
      >
        {translate("resources.presence.name")}
      </Typography>
      <SimpleForm onSubmit={(data: any) => setFilter(data)} toolbar={false}>
        <FlexBox sx={{ gap: 2 }}>
          <ReferenceInput
            page={1}
            source="activityId"
            reference="activity"
            perPage={MAX_ITEM_PER_LIST}
          >
            <SelectInput
              optionText="name"
              fullWidth={false}
              validate={required()}
              label={translate("resources.activity.name")}
            />
          </ReferenceInput>
          <SelectInput
            source="type"
            translateChoice
            choices={PRESENCE_TYPE_CHOICES}
            emptyText={translate("custom.common.all")}
          />
          <SelectAction view={view} setView={setView} />
        </FlexBox>
        <BoxPaperTitled title="Presence">
          <List
            filter={{
              activityId: filter.activityId,
              isPresent:
                view === View.LIST &&
                filter.type !== undefined &&
                filter.type !== null
                  ? filter.type === PresenceTypeEnum.PRESENT
                  : undefined,
            }}
            resource="presence"
            actions={
              view === View.UPDATE || view === View.QRSCAN ? (
                <UpdateActions
                  activityId={filter.activityId}
                  ids={ids}
                  setView={setView}
                />
              ) : (
                false
              )
            }
          >
            <FunctionField
              label=" "
              render={(presenceStatus: PresenceStatus) => (
                <Avatar
                  src={createImageUrl(presenceStatus.user.photo ?? "")}
                  sx={{ width: "35px", height: "35px" }}
                />
              )}
            />
            <FunctionField
              label={translate("resources.user.name")}
              render={(presence: PresenceStatus) => (
                <Typography sx={{ color: textPrimaryColor, fontSize: "14px" }}>
                  {formatUserName(presence?.user)}
                </Typography>
              )}
            />
            <TranslatedEnumTextField
              source="user.role"
              enumLocalSuffix="custom.enum.user_role"
            />
            {view !== View.LIST && (
              <FunctionField
                label="Est Présent"
                render={(presentStatus: PresenceStatus) => {
                  const isPresent = getIsPresentValue(presentStatus);
                  return (
                    <>
                      <QRScan
                        toggleIsPresent={toggleIsPresent}
                        view={view}
                        setView={setView}
                      />
                      <Switch
                        checked={isPresent}
                        onChange={(_e, isChecked) =>
                          toggleIsPresent(isChecked, presentStatus)
                        }
                      />
                    </>
                  );
                }}
              />
            )}
            {view === View.LIST && (
              <FunctionField
                label="Status"
                render={(presenceStatus: PresenceStatus) => {
                  const isPresent = getIsPresentValue(presenceStatus);
                  return isPresent ? (
                    <Typography
                      sx={{
                        fontSize: "14px",
                        display: "inline-flex",
                        gap: 2,
                        fontWeight: "bold",
                        color: textPrimaryColor,
                      }}
                    >
                      <Check color="success" />
                      <span>{translate("custom.enum.presence.PRESENT")}</span>
                    </Typography>
                  ) : (
                    <Typography
                      sx={{
                        fontSize: "14px",
                        display: "inline-flex",
                        gap: 2,
                        fontWeight: "bold",
                        color: textPrimaryColor,
                      }}
                    >
                      <Close color="error" />
                      <span>{translate("custom.enum.presence.ABSENT")}</span>
                    </Typography>
                  );
                }}
              />
            )}
          </List>
        </BoxPaperTitled>
      </SimpleForm>
    </WithLayoutPadding>
  );
};

const SelectAction: FC<{ view: View; setView: StateSetter<View> }> = ({
  view,
  setView,
}) => {
  const activityId = useWatch({ name: "activityId" });
  if (!activityId || view !== View.LIST) {
    return null;
  }

  return (
    <>
      <Button
        size="large"
        type="submit"
        variant="contained"
        label="custom.common.watch_presence"
        sx={{ marginBottom: 2, minWidth: "200px" }}
      />
      <ShowIfRole roles={[UserRoleEnum.Admin]}>
        <Button
          size="large"
          variant="contained"
          color="success"
          label="Faire la présence"
          sx={{ marginBottom: 2, minWidth: "200px" }}
          onClick={() => setView(View.UPDATE)}
        />
      </ShowIfRole>
    </>
  );
};

const UpdateActions: FC<{
  activityId: string;
  ids: any;
  setView: StateSetter<View>;
}> = ({ setView, ids, activityId }) => {
  const {
    refetch,
    data: fromList = [],
    isLoading: isListLoading,
  } = useListContext<PresenceStatus & { id: string }>();
  const [update, { isLoading }] = useUpdate();
  const notify = useNotify();

  const doUpdate = async () => {
    notify("Mise a jour de la presence en cours");
    setView(View.LIST);
    const listPresent = [
      ...new Set([
        ...ids.present,
        ...fromList.filter((el) => el.isPresent).map((el) => el.user.id),
      ]),
    ];
    update("presence", {
      id: "dummy",
      meta: { activityId },
      data: {
        id: "dummy",
        presences: listPresent
          .filter((el) => !ids.absent.includes(el))
          .map((id) =>
            createTranform({
              userId: id,
              activityId,
            })
          ),
      },
    });
    notify("Mise a jour de la presence avec success");
    refetch();
  };

  return (
    <Toolbar sx={{ gap: 2 }}>
      <Button
        disabled={isLoading || isListLoading}
        color="error"
        variant="contained"
        label="ra.action.cancel"
        onClick={() => setView(View.LIST)}
      />
      <Button
        startIcon={<QrCode />}
        disabled={isLoading || isListLoading}
        color="info"
        variant="contained"
        label="Par Scan"
        onClick={() => setView(View.QRSCAN)}
      />
      <Button
        startIcon={<Save />}
        disabled={isLoading || isListLoading}
        color="warning"
        variant="contained"
        label="ra.action.save"
        onClick={doUpdate}
      />
    </Toolbar>
  );
};

const QRScan: FC<{
  toggleIsPresent: any;
  view: View;
  setView: StateSetter<View>;
}> = ({ setView, view, toggleIsPresent }) => {
  const { data: fromList = [] } = useListContext<
    PresenceStatus & { id: string }
  >();
  const notify = useNotify();

  const handleScanned = (data: IDetectedBarcode[]) => {
    if (data.length !== 1) {
      return;
    }
    const parseData = JSON.parse(data[0].rawValue) as ParsedQrValue;
    const dataFromList = fromList.find((el) => el.user.id === parseData?.id);
    if (!dataFromList) {
      notify(`Utilisateur n'a pas été trouver dans la liste actuel`, {
        type: "error",
      });
      return;
    }
    toggleIsPresent(true, dataFromList);
    notify(
      `L'utilisateur ${parseData.firstName} ${parseData.lastName} a été marqué present`,
      { type: "success" }
    );
  };

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={view === View.QRSCAN}
      onClose={() => setView(View.UPDATE)}
    >
      <DialogContent>
        <Box sx={{ height: "fit-content", width: "100%" }}>
          <Scanner scanDelay={3_000} onScan={handleScanned} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          size="large"
          type="submit"
          variant="contained"
          label="Fermer"
          onClick={() => setView(View.UPDATE)}
        />
      </DialogActions>
    </Dialog>
  );
};
