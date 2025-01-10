import {
  AutocompleteInput,
  minValue,
  number,
  ReferenceInput,
  required,
  TextInput,
  useTranslate,
} from "react-admin";
import { Edit } from "@/common/components/edit";
import { CrupdateTicket, Ticket, User } from "@/gen/jfds-api-client";
import { FlexBox } from "@/common/components";
import { updateTranform } from "@/common/utils/transform";
import { MAX_ITEM_PER_LIST } from "@/common/utils/constant";
import { FC } from "react";
import { formatUserName } from "@/common/utils/format-user-name";
import { higherOrEqualsThan } from "@/common/input-validator";

export const TicketEdit: FC<{ ticket: Ticket }> = ({ ticket }) => {
  const transform = (
    record: Omit<CrupdateTicket, "operationId" | "staffId"> & {
      operation: { id: string };
      staff: { id: string };
    }
  ): CrupdateTicket => {
    const { staff, operation, ...baseRecord } = record;
    return updateTranform({
      ...baseRecord,
      fromNumber: +record.fromNumber,
      toNumber: +record.toNumber,
      staffId: staff.id,
      operationId: operation.id,
    });
  };

  const translate = useTranslate();
  return (
    <Edit id={ticket.id} resource="ticket" transform={transform}>
      <ReferenceInput
        label="Opération"
        source="operation.id"
        reference="operation"
        page={1}
        perPage={MAX_ITEM_PER_LIST}
      />
      <ReferenceInput
        source="staff.id"
        reference="users"
        page={1}
        perPage={MAX_ITEM_PER_LIST}
      >
        <AutocompleteInput
          label="Staff"
          suggestionLimit={10}
          optionText={(user: User) => formatUserName(user)}
        />
      </ReferenceInput>
      <FlexBox sx={{ width: "100%", gap: 1 }}>
        <TextInput
          source="fromNumber"
          validate={[required(), number(), minValue(1)]}
        />
        <TextInput
          source="toNumber"
          validate={[
            required(),
            number(),
            minValue(1),
            higherOrEqualsThan("fromNumber", translate),
          ]}
        />
      </FlexBox>
    </Edit>
  );
};
