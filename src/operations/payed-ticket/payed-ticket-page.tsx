import {
  CheckboxGroupInput,
  ReferenceInput,
  required,
  SaveButton,
  SelectInput,
  Toolbar,
  useGetList,
} from "react-admin";
import { CheckCircle } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import { Create } from "@/common/components/create";
import { BoxPaperTitled, WithLayoutPadding } from "@/common/components";
import { useFormContext, useWatch } from "react-hook-form";
import { MAX_ITEM_PER_LIST } from "@/common/utils/constant";
import { formatUserName } from "@/common/utils/format-user-name";
import { PayedTicket } from "@/gen/jfds-api-client";
import { useLayoutEffect, useMemo } from "react";
import { stringifyObj } from "@/common/utils/stringify-obj";
import { CrupdatePayedTicketPayload } from "@/providers";
import { updateTranform } from "@/common/utils/transform";

const DUMMY_ID = "dummy_id";
type FormValue = {
  operationId: string;
  staffId: string;
  checkedPayedTicketIds: string[];
  payedTickets: PayedTicket[];
};

export const PayedTicketPage = () => {
  const transform = ({
    payedTickets,
    checkedPayedTicketIds,
    staffId,
    operationId,
  }: FormValue): CrupdatePayedTicketPayload => {
    return {
      staffId,
      operationId,
      id: DUMMY_ID,
      payedTikects: payedTickets.map((payedTicket) => {
        const isChecked = checkedPayedTicketIds.includes(payedTicket.id);
        return updateTranform({ ...payedTicket, isPayed: isChecked });
      }),
    };
  };

  return (
    <WithLayoutPadding>
      <BoxPaperTitled title="Marquage">
        <Create
          simpleFormProps={{
            toolbar: (
              <Toolbar>
                <SaveButton
                  color="primary"
                  label={"custom.common.mark_payed"}
                  icon={<CheckCircle />}
                />
              </Toolbar>
            ),
          }}
          transform={transform}
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
              fullWidth={false}
              validate={required()}
              optionText="name"
            />
          </ReferenceInput>
          <StaffReferenceInput />
          <TicketCheckBoxList />
        </Create>
      </BoxPaperTitled>
    </WithLayoutPadding>
  );
};

export const StaffReferenceInput = () => {
  const operationId = useWatch({ name: "operationId" });
  const { setValue } = useFormContext();

  useLayoutEffect(() => {
    setValue("staffId", "");
  }, [operationId]);

  return (
    <ReferenceInput
      page={1}
      source="staffId"
      reference="staff"
      perPage={MAX_ITEM_PER_LIST}
      queryOptions={{
        meta: {
          operationId,
        },
      }}
    >
      <SelectInput
        label="Staff"
        validate={required()}
        fullWidth={false}
        optionText={formatUserName}
      />
    </ReferenceInput>
  );
};

export const TicketCheckBoxList = () => {
  const operationId = useWatch({ name: "operationId" });
  const staffId = useWatch({ name: "staffId" });
  const { setValue } = useFormContext();
  const { data: payedTickets = [], isLoading } = useGetList<PayedTicket>(
    "payed-ticket",
    {
      meta: {
        operationId,
        staffId,
      },
      pagination: {
        page: 1,
        perPage: MAX_ITEM_PER_LIST,
      },
    }
  );
  const stringifiedTickets = stringifyObj(payedTickets);

  const defaultCheckedIds = useMemo(() => {
    return payedTickets
      .filter((payedTicket) => payedTicket.isPayed)
      .map((payedTicket) => payedTicket.id);
  }, [stringifiedTickets]);

  useLayoutEffect(() => {
    setValue("checkedPayedTicketIds", defaultCheckedIds);
  }, [stringifiedTickets]);

  useLayoutEffect(() => {
    setValue("payedTickets", payedTickets);
  }, [stringifiedTickets]);

  if (isLoading) {
    <CircularProgress />;
  }

  return (
    <CheckboxGroupInput
      label="Billets"
      translate={"no"}
      source="checkedPayedTicketIds"
      optionText="ticketNumber"
      choices={payedTickets}
    />
  );
};
