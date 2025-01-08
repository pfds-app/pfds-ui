import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { TicketStatus } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { moneysApi } from "./api";

export const ticketStatusProvider: ResourceProvider<TicketStatus & { id: string }> = {
  resource: "ticket-status",
  getList: async ({ meta }) => {
    if (!meta?.operationId) {
      return [];
    }

    const results = await unwrap(() => moneysApi().getAllOperationTicketsStatus(meta?.operationId!));
    return results.map(result => ({ id: result.ticket.id, ...result }))
  },
};
