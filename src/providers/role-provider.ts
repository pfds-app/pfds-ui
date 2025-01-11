import { Role } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { usersApi } from "./api";

export const roleProvider: ResourceProvider<Role> = {
  resource: "role",
  getList: ({ filter = {}, pagination: { perPage, page } }) => {
    const { name } = filter;
    return unwrap(() => usersApi().getRoles(name, page, perPage));
  },
  delete: ({ id }) => {
    return unwrap(() => usersApi().deleteRoleById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => usersApi().getRoleById(id));
  },
  saveOrUpdate: async ({ data: role }) => {
    const [response] = await unwrap(() =>
      usersApi().crupdateRoles([role as Role])
    );
    return response;
  },
  getMany: async (_resource, { ids }) => {
    const [id] = ids as string[]; // as we use only select input and never array input
    return {
      data: [await unwrap(() => usersApi().getRoleById(id))],
    } as any;
  },
};
