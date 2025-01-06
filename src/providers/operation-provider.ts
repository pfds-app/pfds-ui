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
  getMany: async (_resource, { ids }) => {
    const [id] = ids as string[]; // as we use only select input and never array input
    return {
      data: [await unwrap(() => moneysApi().getOperationById(id))],
    } as any;
  },
};
