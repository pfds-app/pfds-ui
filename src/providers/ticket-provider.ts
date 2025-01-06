import { CrupdateTicket, Ticket } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { moneysApi } from "./api";

export const ticketProvider: ResourceProvider<Ticket> = {
  resource: "ticket",
  getList: ({ pagination: { perPage, page } }) => {
    return unwrap(() => moneysApi().getTickets(page, perPage));
  },
  delete: ({ id }) => {
    return unwrap(() => moneysApi().deleteTicketById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => moneysApi().getTicketById(id));
  },
  saveOrUpdate: async ({ data: ticket }) => {
    const [response] = await unwrap(() =>
      moneysApi().crupdateTickets([ticket as CrupdateTicket])
    );
    return response;
  },
};
