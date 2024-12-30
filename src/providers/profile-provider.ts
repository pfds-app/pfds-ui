import { RestUser } from "@/gen/pfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { usersApi } from "./api";

export const profileProvider: ResourceProvider<RestUser> = {
  resource: "profiles",
  getOne: async ({ id }) => {
    return unwrap(() => usersApi().getUserById(id));
  },
  getList: () => Promise.resolve([]),
};
