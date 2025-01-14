import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { v4 as uuid } from "uuid";

import { UserStat } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { usersApi } from "./api";

export const userStatProvider: ResourceProvider<
  UserStat & { id: string }
> = {
  resource: "user-stat",
  getList: async ({ filter = {} }) => {
    const { fromDate, endDate, type } = filter;

    const results = await unwrap(() =>
      usersApi().getUserMembersStats(fromDate, endDate, type)
    );

    return results.map((stat) => ({ ...stat, id: uuid() }));
  },
};
