import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Sacrament } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { resourcesApi } from "./api";

export const sacramentProvider: ResourceProvider<Sacrament> = {
  resource: "sacraments",
  getList: ({ filter = {}, pagination: { perPage, page } }) => {
    const { name } = filter;
    return unwrap(() => resourcesApi().getSacraments(name, page, perPage));
  },
  delete: ({ id }) => {
    return unwrap(() => resourcesApi().deleteSacramentById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => resourcesApi().getSacramentById(id));
  },
  saveOrUpdate: async ({ data: sacrament }) => {
    const [response] = await unwrap(() =>
      resourcesApi().crupdateSacraments([sacrament as Sacrament])
    );
    return response;
  },
};
