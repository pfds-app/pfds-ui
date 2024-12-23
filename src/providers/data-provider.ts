import { createRaProvider } from "@rck.princy/ra-data-provider-wrapper";
import { dummiesprovider } from "./dummies-provider";

export const dataProvider = createRaProvider([dummiesprovider], {
  getListOptions: {
    defaultPagination: {
      page: 1,
      perPage: 10,
    },
    getPageInfo: async ({ currentProvider, getListParams: { pagination } }) => {
      const nextPage = await currentProvider.getList!({
        pagination: {
          perPage: pagination.perPage,
          page: pagination.page + 1,
        },
      });

      return {
        pageInfo: {
          hasNextPage: nextPage.length > 0,
          hasPreviousPage: (pagination?.page ?? 1) > 1,
        },
      };
    },
  },
});
