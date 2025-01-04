import { DateInput, required, TextInput, useTranslate } from "react-admin";
import { Edit } from "@/common/components/edit";
import { updateTranform } from "@/common/utils/transform";
import { Event } from "@/gen/jfds-api-client";
import { FC } from "react";
import { toISOString } from "@/common/utils/date";

export const EventEdit: FC<{ event: Event }> = ({ event }) => {
  const translate = useTranslate();
  const transform = (event: Event): Event => {
    return updateTranform({
      ...event,
      beginDate: toISOString(event.beginDate),
      endDate: toISOString(event.endDate ?? event.beginDate),
    });
  };

  return (
    <Edit id={event.id} resource="event" transform={transform}>
      <TextInput validate={required()} source="name" />
      <TextInput validate={required()} source="place" />
      <DateInput validate={required()} source="beginDate" />
      <DateInput
        label={`${translate("resources.event.fields.endDate")} (${translate("pfds.common.optional")})}`}
        source="endDate"
      />
    </Edit>
  );
};
