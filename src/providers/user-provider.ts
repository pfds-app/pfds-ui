import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { User } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { usersApi } from "./api";

export const userProvider: ResourceProvider<User> = {
  resource: "users",
  getOne: async ({ id }) => {
    return unwrap(() => usersApi().getUserById(id));
  },
};
