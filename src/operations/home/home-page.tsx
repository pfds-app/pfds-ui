import { Avatar, Badge, Typography } from "@mui/material"
import { FunctionField, useTranslate } from "react-admin"

import { BoxPaperTitled, FlexBox, WithLayoutPadding } from "@/common/components"
import { List } from "@/common/components/list"
import { User } from "@/gen/jfds-api-client";
import { formatUserName } from "@/common/utils/format-user-name";
import { createImageUrl } from "@/providers";
import { DEFAULT_PICTURE_IMG } from "@/common/utils/constant";

export const HomePage = () => {
  const translate = useTranslate();

  return (
    <WithLayoutPadding sx={{ mt: 2 }}>
      <FlexBox sx={{ width: '100%', gap: 2 }}>
        <BoxPaperTitled sx={{ flex: 1 }} title={translate("custom.common.teams")}>
          <List
            resource="user"
            sx={{
              "& tr, & td": { border: "none !important" },
              "& th": {
                display: "none"
              }
            }}
          >
            <FunctionField label=" " render={(user: User) => {
              const username = formatUserName(user);
              return (
                <FlexBox sx={{ gap: 3, justifyContent: "start" }}>
                  <Badge
                    variant="dot"
                    badgeContent=" "
                    color="success"
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
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
                  <Typography sx={{ fontSize: "14px" }}>{username}</Typography>
                </FlexBox>
              )
            }} />
          </List>
        </BoxPaperTitled>
        <BoxPaperTitled sx={{ flex: 1 }} title="Test">
        </BoxPaperTitled>
      </FlexBox>
    </WithLayoutPadding>
  )
}
