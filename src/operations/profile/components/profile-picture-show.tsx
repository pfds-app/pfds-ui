import { Badge } from "@mui/material";
import { FunctionField, useRecordContext } from "react-admin";
import { useRef } from "react";

import { User } from "@/gen/jfds-api-client";
import { UploadPictureButton } from "./update-profile-btn";
import { createImageUrl } from "@/providers";
import { DEFAULT_PICTURE_IMG } from "@/common/utils/constant";

export const ProfilePictureShow = () => {
  const user = useRecordContext<User>();
  const profileImageRef = useRef<HTMLImageElement>(null);

  const updateProfilePictureSrc = () => {
    window.location.reload();
  };

  return (
    <Badge
      variant="standard"
      badgeContent={<UploadPictureButton onUpdate={updateProfilePictureSrc} />}
      sx={{ bgcolor: "transparent" }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <FunctionField
        render={() => (
          <img
            alt={user?.photo ?? "unknown-user"}
            ref={profileImageRef}
            src={createImageUrl(user?.photo ?? "")}
            onError={() => {
              if (profileImageRef.current) {
                profileImageRef.current.src = DEFAULT_PICTURE_IMG;
              }
            }}
            style={{
              height: 150,
              width: 150,
              borderRadius: "50%",
            }}
          />
        )}
      />
    </Badge>
  );
};
