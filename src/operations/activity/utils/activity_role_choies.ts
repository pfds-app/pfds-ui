import { Choices } from "@/common/utils/types";
import { ActivityRoleTypeEnum } from "@/gen/jfds-api-client";

export const ACTIVITY_ROLE_CHOICES: Choices<ActivityRoleTypeEnum> = [
  {
    id: "ALL",
    name: "custom.enum.activity_role_type.ALL",
  },
  {
    id: "MANAGER",
    name: "custom.enum.activity_role_type.MANAGER",
  },
];
