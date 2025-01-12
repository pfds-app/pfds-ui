import { CircularProgress, Box, Typography } from "@mui/material";
import { Circle, Close } from "@mui/icons-material";
import { useMemo, useState } from "react";
import { useGetList, useLocale, useTranslate } from "react-admin";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { Event } from "@/gen/jfds-api-client";
import {
  FlexBox,
  WithLayoutPadding,
  DialogContent,
  TooltipIconButton,
} from "@/common/components";
import { EventShow } from "../event";
import { stringifyObj } from "@/common/utils/stringify-obj";
import { usePalette } from "@/common/hooks";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { MAX_ITEM_PER_LIST } from "@/common/utils/constant";

export type EventElement = {
  id: string;
  title: string;
  date?: Date;
  start?: Date;
  end?: Date;
};

export const Calendar = () => {
  return (
    <DialogContextProvider popover={false}>
      <CalendarContent />
    </DialogContextProvider>
  );
};

const CalendarContent = () => {
  const [eventIdToShow, setEventIdToShow] = useState<string | null>(null);
  const { toggleStatus } = useDialogContext<false>();
  const { primaryPalette, textSecondaryColor } = usePalette();
  const { data: events = [], isLoading } = useGetList<Event>("event", {
    pagination: {
      page: 1,
      perPage: MAX_ITEM_PER_LIST,
    },
  });
  const locale = useLocale();
  const translate = useTranslate();

  const mappedEvents: EventElement[] = useMemo(() => {
    return events.map((event) => ({
      id: event.id,
      title: event.name,
      date:
        event.beginDate === event.endDate
          ? new Date(event.beginDate)
          : undefined,
      start:
        event.beginDate !== event.endDate
          ? new Date(event.beginDate)
          : undefined,
      end:
        event.beginDate !== event.endDate ? new Date(event.endDate) : undefined,
    }));
  }, [stringifyObj(events)]);

  if (isLoading) {
    return (
      <FlexBox sx={{ width: "100%" }}>
        <CircularProgress />
      </FlexBox>
    );
  }

  return (
    <>
      <WithLayoutPadding>
        <Typography
          sx={{
            color: primaryPalette.main,
            fontWeight: "bold",
            fontSize: "1.8rem",
            my: 3,
            px: 5,
          }}
        >
          Teti-andro
        </Typography>
        <Box
          sx={{
            "height": "400px",
            "overflowY": "scroll",
            "px": 5,
            "& th": { color: primaryPalette.main },
            "& h2": {
              color: textSecondaryColor,
              fontWeight: "normal",
              fontSize: "1rem",
            },
          }}
        >
          <FullCalendar
            locale={locale}
            plugins={[dayGridPlugin]}
            events={mappedEvents}
            initialView="dayGridMonth"
            eventContent={EventContent}
            eventClick={({ event: { id: eventId } }) => {
              setEventIdToShow(eventId);
              toggleStatus();
            }}
          />
        </Box>
      </WithLayoutPadding>
      <DialogContent fullWidth maxWidth="xs">
        <FlexBox
          sx={{
            mb: 1,
            borderBottom: `1px solid ${textSecondaryColor}`,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              color: textSecondaryColor,
              fontWeight: "bold",
            }}
          >
            {translate("custom.common.event_details")}
          </Typography>
          <TooltipIconButton
            sx={{ mb: "1px" }}
            onClick={toggleStatus}
            title="ra.action.close"
          >
            <Close />
          </TooltipIconButton>
        </FlexBox>
        {eventIdToShow && <EventShow id={eventIdToShow} />}
      </DialogContent>
    </>
  );
};

const EventContent = (eventInfo: any) => {
  return (
    <Typography
      sx={{
        display: "inline-flex",
        gap: 1,
        alignItems: "center",
        px: 2,
        fontSize: "14px",
      }}
    >
      <Circle sx={{ fontSize: "10px", color: "#1ac714" }} />
      <span>{eventInfo.event.title}</span>
    </Typography>
  );
};
