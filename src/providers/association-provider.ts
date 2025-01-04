import { Association } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { resourcesApi } from "./api";

export const associationProvider: ResourceProvider<Association> = {
  resource: "association",
  getList: ({ filter = {}, pagination: { perPage, page } }) => {
    const { name } = filter;
    return unwrap(() => resourcesApi().getAssociations(name, page, perPage));
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
};
