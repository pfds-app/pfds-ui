import { Choices } from "@/common/utils/types";
import { UserGenderEnum } from "@/gen/jfds-api-client";

export const USER_GENDER_CHOICES: Choices<UserGenderEnum> = [
  {
    id: "MALE",
    name: "custom.enum.user_gender.MALE",
  },
  {
    id: "FEMALE",
    name: "custom.enum.user_gender.FEMALE",
  },
];
