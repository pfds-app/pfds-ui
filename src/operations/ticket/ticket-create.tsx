import {
  AutocompleteInput,
  minValue,
  number,
  ReferenceInput,
  required,
  TextInput,
} from "react-admin";
import { BoxPaperTitled, FlexBox } from "@/common/components";
import { Create } from "@/common/components/create";
import { MAX_ITEM_PER_LIST } from "@/common/utils/constant";
import { CrupdateTicket, User } from "@/gen/jfds-api-client";
import { createTranform } from "@/common/utils/transform";
import { formatUserName } from "@/common/utils/format-user-name";

export const TicketCreate = () => {
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
      title="Fikambanana Masina"
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={transform} resource="ticket">
        <ReferenceInput
          source="operationId"
          reference="operation"
          page={1}
          perPage={MAX_ITEM_PER_LIST}
        />
        <ReferenceInput
          source="staffId"
          reference="users"
          page={1}
          perPage={MAX_ITEM_PER_LIST}
        >
          <AutocompleteInput
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
            validate={[required(), number(), minValue(1)]}
          />
        </FlexBox>
      </Create>
    </BoxPaperTitled>
  );
};
