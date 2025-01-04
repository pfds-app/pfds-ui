import { FunctionField, TextField } from "react-admin";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { AssociationEdit } from "./association-edit";
import { Association } from "@/gen/jfds-api-client";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { useState } from "react";

export const AssociationList = () => {
  return (
    <DialogContextProvider popover={false}>
      <AssociationListContent />
    </DialogContextProvider>
  );
};

export const AssociationListContent = () => {
  const { status, toggleStatus } = useDialogContext<false>();
  const [associationToEdit, setAssociationToEdit] =
    useState<Association | null>(null);

  const doEdit = (association: Association) => {
    toggleStatus();
    setAssociationToEdit(association);
  };

  return (
    <BoxPaperTitled
      title="Lisitry ny Fikambanana Masina"
      containerSx={{ pt: 0 }}
    >
      <List resource="association">
        <TextField sortable={false} source="code" />
        <TextField sortable={false} source="name" />
        <FunctionField
          label="Actions"
          render={(association: Association) => (
            <>
              <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                <EditButton onClick={() => doEdit(association)} />
                <DeleteButton resource="association" id={association.id} />
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
        {associationToEdit && (
          <AssociationEdit association={associationToEdit} />
        )}
      </DialogContent>
    </BoxPaperTitled>
  );
};
