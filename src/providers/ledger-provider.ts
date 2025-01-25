import { Ledger } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { moneysApi } from "./api";

export const ledgerProvider: ResourceProvider<Ledger> = {
  resource: "ledger",
  getList: ({ filter = {}, pagination: { perPage, page } }) => {
    const { name, year, month } = filter;
    return unwrap(() =>
      moneysApi().getLedgers(name, year, month, page, perPage)
    );
  },
  delete: ({ id }) => {
    return unwrap(() => moneysApi().deleteLedgerById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => moneysApi().getLedgerById(id));
  },
  saveOrUpdate: async ({ data: ledger }) => {
    const [response] = await unwrap(() =>
      moneysApi().crupdateLedgers([ledger as Ledger])
    );
    return response;
  },
};
