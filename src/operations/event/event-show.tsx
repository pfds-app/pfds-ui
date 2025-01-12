import { CircularProgress, Typography } from "@mui/material";
import { useGetOne, useTranslate } from "react-admin";

import { Event } from "@/gen/jfds-api-client";
import { FlexBox } from "@/common/components";
import { usePalette } from "@/common/hooks";

export const EventShow = ({ id }: { id: string }) => {
  const translate = useTranslate();
  const { data: event, isLoading } = useGetOne<Event>("event", { id });
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
        {translate("custom.common.activity")}: {event?.name}
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
          {translate("custom.common.orgnisator")}: Vovonan'ny Tanora
        </Typography>
      </FlexBox>
    </>
  );
};
