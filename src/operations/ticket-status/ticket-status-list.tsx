import { List } from "@/common/components/list";
import {
  FunctionField,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextField,
} from "react-admin";
import { TicketStatus } from "@/gen/jfds-api-client";
import { MoneyTextField } from "@/common/components/list/money-text-field";
import { BoxPaperTitled, WithLayoutPadding } from "@/common/components";
import { useWatch } from "react-hook-form";
import { formatUserName } from "@/common/utils/format-user-name";
import { MAX_ITEM_PER_LIST } from "@/common/utils/constant";

export const TicketStatusList = () => {
  return (
    <WithLayoutPadding>
      <BoxPaperTitled title="Situation">
        <SimpleForm toolbar={false}>
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
          <ListContent />
        </SimpleForm>
      </BoxPaperTitled>
    </WithLayoutPadding>
  );
};

const ListContent = () => {
  const operationId = useWatch({ name: "operationId" });

  return (
    <List
      resource="ticket-status"
      queryOptions={{
        meta: { operationId },
      }}
    >
      <FunctionField
        label="Staff"
        render={(ticketStatus: TicketStatus) =>
          formatUserName(ticketStatus.ticket.staff)
        }
      />
      <TextField sortable={false} source="numberOfTickets" />
      <TextField sortable={false} source="numberOfPayedTickets" />
      <MoneyTextField source="payedAmount" />
      <TextField sortable={false} source="numberOfNotPayedTickets" />
      <MoneyTextField source="notPayedAmount" />
      <TextField sortable={false} source="pourcentageOfPayedTickets" />
    </List>
  );
};
