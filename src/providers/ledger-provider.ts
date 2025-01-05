import { Ledger } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { ledgersApi } from "./api";

export const ledgerProvider: ResourceProvider<Ledger> = {
  resource: "ledger",
  getList: ({ filter = {}, pagination: { perPage, page } }) => {
    const { name } = filter;
    return unwrap(() => ledgersApi().getLedgers(name, page, perPage));
  },
  delete: ({ id }) => {
    return unwrap(() => ledgersApi().deleteLedgerById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => ledgersApi().getLedgerById(id));
  },
  saveOrUpdate: async ({ data: ledger }) => {
    const [response] = await unwrap(() =>
      ledgersApi().crupdateLedgers([ledger as Ledger])
    );
    return response;
  },
};
