import { UserRoleEnum } from "@/gen/jfds-api-client";
import { FC, PropsWithChildren } from "react";

import { useRole } from "../hooks";

export type ShowIfRoleProps = PropsWithChildren<{
  roles: UserRoleEnum[];
}>;

export const ShowIfRole: FC<ShowIfRoleProps> = ({ roles, children }) => {
  const role = useRole();

  if (!roles.includes(role)) {
    return null;
  }

  return children;
};
