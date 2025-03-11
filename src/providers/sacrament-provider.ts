import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Sacrament } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { resourcesApi } from "./api";

export const sacramentProvider: ResourceProvider<Sacrament> = {
  resource: "sacrament",
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
  getMany: async (_resource, { ids }) => {
    const [id] = ids as string[]; // as we use only select input and never array input
    return {
      data: [await unwrap(() => resourcesApi().getSacramentById(id))],
    } as any;
  },
};
