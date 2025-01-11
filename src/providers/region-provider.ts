import { Region } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { resourcesApi } from "./api";

export const regionProvider: ResourceProvider<Region> = {
  resource: "region",
  getList: ({ filter = {}, pagination: { perPage, page } }) => {
    const { name } = filter;
    return unwrap(() => resourcesApi().getRegions(name, page, perPage));
  },
  delete: ({ id }) => {
    return unwrap(() => resourcesApi().deleteRegionById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => resourcesApi().getRegionById(id));
  },
  saveOrUpdate: async ({ data: region }) => {
    const [response] = await unwrap(() =>
      resourcesApi().crupdateRegions([region as Region])
    );
    return response;
  },
  getMany: async (_resource, { ids }) => {
    const [id] = ids as string[]; // as we use only select input and never array input
    return {
      data: [await unwrap(() => resourcesApi().getRegionById(id))],
    } as any;
  },
};
