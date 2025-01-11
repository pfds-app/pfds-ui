import {
  ImageField,
  ImageInput,
  SaveButton,
  Toolbar,
  useNotify,
  useRecordContext,
  useTranslate,
} from "react-admin";
import { PhotoCamera } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { DialogContent, TooltipIconButton } from "@/common/components";
import { Create } from "@/common/components/create";
import { UploadeSuccessResponse, User } from "@/gen/jfds-api-client";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import {
  UpdateUserPicturePayload,
  UserSaveOrUpdateActionType,
} from "@/providers";
import { usePalette } from "@/common/hooks";
import { FC } from "react";
import { NOOP_FN } from "@/common/utils/noop-fn";

export type UploadPictureButtonProps = {
  onUpdate?: (newImage: UploadeSuccessResponse) => void;
};
export const UploadPictureButton: FC<UploadPictureButtonProps> = ({
  onUpdate = NOOP_FN,
}) => {
  return (
    <DialogContextProvider popover={false}>
      <UploadPictureButtonContent onUpdate={onUpdate} />
    </DialogContextProvider>
  );
};

const UploadPictureButtonContent: FC<UploadPictureButtonProps> = ({
  onUpdate = NOOP_FN,
}) => {
  const notify = useNotify();
  const translate = useTranslate();
  const { toggleStatus } = useDialogContext<false>();
  const user = useRecordContext<User>();
  const { primaryPalette } = usePalette();

  const transformUpdatePicture = (data: {
    profilePicture: { rawFile: any };
  }): UpdateUserPicturePayload => {
    return {
      id: "DUMMY_ID",
      profilePicture: data?.profilePicture?.rawFile,
    };
  };

  return (
    <>
      <TooltipIconButton
        title="custom.common.profile_picture_update_title"
        onClick={toggleStatus}
        sx={{
          borderRadius: "50%",
          transform: "translate(-35px, -35px)",
          bgcolor: primaryPalette.main,
          height: 30,
          width: 30,
        }}
      >
        <PhotoCamera sx={{ height: 20, width: 20, color: "white" }} />
      </TooltipIconButton>
      <DialogContent>
        <Typography>
          {translate("custom.common.profile_picture_update_title")}
        </Typography>
        <Create
          redirect={false}
          resource="user"
          transform={transformUpdatePicture}
          simpleFormProps={{
            toolbar: (
              <Toolbar>
                <SaveButton />
              </Toolbar>
            ),
          }}
          mutationOptions={{
            meta: {
              actionType: UserSaveOrUpdateActionType.UPDATE_USER_PICTURE,
              userId: user?.id,
            },
            onSuccess: (uploaded: UploadeSuccessResponse) => {
              toggleStatus();
              onUpdate(uploaded);
              notify("custom.common.profile_picture_update_success", {
                type: "success",
              });
            },
            onError: () => {
              notify("custom.common.profile_picture_update_error", {
                type: "error",
              });
            },
          }}
        >
          <ImageInput
            source="profilePicture"
            label=" "
            accept={{ "image/*": [".png", ".jpg"] }}
          >
            <ImageField source="rawFile" title="title" />
          </ImageInput>
        </Create>
      </DialogContent>
    </>
  );
};
