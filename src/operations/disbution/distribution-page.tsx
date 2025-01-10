import {
  Button,
  minValue,
  number,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
  Toolbar,
  useTranslate,
  useNotify,
  useShowContext,
  useUpdate,
} from "react-admin";
import {
  BoxPaperTitled,
  FlexBox,
  ListAndCreateLayout,
  WithLayoutPadding,
} from "@/common/components";
import { Create } from "@/common/components/create";
import { Show } from "@/common/components/show";
import { MAX_ITEM_PER_LIST } from "@/common/utils/constant";
import { CircularProgress, Typography } from "@mui/material";
import { FC, useState } from "react";
import { RemoveRedEye } from "@mui/icons-material";
import { StateSetter } from "@/common/utils/types";
import { useFormState, useWatch } from "react-hook-form";
import { PayedTicket } from "@/gen/jfds-api-client";
import { CrupdatePayedTicketPayload } from "@/providers";

export type VerifyPayload = {
  operationId: string | null;
  ticketNumber: number | null;
};

const VerifyButton: FC<{ setter: StateSetter<VerifyPayload> }> = ({
  setter,
}) => {
  const operationId = useWatch({ name: "operationId" });
  const ticketNumber = useWatch({ name: "ticketNumber" });
  const { isValid } = useFormState();

  return (
    <Button
      startIcon={<RemoveRedEye />}
      disabled={!isValid}
      variant="contained"
      label="custom.common.verify"
      onClick={() => {
        setter({
          ticketNumber,
          operationId,
        });
      }}
    />
  );
};

export const DistributionPage = () => {
  const [operationInfos, setOperationInfos] = useState<VerifyPayload>({
    operationId: null,
    ticketNumber: null,
  });

  return (
    <WithLayoutPadding>
      <ListAndCreateLayout>
        <BoxPaperTitled
          title="Distribution"
          sx={{ minWidth: "350px", width: "350px" }}
        >
          <Create
            simpleFormProps={{
              toolbar: (
                <Toolbar>
                  <VerifyButton setter={setOperationInfos} />
                </Toolbar>
              ),
            }}
            onSubmit={(values) => console.log(values)}
            resource="payed-ticket"
          >
            <ReferenceInput
              source="operationId"
              reference="operation"
              page={1}
              perPage={MAX_ITEM_PER_LIST}
            >
              <SelectInput
                label="Operation"
                validate={required()}
                optionText="name"
              />
            </ReferenceInput>
            <TextInput
              source="ticketNumber"
              validate={[required(), number(), minValue(1)]}
            />
          </Create>
        </BoxPaperTitled>
        <BoxPaperTitled title="Résultat">
          <Show
            id={operationInfos.ticketNumber ?? "dummy"}
            resource="payed-ticket"
            queryOptions={{
              meta: { operationId: operationInfos.operationId },
            }}
          >
            <VerifyContent ticketNumber={operationInfos.ticketNumber} />
          </Show>
        </BoxPaperTitled>
      </ListAndCreateLayout>
    </WithLayoutPadding>
  );
};

export const VerifyContent: FC<{ ticketNumber: number | null }> = ({
  ticketNumber,
}) => {
  const notify = useNotify();
  const { record: payedTicket, isLoading } = useShowContext<PayedTicket>();
  const [update, { isLoading: isUpdateLoading }] =
    useUpdate<CrupdatePayedTicketPayload>();
  const translate = useTranslate();

  if (isLoading || isUpdateLoading) {
    return (
      <FlexBox sx={{ width: "100%" }}>
        <CircularProgress />
      </FlexBox>
    );
  }

  if (ticketNumber === null) {
    return;
  }

  const isPayed = payedTicket?.isPayed;
  const isDistributed = payedTicket?.isDistributed;

  const doUpdate = async () => {
    if (!payedTicket) {
      notify(translate("custom.common.ticket_not_paid_yet", { ticketNumber }));
    }

    update("payed-ticket", {
      data: {
        id: "DUMMMY",
        staffId: "DUMMY",
        operationId: "DUMMY",
        payedTikects: [{ ...payedTicket!, isDistributed: true }],
      },
      meta: {
        operationId: "operationId",
        staffId: "staffId",
      },
      id: payedTicket?.id,
    });
    notify(translate("custom.common.distribution_success"), {
      type: "success",
    });
  };

  return (
    <>
      <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
        <Typography
          color={isPayed ? undefined : "red"}
          sx={{ fontSize: "1rem", opacity: ".8" }}
        >
          {isPayed
            ? translate("custom.common.ticket_paid", { ticketNumber })
            : translate("custom.common.ticket_not_paid_yet", { ticketNumber })}
        </Typography>
        {isPayed && !isDistributed && (
          <Button
            onClick={doUpdate}
            label="custom.common.distribute"
            color="success"
            variant="contained"
          />
        )}
      </FlexBox>
      {isDistributed && (
        <Typography color="green">
          {translate("custom.common.ticket_already_distributed")}
        </Typography>
      )}
    </>
  );
};
