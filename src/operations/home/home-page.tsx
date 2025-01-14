import { Avatar, Badge, Typography } from "@mui/material";
import { FunctionField, useTranslate } from "react-admin";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";

dayjs.extend(isToday);

import {
  BoxPaperTitled,
  FlexBox,
  WithLayoutPadding,
} from "@/common/components";
import { List } from "@/common/components/list";
import { User, Event, Activity } from "@/gen/jfds-api-client";
import { formatUserName } from "@/common/utils/format-user-name";
import { createImageUrl } from "@/providers";
import { newDateToISOString } from "@/common/utils/date";
import { DEFAULT_PICTURE_IMG } from "@/common/utils/constant";

export const HomePage = () => {
  const translate = useTranslate();

  return (
    <WithLayoutPadding sx={{ mt: 2 }}>
      <FlexBox sx={{ width: "100%", alignItems: "stretch", gap: 2 }}>
        <BoxPaperTitled
          sx={{ flex: 1 }}
          title={translate("custom.common.activity_today")}
        >
          <List
            queryOptions={{
              meta: {
                afterDate: newDateToISOString(),
              },
            }}
            resource="activity"
            sx={{
              "& th": {
                display: "none",
              },
            }}
            datagridProps={{
              rowSx: undefined,
            }}
          >
            <FunctionField
              label=" "
              render={(activity: Activity) => {
                const isToday = dayjs(activity.beginDate).isToday();
                return (
                  <Typography
                    sx={{ fontSize: "14px", display: "inline-flex", gap: 2 }}
                  >
                    <span>{activity.name}</span>
                    {isToday && (
                      <span style={{ color: "green" }}>
                        ({translate("custom.common.today")})
                      </span>
                    )}
                  </Typography>
                );
              }}
            />
          </List>
        </BoxPaperTitled>
        <BoxPaperTitled
          sx={{ flex: 1 }}
          title={translate("custom.common.incoming_event")}
        >
          <List
            queryOptions={{
              meta: {
                afterDate: newDateToISOString(),
              },
            }}
            resource="event"
            sx={{
              "& th": {
                display: "none",
              },
            }}
            datagridProps={{
              rowSx: undefined,
            }}
          >
            <FunctionField
              label=" "
              render={(event: Event) => {
                const isToday = dayjs(event.beginDate).isToday();
                return (
                  <Typography
                    sx={{ fontSize: "14px", display: "inline-flex", gap: 2 }}
                  >
                    <span>{event.name}</span>
                    {isToday && (
                      <span style={{ color: "green" }}>
                        ({translate("custom.common.today")})
                      </span>
                    )}
                  </Typography>
                );
              }}
            />
          </List>
        </BoxPaperTitled>
      </FlexBox>
      <FlexBox sx={{ width: "100%", mt: 2, alignItems: "stretch", gap: 2 }}>
        <BoxPaperTitled
          sx={{ flex: 1 }}
          title={translate("custom.common.teams")}
        >
          <List
            resource="user"
            sx={{
              "& th": {
                display: "none",
              },
            }}
            datagridProps={{
              rowSx: undefined,
            }}
          >
            <FunctionField
              label=" "
              render={(user: User) => {
                const username = formatUserName(user);
                return (
                  <FlexBox sx={{ gap: 3, justifyContent: "start" }}>
                    <Badge
                      variant="dot"
                      badgeContent=" "
                      color="success"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                    >
                      <Avatar
                        alt={username}
                        src={
                          user?.photo
                            ? createImageUrl(user?.photo ?? "")
                            : DEFAULT_PICTURE_IMG
                        }
                        sx={{ width: "35px", height: "35px" }}
                      />
                    </Badge>
                    <Typography sx={{ fontSize: "14px" }}>
                      {username}
                    </Typography>
                  </FlexBox>
                );
              }}
            />
          </List>
        </BoxPaperTitled>
      </FlexBox>
    </WithLayoutPadding>
  );
};
