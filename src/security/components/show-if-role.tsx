import { UserRoleEnum } from "@/gen/jfds-api-client";
import { FC, PropsWithChildren } from "react";

import { useRole } from "../hooks";

export type ShowIfRoleProps = PropsWithChildren<{
  roles: UserRoleEnum[];
  role?: UserRoleEnum;
}>;

export const ShowIfRole: FC<ShowIfRoleProps> = ({
  role: providedRole,
  roles,
  children,
}) => {
  const role = useRole();

  if (!roles.includes(providedRole ?? role)) {
    return null;
  }

  return children;
};
