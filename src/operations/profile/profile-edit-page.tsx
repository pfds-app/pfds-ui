import { TextInput, useTranslate } from "react-admin";
import { Box, Typography } from "@mui/material";
import { FlexBox, WithLayoutPadding } from "@/common/components";
import { Show } from "@/common/components/show";
import { Edit } from "@/common/components/edit";
import { usePalette } from "@/common/hooks";
import { useWhoami } from "@/security/hooks";
import { ProfilePictureShow } from "./components";
import { UpdateUser, User } from "@/gen/jfds-api-client";
import { updateTranform } from "@/common/utils/transform";
import { UserSaveOrUpdateActionType } from "@/providers";

export const ProfileEditPage = () => {
  const { textSecondaryColor } = usePalette();
  const translate = useTranslate();
  const whoami = useWhoami();

  const transformUpdateUserInfos = ({ photo, role, ...baseUser }: User): UpdateUser => {
    return updateTranform({
      ...baseUser,
      roleId: role.id
    });
  }

  return (
    <WithLayoutPadding sx={{ p: 2 }}>
      <Box sx={{ width: '100%', px: 5, py: 2, bgcolor: "white" }}>
        <Edit
          id={whoami.id}
          resource="profile"
          transform={transformUpdateUserInfos}
          mutationOptions={{
            meta: {
              actionType: UserSaveOrUpdateActionType.UPDATE_USER_INFOS
            }
          }}
          sx={{
            "width": "100%",
            "& .RaEdit-card": {
              boxShadow: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          <FlexBox sx={{ width: '100%', alignItems: "start" }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{
                  color: textSecondaryColor,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: "1.5rem",
                }}
              >
                {translate("custom.common.edit_profile")}
              </Typography>
              <Show sx={{ mb: 2, width: 'fit-content', mx: "auto", }} resource="profile" id={whoami?.id}>
                <ProfilePictureShow />
              </Show>
              <FlexBox sx={{ gap: 1, width: '100%' }}>
                <TextInput fullWidth source="firstName" />
                <TextInput fullWidth source="lastName" />
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: '100%' }}>
                <TextInput fullWidth source="username" />
                <TextInput fullWidth source="email" />
              </FlexBox>
            </Box>
            <Box sx={{ flex: 1 }}>
              <FlexBox sx={{ gap: 1, width: '100%' }}>
                <TextInput fullWidth source="username" />
                <TextInput fullWidth source="email" />
              </FlexBox>
            </Box>
          </FlexBox>
        </Edit>
      </Box>
    </WithLayoutPadding >
  );
};
