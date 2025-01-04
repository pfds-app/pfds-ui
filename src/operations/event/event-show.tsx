import { FlexBox } from "@/common/components";
import { CircularProgress, Typography } from "@mui/material";
import { Event } from "@/gen/jfds-api-client";
import { usePalette } from "@/common/hooks";
import { useGetOne, useTranslate } from "react-admin";

export const EventShow = ({ id }: { id: string }) => {
  const { data: event, isLoading } = useGetOne<Event>("event", { id });
  const translate = useTranslate();
  const { textSecondaryColor } = usePalette();

  if (isLoading) {
    return (
      <FlexBox sx={{ width: "100%" }}>
        <CircularProgress />
      </FlexBox>
    );
  }

  return (
    <>
      <Typography
        sx={{
          fontSize: "1rem",
          my: 1,
          textAlign: "center",
          color: textSecondaryColor,
        }}
      >
        Activité: {event?.name}
      </Typography>
      <FlexBox
        sx={{
          alignItems: "start",
          width: "100%",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography sx={{ fontSize: "14px", color: textSecondaryColor }}>
          {translate("resources.event.fields.place")}: {event?.place}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: textSecondaryColor }}>
          {translate("resources.event.fields.beginDate")}: {event?.beginDate}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: textSecondaryColor }}>
          {translate("resources.event.fields.endDate")}: {event?.endDate}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: textSecondaryColor }}>
          Organisateur: Vovonan'ny Tanora
        </Typography>
      </FlexBox>
    </>
  );
};
