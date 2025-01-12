import {
  AutocompleteInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  minValue,
  number,
  required,
  useTranslate,
} from "react-admin";
import { FC } from "react";

import { Edit } from "@/common/components/edit";
import { CrupdateTicket, Ticket, User } from "@/gen/jfds-api-client";
import { FlexBox } from "@/common/components";
import { updateTranform } from "@/common/utils/transform";
import { formatUserName } from "@/common/utils/format-user-name";
import { higherOrEqualsThan } from "@/common/input-validator";
import { MAX_ITEM_PER_LIST } from "@/common/utils/constant";

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
      <ReferenceInput reference="operation" source="operation.id">
        <SelectInput
          fullWidth
          validate={required()}
          optionText="name"
          label={translate("resources.operation.name")}
        />
      </ReferenceInput>
      <ReferenceInput
        source="staff.id"
        reference="user"
        page={1}
        perPage={MAX_ITEM_PER_LIST}
      >
        <AutocompleteInput
          label={translate("resources.ticket.fields.staff")}
          validate={required()}
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
