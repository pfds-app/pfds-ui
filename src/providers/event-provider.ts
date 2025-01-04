import { Event } from "@/gen/jfds-api-client";
import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { unwrap } from "./utils";
import { resourcesApi } from "./api";

export const eventProvider: ResourceProvider<Event> = {
  resource: "event",
  getList: ({ filter = {}, pagination: { perPage, page } }) => {
    const { name } = filter;
    return unwrap(() => resourcesApi().getEvents(name, page, perPage));
  },
  delete: ({ id }) => {
    return unwrap(() => resourcesApi().deleteEventById(id));
  },
  getOne: ({ id }) => {
    return unwrap(() => resourcesApi().getEventById(id));
  },
  saveOrUpdate: async ({ data: event }) => {
    const [response] = await unwrap(() =>
      resourcesApi().crupdateEvents([event as Event])
    );
    return response;
  },
};
