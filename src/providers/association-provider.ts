import { Association } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { resourcesApi } from "./api";

export const associationProvider: ResourceProvider<Association> = {
  resource: "association",
  getList: ({ pagination: { perPage, page } }) => {
    return unwrap(() => resourcesApi().getAssociations(page, perPage));
  },
  delete: ({ id }) => {
    return unwrap(() => resourcesApi().deleteAssociationById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => resourcesApi().getAssociationById(id));
  },
  saveOrUpdate: async ({ data: association }) => {
    const [response] = await unwrap(() =>
      resourcesApi().crupdateAssociations([association as Association])
    );
    return response;
  },
  getMany: async (_resource, { ids }) => {
    const [id] = ids as string[]; // as we use only select input and never array input
    return {
      data: [await unwrap(() => resourcesApi().getAssociationById(id))],
    } as any;
  },
};
