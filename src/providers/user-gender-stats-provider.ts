import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { v4 as uuid } from "uuid";

import { UserGenderStat } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { usersApi } from "./api";

export const userGenderStatsProvider: ResourceProvider<
  UserGenderStat & { id: string }
> = {
  resource: "user-gender-stats",
  getList: async ({ filter = {} }) => {
    const { fromDate, endDate } = filter;

    const results = await unwrap(() =>
      usersApi().getUserGenderStats(fromDate, endDate)
    );

    return results.map((stat) => ({ ...stat, id: uuid() }));
  },
};
