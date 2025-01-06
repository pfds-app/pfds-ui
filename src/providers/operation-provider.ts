import { Operation } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { moneysApi } from "./api";

export const operationProvider: ResourceProvider<Operation> = {
  resource: "operation",
  getList: ({ filter = {}, pagination: { perPage, page } }) => {
    const { name } = filter;
    return unwrap(() => moneysApi().getOperations(name, page, perPage));
  },
  delete: ({ id }) => {
    return unwrap(() => moneysApi().deleteOperationById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => moneysApi().getOperationById(id));
  },
  saveOrUpdate: async ({ data: operation }) => {
    const [response] = await unwrap(() =>
      moneysApi().crupdateOperations([operation as Operation])
    );
    return response;
  },
};
