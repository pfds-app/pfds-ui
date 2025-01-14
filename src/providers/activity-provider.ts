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
};
