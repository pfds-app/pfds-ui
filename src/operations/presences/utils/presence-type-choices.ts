import { Choices } from "@/common/utils/types";

export enum PresenceTypeEnum {
  PRESENT = "PRESENT",
  ABSENT = "ABSENT",
}

export const PRESENCE_TYPE_CHOICES: Choices<PresenceTypeEnum> = [
  {
    id: PresenceTypeEnum.PRESENT,
    name: "custom.enum.presence.PRESENT",
  },
  {
    id: PresenceTypeEnum.ABSENT,
    name: "custom.enum.presence.ABSENT",
  },
];
