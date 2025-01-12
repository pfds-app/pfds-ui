import { Choices } from "@/common/utils/types";
import { UserRoleEnum } from "@/gen/jfds-api-client";

export const USER_ROLE_CHOICES: Choices<UserRoleEnum> = [
  {
    id: "ADMIN",
    name: "custom.enum.user_role.ADMIN"
  },
  {
    id: "REGION_MANAGER",
    name: "custom.enum.user_role.REGION_MANAGER"
  },
  {
    id: "COMMITTEE_MANAGER",
    name: "custom.enum.user_role.COMMITTEE_MANAGER"
  },
  {
    id: "ASSOCIATION_MANAGER",
    name: "custom.enum.user_role.ASSOCIATION_MANAGER"
  },
  {
    id: "SIMPLE_USER",
    name: "custom.enum.user_role.SIMPLE_USER"
  },
]

