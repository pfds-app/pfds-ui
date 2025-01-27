import { Activity } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { resourcesApi } from "./api";

export const activityProvider: ResourceProvider<Activity> = {
  resource: "activity",
  getList: ({ filter = {}, pagination: { perPage, page }, meta }) => {
    const { name } = filter;
    return unwrap(() =>
      resourcesApi().getActivities(name, meta?.afterDate, page, perPage)
    );
  },
  delete: ({ id }) => {
    return unwrap(() => resourcesApi().deleteActivityById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => resourcesApi().getActivityById(id));
  },
  saveOrUpdate: async ({ data: activity }) => {
    const [response] = await unwrap(() =>
      resourcesApi().crupdateActivities([activity as Activity])
    );
    return response;
  },

  getMany: async (_resource, { ids }) => {
    const [id] = ids as string[]; // as we use only select input and never array input
    return {
      data: [await unwrap(() => resourcesApi().getActivityById(id))],
    } as any;
  },
};
