import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { User } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { usersApi } from "./api";

export const userProvider: ResourceProvider<User> = {
  resource: "users",
  getOne: async ({ id }) => {
    return unwrap(() => usersApi().getUserById(id));
  },
  getList: async ({ filter = {}, pagination: { perPage, page } }) => {
    const { firstName, lastName } = filter;
    return unwrap(() =>
      usersApi().getUsers(lastName, firstName, page, perPage)
    );
  },
  getMany: async (_resource, { ids }) => {
    const [id] = ids as string[]; // as we use only select input and never array input
    return {
      data: [await unwrap(() => usersApi().getUserById(id))],
    } as any;
  },
};
