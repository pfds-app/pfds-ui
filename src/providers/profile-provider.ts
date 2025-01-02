import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { User } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { usersApi } from "./api";

export const profileProvider: ResourceProvider<User> = {
  resource: "profiles",
  getOne: async ({ id }) => {
    return unwrap(() => usersApi().getUserById(id));
  },
  getList: () => Promise.resolve([]),
};
