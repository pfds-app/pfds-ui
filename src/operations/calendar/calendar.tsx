import { CircularProgress, Box, Typography } from "@mui/material";
import { Circle, Close } from "@mui/icons-material";
import { useMemo, useState } from "react";
import { useGetList, useLocale, useTranslate } from "react-admin";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { Activity } from "@/gen/jfds-api-client";
import {
  FlexBox,
  WithLayoutPadding,
  DialogContent,
  TooltipIconButton,
} from "@/common/components";
import { ActivityShow } from "../activity";
import { stringifyObj } from "@/common/utils/stringify-obj";
import { usePalette } from "@/common/hooks";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { MAX_ITEM_PER_LIST } from "@/common/utils/constant";

export type ActivityElement = {
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
  const [activityIdToShow, setActivityIdToShow] = useState<string | null>(null);
  const { toggleStatus } = useDialogContext<false>();
  const { primaryPalette, textSecondaryColor } = usePalette();
  const { data: activities = [], isLoading } = useGetList<Activity>(
    "activity",
    {
      pagination: {
        page: 1,
        perPage: MAX_ITEM_PER_LIST,
      },
    }
  );
  const locale = useLocale();
  const translate = useTranslate();

  const mappedActivities: ActivityElement[] = useMemo(() => {
    return activities.map((activity) => ({
      id: activity.id,
      title: activity.name,
      date:
        activity.beginDate === activity.endDate
          ? new Date(activity.beginDate)
          : undefined,
      start:
        activity.beginDate !== activity.endDate
          ? new Date(activity.beginDate)
          : undefined,
      end:
        activity.beginDate !== activity.endDate
          ? new Date(activity.endDate)
          : undefined,
    }));
  }, [stringifyObj(activities)]);

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
            events={mappedActivities}
            initialView="dayGridMonth"
            eventContent={ActivityContent}
            eventClick={({ event: { id: activityId } }) => {
              setActivityIdToShow(activityId);
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
        {activityIdToShow && <ActivityShow id={activityIdToShow} />}
      </DialogContent>
    </>
  );
};

const ActivityContent = (activityInfo: any) => {
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
      <span>{activityInfo.event.title}</span>
    </Typography>
  );
};
