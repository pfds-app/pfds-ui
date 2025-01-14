import { GetUserMembersStatsTypeEnum } from "@/gen/jfds-api-client";
import { Choices } from "@/common/utils/types";

export const USER_STAT_TYPE_CHOICES: Choices<GetUserMembersStatsTypeEnum> = [
  {
    id: "PER_YEAR",
    name: "custom.enum.user_stat_type.PER_YEAR",
  },
  {
    id: "ACCULUMATED",
    name: "custom.enum.user_stat_type.ACCULUMATED",
  },
];
