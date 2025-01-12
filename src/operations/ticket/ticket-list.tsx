import { FunctionField, TextField, useTranslate } from "react-admin";
import { useState } from "react";

import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { TicketEdit } from "./ticket-edit";
import { Ticket } from "@/gen/jfds-api-client";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { formatUserName } from "@/common/utils/format-user-name";

export const TicketList = () => {
  return (
    <DialogContextProvider popover={false}>
      <TicketListContent />
    </DialogContextProvider>
  );
};

export const TicketListContent = () => {
  const { status, toggleStatus } = useDialogContext<false>();
  const [ticketToEdit, setTicketToEdit] = useState<Ticket | null>(null);
  const translate = useTranslate();
  const doEdit = (ticket: Ticket) => {
    toggleStatus();
    setTicketToEdit(ticket);
  };

  return (
    <BoxPaperTitled
      title={`Lisitry ny ${translate("resources.ticket.name")}`}
      containerSx={{ pt: 0 }}
    >
      <List resource="ticket">
        <TextField sortable={false} source="fromNumber" />
        <TextField sortable={false} source="toNumber" />
        <TextField
          sortable={false}
          label={translate("resources.operation.name")}
          source="operation.name"
        />
        <FunctionField
          label="Staff"
          render={(ticket: Ticket) => formatUserName(ticket.staff)}
        />
        <FunctionField
          label="Actions"
          render={(ticket: Ticket) => (
            <>
              <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                <EditButton onClick={() => doEdit(ticket)} />
                <DeleteButton resource="ticket" id={ticket.id} />
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
        {ticketToEdit && <TicketEdit ticket={ticketToEdit} />}
      </DialogContent>
    </BoxPaperTitled>
  );
};
