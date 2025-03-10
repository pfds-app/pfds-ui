import { stringifyObj } from "@/common/utils/stringify-obj";
import { User, Whoami } from "@/gen/jfds-api-client";

export type ParsedQrValue = Pick<
  User,
  "id" | "firstName" | "lastName" | "role" | "username"
>;
export const toQrCodeValue = ({
  id,
  firstName,
  lastName,
  role,
  username,
}: User | Whoami) => {
  return stringifyObj({
    id,
    firstName,
    lastName,
    role,
    username,
  });
};
