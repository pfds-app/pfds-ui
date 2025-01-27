import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { resourcesApi } from "./api";

export const presenceProvider: ResourceProvider<any> = {
  resource: "presence",
  getList: async ({ filter = {}, pagination: { perPage, page } }) => {
    const { activityId, isPresent } = filter;
    if (!activityId) {
      return [];
    }

    const status = await unwrap(() =>
      resourcesApi().getPresencesStatus(activityId, isPresent, page, perPage)
    );
    return status.map((stat) => ({ id: stat.user.id, ...stat }));
  },
  saveOrUpdate: async ({ data: wrappedData, meta }) => {
    const { presences } = wrappedData;
    await unwrap(() =>
      resourcesApi().crupdatePresences(meta?.activityId, presences)
    );
    return wrappedData;
  },
};
