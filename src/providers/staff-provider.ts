import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { User } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { moneysApi, usersApi } from "./api";

export const staffProvider: ResourceProvider<User> = {
  resource: "staff",
  getList: async ({ meta }) => {
    if (!meta?.operationId) {
      return [];
    }

    return unwrap(() => moneysApi().getAllOperationStaffs(meta?.operationId!));
  },
  getMany: async (_resource, { ids }) => {
    const [id] = ids;
    return {
      data: [await unwrap(() => usersApi().getUserById(id as string))],
    } as any;
  },
};
