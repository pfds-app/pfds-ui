import { Typography, Avatar } from "@mui/material";
import {
  Button,
  FunctionField,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  required,
  useTranslate,
} from "react-admin";
import { Check, Close } from "@mui/icons-material";
import { useState } from "react";

import { List, TranslatedEnumTextField } from "@/common/components/list";
import {
  BoxPaperTitled,
  FlexBox,
  WithLayoutPadding,
} from "@/common/components";
import { PresenceStatus } from "@/gen/jfds-api-client";
import { usePalette } from "@/common/hooks";
import { formatUserName } from "@/common/utils/format-user-name";
import { createImageUrl } from "@/providers";
import { MAX_ITEM_PER_LIST } from "@/common/utils/constant";
import {
  PRESENCE_TYPE_CHOICES,
  PresenceTypeEnum,
} from "./utils/presence-type-choices";

type Filter = {
  activityId: string;
  type?: PresenceTypeEnum;
};

export const PresencePage = () => {
  const { textPrimaryColor } = usePalette();
  const [filter, setFilter] = useState<Filter>({
    activityId: "",
  });

  const translate = useTranslate();

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
          <Button
            size="large"
            type="submit"
            variant="contained"
            label="custom.common.watch_presence"
            sx={{ marginBottom: 2, minWidth: "200px" }}
          />
        </FlexBox>
        <BoxPaperTitled title="Presence">
          <List
            filter={{
              activityId: filter.activityId,
              isPresent:
                filter.type !== undefined
                  ? filter.type === PresenceTypeEnum.PRESENT
                  : undefined,
            }}
            resource="presence"
            datagridProps={{ rowClick: (id) => `/user/${id}` }}
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
            <FunctionField
              label="Status"
              render={(presenceStatus: PresenceStatus) => {
                const { isPresent } = presenceStatus;
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
          </List>
        </BoxPaperTitled>
      </SimpleForm>
    </WithLayoutPadding>
  );
};
