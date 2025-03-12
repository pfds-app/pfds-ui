import {
  DateField,
  FunctionField,
  ShowButton,
  TextField,
  useTranslate,
} from "react-admin";
import { useState } from "react";

import { Activity, UserRoleEnum } from "@/gen/jfds-api-client";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { ActivityEdit } from "./activity-edit";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { useRole } from "@/security/hooks";

export const ActivityList = () => {
  return (
    <DialogContextProvider popover={false}>
      <ActivityListContent />
    </DialogContextProvider>
  );
};

export const ActivityListContent = () => {
  const { status, toggleStatus } = useDialogContext<false>();
  const [activityToEdit, setActivityToEdit] = useState<Activity | null>(null);
  const translate = useTranslate();
  const doEdit = (activity: Activity) => {
    toggleStatus();
    setActivityToEdit(activity);
  };
  const role = useRole();

  return (
    <BoxPaperTitled
      title={`Lisitry ny ${translate("resources.activity.name")}`}
      containerSx={{ pt: 0 }}
    >
      <List resource="activity">
        <DateField sortable={false} source="beginDate" />
        <DateField sortable={false} source="endDate" />
        <TextField sortable={false} source="name" />
        <TextField sortable={false} source="place" />
        <TextField sortable={false} source="description" />
        <FunctionField
          label="Actions"
          render={(activity: Activity) =>
            role !== UserRoleEnum.Admin ? (
              <ShowButton />
            ) : (
              <>
                <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                  <EditButton onClick={() => doEdit(activity)} />
                  <DeleteButton resource="activity" id={activity.id} />
                </FlexBox>
              </>
            )
          }
        />
      </List>
      <DialogContent
        fullWidth
        maxWidth="sm"
        open={status}
        onClose={toggleStatus}
      >
        {activityToEdit && <ActivityEdit activity={activityToEdit} />}
      </DialogContent>
    </BoxPaperTitled>
  );
};
