import { createRaProvider } from "@rck.princy/ra-data-provider-wrapper";

import { userProvider } from "./user-provider";
import { profileProvider } from "./profile-provider";
import { sacramentProvider } from "./sacrament-provider";
import { regionProvider } from "./region-provider";
import { associationProvider } from "./association-provider";
import { committeeProvider } from "./committee-provider";
import { eventProvider } from "./event-provider";
import { responsabilityProvider } from "./responsability-provider";
import { ledgerProvider } from "./ledger-provider";
import { operationProvider } from "./operation-provider";
import { ticketProvider } from "./ticket-provider";
import { payedTiketProvider } from "./payed-ticket-provider";
import { staffProvider } from "./staff-provider";
import { ticketStatusProvider } from "./ticket-status-provider";

export const dataProvider = createRaProvider(
  [
    userProvider,
    profileProvider,
    sacramentProvider,
    regionProvider,
    associationProvider,
    committeeProvider,
    eventProvider,
    responsabilityProvider,
    ledgerProvider,
    operationProvider,
    ticketProvider,
    payedTiketProvider,
    staffProvider,
    ticketStatusProvider,
  ],
  {
    getListOptions: {
      defaultPagination: {
        page: 1,
        perPage: 10,
      },
      getPageInfo: async ({
        currentProvider,
        getListParams: { pagination },
      }) => {
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
  }
);
