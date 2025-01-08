import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { PayedTicket } from "@/gen/jfds-api-client";
import { unwrap } from "./utils";
import { moneysApi } from "./api";

export type CrupdatePayedTicketPayload = {
  id: string;
  operationId: string;
  staffId: string;
  payedTikects: PayedTicket[];
};
export type MappedGetOnePayedTicket = PayedTicket & {
  payedTicketId: string;
};
export const payedTiketProvider: ResourceProvider<PayedTicket> = {
  resource: "payed-ticket",
  getList: async ({ meta, pagination }) => {
    if (!meta?.operationId || !meta?.staffId) {
      return [];
    }

    return unwrap(() =>
      moneysApi().getPayedTickets(
        meta?.operationId!,
        meta?.staffId!,
        pagination.page,
        pagination.perPage
      )
    );
  },
  saveOrUpdate: async ({ data }) => {
    const { staffId, operationId, payedTikects } =
      data as CrupdatePayedTicketPayload;
    await moneysApi().crupdatePayedTickets(operationId, staffId, payedTikects);
    return data as any;
  },
  getOne: async ({ meta, id: ticketNumber }) => {
    if (!meta?.operationId) {
      return { id: ticketNumber } as any;
    }
    const result = await unwrap(() =>
      moneysApi().getOperationTicketByTicketNumber(
        meta?.operationId,
        ticketNumber as any
      )
    );
    return {
      ...result,
      id: ticketNumber,
      payedTicketId: result.id,
    } as MappedGetOnePayedTicket;
  },
};
