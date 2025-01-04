import { FunctionField, TextField } from "react-admin";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { CommitteeEdit } from "./committee-edit";
import { Committee } from "@/gen/jfds-api-client";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { useState } from "react";

export const CommitteeList = () => {
  return (
    <DialogContextProvider popover={false}>
      <CommitteeListContent />
    </DialogContextProvider>
  );
};

export const CommitteeListContent = () => {
  const { status, toggleStatus } = useDialogContext<false>();
  const [committeeToEdit, setCommitteeToEdit] = useState<Committee | null>(
    null
  );

  const doEdit = (committee: Committee) => {
    toggleStatus();
    setCommitteeToEdit(committee);
  };

  return (
    <BoxPaperTitled title="Lisitry ny Voamieran'asa" containerSx={{ pt: 0 }}>
      <List resource="committee">
        <TextField sortable={false} source="code" />
        <TextField sortable={false} source="name" />
        <FunctionField
          label="Actions"
          render={(committee: Committee) => (
            <>
              <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                <EditButton onClick={() => doEdit(committee)} />
                <DeleteButton resource="committee" id={committee.id} />
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
        {committeeToEdit && <CommitteeEdit committee={committeeToEdit} />}
      </DialogContent>
    </BoxPaperTitled>
  );
};
