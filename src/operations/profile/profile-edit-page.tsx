import { TextInput, useTranslate } from "react-admin";
import { Typography } from "@mui/material";
import { FlexBox, WithLayoutPadding } from "@/common/components";
import { Show } from "@/common/components/show";
import { Edit } from "@/common/components/edit";
import { usePalette } from "@/common/hooks";
import { useWhoami } from "@/security/hooks";
import { ProfilePictureShow } from "./components";

export const ProfileEditPage = () => {
  const { textSecondaryColor } = usePalette();
  const translate = useTranslate();
  const whoami = useWhoami();

  return (
    <WithLayoutPadding>
      <FlexBox
        sx={{
          bgcolor: "white",
          p: 3,
          flexDirection: "column",
          width: "100%",
          maxWidth: "500px",
          mx: "auto",
          mt: 2,
        }}
      >
        <Typography
          sx={{
            color: textSecondaryColor,
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          {translate("custom.common.edit_profile")}
        </Typography>
        <Show resource="profile" id={whoami?.id}>
          <ProfilePictureShow />
        </Show>
        <Edit
          id={whoami.id}
          resource="user"
          sx={{
            "width": "100%",
            "& .RaEdit-card": {
              boxShadow: "none",
              backgroundColor: "transparent",
            },
          }}
        >
          <TextInput fullWidth source="firstName" />
          <TextInput fullWidth source="lastName" />
        </Edit>
      </FlexBox>
    </WithLayoutPadding>
  );
};
