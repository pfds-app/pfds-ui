import { GetLedgerStatsTypeEnum } from "@/gen/jfds-api-client";
import { Choices } from "@/common/utils/types";

export const LEDGER_STAT_TYPE_CHOICES: Choices<GetLedgerStatsTypeEnum> = [
  {
    id: "PER_YEAR",
    name: "custom.enum.ledger_stat_type.PER_YEAR",
  },
  {
    id: "ACCULUMATED",
    name: "custom.enum.ledger_stat_type.ACCULUMATED",
  },
];
