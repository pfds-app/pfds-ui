import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { OperationResult } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { moneysApi } from "./api";

export const operationResultProvider: ResourceProvider<
  OperationResult & { id: string }
> = {
  resource: "operation-result",
  getList: async ({ pagination }) => {
    const results = await unwrap(() =>
      moneysApi().getOperationResults(pagination.page, pagination.perPage)
    );
    return results.map((result) => ({ id: result.operation.id, ...result }));
  },
};
