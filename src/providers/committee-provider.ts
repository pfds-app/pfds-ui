import { Committee } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { resourcesApi } from "./api";

export const committeeProvider: ResourceProvider<Committee> = {
  resource: "committee",
  getList: ({ filter = {}, pagination: { perPage, page } }) => {
    const { name } = filter;
    return unwrap(() => resourcesApi().getCommittees(name, page, perPage));
  },
  delete: ({ id }) => {
    return unwrap(() => resourcesApi().deleteCommitteeById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => resourcesApi().getCommitteeById(id));
  },
  saveOrUpdate: async ({ data: committee }) => {
    const [response] = await unwrap(() =>
      resourcesApi().crupdateCommittees([committee as Committee])
    );
    return response;
  },
  getMany: async (_resource, { ids }) => {
    const [id] = ids as string[]; // as we use only select input and never array input
    return {
      data: [await unwrap(() => resourcesApi().getCommitteeById(id))],
    } as any;
  },
};
