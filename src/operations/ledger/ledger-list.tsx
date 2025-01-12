import { TextField } from "react-admin";

import {
  List,
  MoneyTextField,
  TranslatedEnumTextField,
} from "@/common/components/list";
import { BoxPaperTitled } from "@/common/components";

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
