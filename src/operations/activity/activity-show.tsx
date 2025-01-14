import { CircularProgress, Typography } from "@mui/material";
import { useGetOne, useTranslate } from "react-admin";

import { Activity } from "@/gen/jfds-api-client";
import { FlexBox } from "@/common/components";
import { usePalette } from "@/common/hooks";

export const ActivityShow = ({ id }: { id: string }) => {
  const translate = useTranslate();
  const { data: activity, isLoading } = useGetOne<Activity>("activity", { id });
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
        {translate("custom.common.activity")}: {activity?.name}
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
          {translate("resources.activity.fields.place")}: {activity?.place}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: textSecondaryColor }}>
          {translate("resources.activity.fields.beginDate")}:{" "}
          {activity?.beginDate}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: textSecondaryColor }}>
          {translate("resources.activity.fields.endDate")}: {activity?.endDate}
        </Typography>
        <Typography sx={{ fontSize: "14px", color: textSecondaryColor }}>
          {translate("resources.activity.fields.organisatorRole")}:{" "}
          {translate(`custom.enum.user_role.${activity?.organisatorRole}`)}
        </Typography>
      </FlexBox>
    </>
  );
};
