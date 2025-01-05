import { WithLayoutPadding } from "@/common/components";
import { LedgerCreate } from "./ledger-create";
import { LedgerList } from "./ledger-list";

export const LedgerPage = () => {
  return (
    <WithLayoutPadding sx={{ px: 3 }}>
      <LedgerCreate />
      <LedgerList />
    </WithLayoutPadding>
  );
};
