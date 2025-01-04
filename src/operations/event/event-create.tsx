import { DateInput, required, TextInput, useTranslate } from "react-admin";
import { Event } from "@/gen/jfds-api-client";
import { BoxPaperTitled } from "@/common/components";
import { Create } from "@/common/components/create";
import { createTranform } from "@/common/utils/transform";
import { toISOString } from "@/common/utils/date";

export const EventCreate = () => {
  const translate = useTranslate();

  const transform = (
    event: Pick<Event, "name" | "place" | "beginDate" | "endDate">
  ): Event => {
    return createTranform({
      ...event,
      beginDate: toISOString(event.beginDate),
      endDate: toISOString(event.endDate ?? event.beginDate),
    });
  };

  return (
    <BoxPaperTitled
      title={"Evènements"}
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create transform={transform} resource="event">
        <TextInput validate={required()} source="name" />
        <TextInput validate={required()} source="place" />
        <DateInput validate={required()} source="beginDate" />
        <DateInput
          label={`${translate("resources.event.fields.endDate")} (${translate("pfds.common.optional")})}`}
          source="endDate"
        />
      </Create>
    </BoxPaperTitled>
  );
};
