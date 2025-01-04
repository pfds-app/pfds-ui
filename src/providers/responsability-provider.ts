import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Responsability } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { resourcesApi } from "./api";

export const responsabilityProvider: ResourceProvider<Responsability> = {
  resource: "responsability",
  getList: ({ filter = {}, pagination: { perPage, page } }) => {
    const { name } = filter;
    return unwrap(() =>
      resourcesApi().getResponsabilities(name, page, perPage)
    );
  },
  delete: ({ id }) => {
    return unwrap(() => resourcesApi().deleteResponsabilityById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => resourcesApi().getResponsabilityById(id));
  },
  saveOrUpdate: async ({ data: responsability }) => {
    const [response] = await unwrap(() =>
      resourcesApi().crupdateResponsabilities([
        responsability as Responsability,
      ])
    );
    return response;
  },
};
