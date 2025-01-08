import {
  AutocompleteInput,
  minValue,
  number,
  ReferenceInput,
  required,
  TextInput,
  useTranslate,
} from "react-admin";
import { useWatch } from "react-hook-form";
import { BoxPaperTitled, FlexBox } from "@/common/components";
import { Create } from "@/common/components/create";
import { MAX_ITEM_PER_LIST } from "@/common/utils/constant";
import { CrupdateTicket, User } from "@/gen/jfds-api-client";
import { createTranform } from "@/common/utils/transform";
import { formatUserName } from "@/common/utils/format-user-name";
import { higherOrEqualsThan } from "@/common/input-validator";

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
      title="Billet"
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
          <ToNumberInput />
        </FlexBox>
      </Create>
    </BoxPaperTitled>
  );
};

export const ToNumberInput = () => {
  const translate = useTranslate();
  const fromNumber = useWatch({ name: "fromNumber" });

  return (
    <TextInput
      source="toNumber"
      validate={[
        required(),
        number(),
        minValue(1),
        higherOrEqualsThan(
          "fromNumber",
          translate("custom.common.must_be_higher_or_equal_than", {
            value: +fromNumber,
          })
        ),
      ]}
    />
  );
};
