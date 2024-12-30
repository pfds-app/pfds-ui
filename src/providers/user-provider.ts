import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { RestUser } from "@/gen/pfds-api-client";
import { unwrap } from "./utils";
import { usersApi } from "./api";

export const userProvider: ResourceProvider<RestUser> = {
  resource: "users",
  getOne: async ({ id }) => {
    return unwrap(() => usersApi().getUserById(id));
  },
};
