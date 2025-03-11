import { UserRoleEnum } from "@/gen/jfds-api-client";
import { useRole } from "@/security/hooks";
import { ReactNode } from "react";

export const PassPropsIfRole = <T,>({
  render,
  roles,
  role: providedRole,
  ...props
}: Partial<T> & {
  role?: UserRoleEnum;
  roles: UserRoleEnum[];
  render: (props: Partial<T>) => ReactNode;
}) => {
  const role = useRole();

  const match = roles.includes(providedRole ?? role);

  return render((match ? (props ?? {}) : {}) as Partial<T>);
};
