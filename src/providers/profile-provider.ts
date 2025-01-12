import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { User } from "@/gen/jfds-api-client";
import { userProvider } from "./user-provider";

export const profileProvider: ResourceProvider<User> = {
  resource: "profile",
  getList: () => Promise.resolve([]),
  getOne: (args) => userProvider.getOne!(args),
  saveOrUpdate: (args) => userProvider.saveOrUpdate!(args),
};
