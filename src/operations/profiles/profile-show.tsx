import { Button, Show, useShowContext, useTranslate } from "react-admin";
import { CircularProgress, DialogContent } from "@mui/material";
import { ProfileLayout } from "@/common/components";
import { Dialog } from "@/common/components";
import { RestUser } from "@/gen/pfds-api-client";
import { NOOP_FN } from "@/common/utils/noop-fn";
import { useWhoami } from "@/security/hooks";

export const ProfileShow = () => {
  const whoami = useWhoami();

  return (
    <Show
      id={whoami?.id}
      sx={{ "mt": 0, "& .RaShow-card": { bgcolor: "transparent" } }}
      resource="profiles"
    >
      <ProfileShowContent />
    </Show>
  );
};

const ProfileShowContent = () => {
  const { record: user, isLoading } = useShowContext<RestUser>();
  const translate = useTranslate();

  if (isLoading) {
    return <CircularProgress sx={{ mx: "auto" }} />;
  }

  return (
    <ProfileLayout
      user={user!}
      actions={
        <Dialog
          actionHandler={
            <Button
              size="small"
              label={translate("ha.words.edit")}
              variant="contained"
              color="primary"
              onClick={NOOP_FN}
              sx={{ fontSize: "13px" }}
            />
          }
        >
          <DialogContent sx={{ p: 5 }}>{/* < */}</DialogContent>
        </Dialog>
      }
    />
  );
};
