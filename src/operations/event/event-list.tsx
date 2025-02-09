import { DateField, FunctionField, TextField, useTranslate } from "react-admin";
import { useState } from "react";

import { Event, UserRoleEnum } from "@/gen/jfds-api-client";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { EventEdit } from "./event-edit";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { ShowIfRole } from "@/security/components";

export const EventList = () => {
  return (
    <DialogContextProvider popover={false}>
      <EventListContent />
    </DialogContextProvider>
  );
};

export const EventListContent = () => {
  const { status, toggleStatus } = useDialogContext<false>();
  const [eventToEdit, setEventToEdit] = useState<Event | null>(null);
  const translate = useTranslate();
  const doEdit = (event: Event) => {
    toggleStatus();
    setEventToEdit(event);
  };

  return (
    <BoxPaperTitled
      title={`Lisitry ny ${translate("resources.event.name")}`}
      containerSx={{ pt: 0 }}
    >
      <List resource="event">
        <TextField sortable={false} source="name" />
        <TextField sortable={false} source="place" />
        <DateField sortable={false} source="beginDate" />
        <DateField sortable={false} source="endDate" />
        <ShowIfRole roles={[UserRoleEnum.Admin]}>
          <FunctionField
            label="Actions"
            render={(event: Event) => (
              <>
                <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                  <EditButton onClick={() => doEdit(event)} />
                  <DeleteButton resource="event" id={event.id} />
                </FlexBox>
              </>
            )}
          />
        </ShowIfRole>
      </List>
      <DialogContent
        fullWidth
        maxWidth="sm"
        open={status}
        onClose={toggleStatus}
      >
        {eventToEdit && <EventEdit event={eventToEdit} />}
      </DialogContent>
    </BoxPaperTitled>
  );
};
