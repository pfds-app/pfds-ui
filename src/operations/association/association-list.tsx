import { FunctionField, TextField, useTranslate } from "react-admin";
import { useState } from "react";

import { Association } from "@/gen/jfds-api-client";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { AssociationEdit } from "./association-edit";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";

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
  const translate = useTranslate();
  const doEdit = (association: Association) => {
    toggleStatus();
    setAssociationToEdit(association);
  };

  return (
    <BoxPaperTitled
      title={`Lisitry ny ${translate("resources.association.name")}`}
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
