import { BoxPaperTitled } from "@/common/components";
import { List } from "@/common/components/list";
import { MoneyTextField } from "@/common/components/list/money-text-field";
import { TranslatedEnumTextField } from "@/common/components/list/translated-enum-text-field";
import { TextField } from "react-admin";

export const LedgerList = () => {
  return (
    <BoxPaperTitled sx={{ mt: 2 }} title="Journal">
      <List resource="ledger">
        <TextField sortable={false} source="ledgerDate" />
        <TranslatedEnumTextField
          source="mouvementType"
          enumLocalSuffix="custom.enum.ledger_mouvement_type"
        />
        <MoneyTextField source="price" />
        <TextField sortable={false} source="name" />
      </List>
    </BoxPaperTitled>
  );
};
