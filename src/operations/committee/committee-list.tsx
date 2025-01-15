import { FunctionField, TextField, useTranslate } from "react-admin";
import { useState } from "react";

import { Committee, UserRoleEnum } from "@/gen/jfds-api-client";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { CommitteeEdit } from "./committee-edit";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { ShowIfRole } from "@/security/components";

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
  const translate = useTranslate();
  const doEdit = (committee: Committee) => {
    toggleStatus();
    setCommitteeToEdit(committee);
  };

  return (
    <BoxPaperTitled
      title={`Lisitry ny ${translate("resources.committee.name")}`}
      containerSx={{ pt: 0 }}
    >
      <List resource="committee">
        <TextField sortable={false} source="code" />
        <TextField sortable={false} source="name" />
        <ShowIfRole roles={[UserRoleEnum.Admin]}>
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
        </ShowIfRole>
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
