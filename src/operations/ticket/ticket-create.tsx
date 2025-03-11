import {
  AutocompleteInput,
  ReferenceInput,
  TextInput,
  required,
  minValue,
  number,
  useTranslate,
  SelectInput,
} from "react-admin";

import { BoxPaperTitled, FlexBox } from "@/common/components";
import { Create } from "@/common/components/create";
import { CrupdateTicket, User } from "@/gen/jfds-api-client";
import { higherOrEqualsThan } from "@/common/input-validator";
import { createTranform } from "@/common/utils/transform";
import { formatUserName } from "@/common/utils/format-user-name";

export const TicketCreate = () => {
  const translate = useTranslate();

  const transform = (
    record: Pick<
      CrupdateTicket,
      "operationId" | "fromNumber" | "toNumber" | "staffId"
    >
  ): CrupdateTicket => {
    return createTranform({
      ...record,
      fromNumber: +record.fromNumber,
      toNumber: +record.toNumber,
    });
  };

  return (
    <BoxPaperTitled
      title={translate("resources.ticket.name")}
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={transform} resource="ticket">
        <ReferenceInput reference="operation" source="operationId">
          <SelectInput
            fullWidth
            validate={required()}
            optionText="name"
            label={translate("resources.operation.name")}
          />
        </ReferenceInput>
        <ReferenceInput page={1} perPage={10} source="staffId" reference="user">
          <AutocompleteInput
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
      </Create>
    </BoxPaperTitled>
  );
};
