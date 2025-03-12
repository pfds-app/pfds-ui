import { DeletedRole } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { usersApi } from "./api";

export const deletedRoleProvider: ResourceProvider<DeletedRole> = {
  resource: "deleted-role",
  getList: ({ filter = {}, pagination: { perPage, page } }) => {
    const { role } = filter;
    return unwrap(() => usersApi().findDeletedRoles(role, page, perPage));
  },
};
