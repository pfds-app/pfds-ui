import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { v4 as uuid } from "uuid";

import { LedgerStat } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { moneysApi } from "./api";

export const ledgerStatProvider: ResourceProvider<LedgerStat & { id: string }> =
  {
    resource: "ledger-stat",
    getList: async ({ filter = {} }) => {
      const { year, type } = filter;

      const results = await unwrap(() =>
        moneysApi().getLedgerStats(year, type)
      );

      return results.map((stat) => ({ ...stat, id: uuid() }));
    },
  };
