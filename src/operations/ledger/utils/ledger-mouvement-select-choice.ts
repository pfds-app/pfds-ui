import { Choices } from "@/common/utils/types";
import { LedgerMouvementTypeEnum } from "@/gen/jfds-api-client";

export const LEDGER_MOUVEMENT_CHOICES: Choices<LedgerMouvementTypeEnum> = [
  {
    id: "IN",
    name: "custom.enum.ledger_mouvement_type.IN",
  },
  {
    id: "OUT",
    name: "custom.enum.ledger_mouvement_type.OUT",
  },
];
