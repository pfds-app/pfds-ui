import { WithLayoutPadding } from "@/common/components";
import { LedgerCreate } from "./ledger-create";
import { LedgerList } from "./ledger-list";
import { ShowIfRole } from "@/security/components";
import { UserRoleEnum } from "@/gen/jfds-api-client";

export const LedgerPage = () => {
  return (
    <WithLayoutPadding sx={{ px: 3 }}>
      <ShowIfRole roles={[UserRoleEnum.Admin]}>
        <LedgerCreate />
      </ShowIfRole>
      <LedgerList />
    </WithLayoutPadding>
  );
};
