import { DateField, FunctionField, TextField } from "react-admin";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { EventEdit } from "./event-edit";
import { Event } from "@/gen/jfds-api-client";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { useState } from "react";

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

  const doEdit = (event: Event) => {
    toggleStatus();
    setEventToEdit(event);
  };

  return (
    <BoxPaperTitled title="Evènment à venir" containerSx={{ pt: 0 }}>
      <List resource="event">
        <TextField sortable={false} source="name" />
        <TextField sortable={false} source="place" />
        <DateField sortable={false} source="beginDate" />
        <DateField sortable={false} source="endDate" />
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
