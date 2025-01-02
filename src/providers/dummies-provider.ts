import { type Dummy } from "@/gen/jfds-api-client";
import { type ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { healthApi } from "./api";

export const dummiesprovider: ResourceProvider<Dummy> = {
  resource: "dummies",
  getList: async ({ pagination }) => {
    return healthApi()
      .getPrivateDummies(pagination.page, pagination.perPage)
      .then((response) => response.data);
  },
};
