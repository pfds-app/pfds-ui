import { DateField, FunctionField, TextField } from "react-admin";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { OperationEdit } from "./operation-edit";
import { Operation } from "@/gen/jfds-api-client";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { useState } from "react";
import { MoneyTextField } from "@/common/components/list/money-text-field";

export const OperationList = () => {
  return (
    <DialogContextProvider popover={false}>
      <OperationListContent />
    </DialogContextProvider>
  );
};

export const OperationListContent = () => {
  const { status, toggleStatus } = useDialogContext<false>();
  const [operationToEdit, setOperationToEdit] = useState<Operation | null>(
    null
  );

  const doEdit = (operation: Operation) => {
    toggleStatus();
    setOperationToEdit(operation);
  };

  return (
    <BoxPaperTitled title="Lisitry ny opération" containerSx={{ pt: 0 }}>
      <List resource="operation">
        <TextField sortable={false} source="name" />
        <MoneyTextField source="ticketPrice" />
        <TextField sortable={false} source="numberOfTickets" />
        <DateField sortable={false} source="operationDate" />
        <TextField sortable={false} source="description" />
        <FunctionField
          label="Actions"
          render={(operation: Operation) => (
            <>
              <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                <EditButton onClick={() => doEdit(operation)} />
                <DeleteButton resource="operation" id={operation.id} />
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
        {operationToEdit && <OperationEdit operation={operationToEdit} />}
      </DialogContent>
    </BoxPaperTitled>
  );
};
