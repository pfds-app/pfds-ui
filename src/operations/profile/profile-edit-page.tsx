import {
  DateInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
  useTranslate,
} from "react-admin";
import { Box, Typography } from "@mui/material";
import { FlexBox, WithLayoutPadding } from "@/common/components";
import { Show } from "@/common/components/show";
import { Edit } from "@/common/components/edit";
import { ProfilePictureShow } from "./components";
import { UpdateUser, User } from "@/gen/jfds-api-client";
import { UserSaveOrUpdateActionType } from "@/providers";
import { usePalette } from "@/common/hooks";
import { useWhoami } from "@/security/hooks";
import { updateTranform } from "@/common/utils/transform";
import { USER_GENDER_CHOICES } from "./utils/gender-choices";

export const ProfileEditPage = () => {
  const { textSecondaryColor } = usePalette();
  const translate = useTranslate();
  const whoami = useWhoami();

  const transformUpdateUserInfos = ({
    photo,
    role,
    ...baseUser
  }: User): UpdateUser => {
    return updateTranform({
      ...baseUser,
      roleId: role.id,
    });
  };

  return (
    <WithLayoutPadding sx={{ p: 2 }}>
      <Box sx={{ width: "100%", px: 5, py: 2, bgcolor: "white" }}>
        <Edit
          id={whoami.id}
          resource="profile"
          transform={transformUpdateUserInfos}
          mutationOptions={{
            meta: {
              actionType: UserSaveOrUpdateActionType.UPDATE_USER_INFOS,
            },
          }}
          sx={{
            "width": "100%",
            "& .RaEdit-card": {
              boxShadow: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          <FlexBox sx={{ width: "100%", alignItems: "start" }}>
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
              <Show
                sx={{ mb: 2, width: "fit-content", mx: "auto" }}
                resource="profile"
                id={whoami?.id}
              >
                <ProfilePictureShow />
              </Show>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <TextInput fullWidth validate={required()} source="firstName" />
                <TextInput fullWidth validate={required()} source="lastName" />
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <TextInput fullWidth validate={required()} source="username" />
                <TextInput fullWidth validate={required()} source="email" />
              </FlexBox>
            </Box>
            <Box sx={{ flex: 1 }}>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <SelectInput
                  translateChoice
                  sx={{ mb: "8px" }}
                  source="gender"
                  choices={USER_GENDER_CHOICES}
                  validate={required()}
                />
                <TextInput fullWidth validate={required()} source="address" />
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <TextInput fullWidth source="nic" />
                <DateInput fullWidth validate={required()} source="birthDate" />
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <TextInput fullWidth source="apv" />
                <ReferenceInput reference="role" source="role.id">
                  <SelectInput
                    fullWidth
                    sx={{ mb: 1 }}
                    label={translate("resources.role.name")}
                    optionText="name"
                    validate={required()}
                  />
                </ReferenceInput>
              </FlexBox>
            </Box>
          </FlexBox>
        </Edit>
      </Box>
    </WithLayoutPadding>
  );
};
