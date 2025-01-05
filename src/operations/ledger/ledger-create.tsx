import {
  DateInput,
  minValue,
  number,
  required,
  SelectInput,
  TextInput,
} from "react-admin";
import { Create } from "@/common/components/create";
import { FlexBox } from "@/common/components";
import { Ledger } from "@/gen/jfds-api-client";
import { createTranform } from "@/common/utils/transform";
import { toISOString } from "@/common/utils/date";
import { LEDGER_MOUVEMENT_CHOICES } from "./utils/ledger-mouvement-select-choice";

export const LedgerCreate = () => {
  const transform = (
    record: Pick<Ledger, "name" | "price" | "ledgerDate" | "mouvementType">
  ): Ledger => {
    return createTranform({
      ...record,
      ledgerDate: toISOString(record.ledgerDate),
    });
  };

  return (
    <Create
      transform={transform}
      resource="ledger"
      sx={{
        "& .RaCreate-card": {
          boxShadow: "none",
          bgcolor: "white",
          p: 2,
        },
      }}
    >
      <FlexBox sx={{ gap: 2 }}>
        <TextInput variant="outlined" validate={required()} source="name" />
        <SelectInput
          translateChoice
          sx={{ mb: "8px" }}
          variant="outlined"
          source="mouvementType"
          choices={LEDGER_MOUVEMENT_CHOICES}
          validate={required()}
        />
        <TextInput
          variant="outlined"
          validate={[required(), number(), minValue(1)]}
          source="price"
        />
        <DateInput
          variant="outlined"
          validate={required()}
          source="ledgerDate"
        />
      </FlexBox>
    </Create>
  );
};
