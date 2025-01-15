import { FunctionField, TextField, useTranslate } from "react-admin";
import { useState } from "react";

import { Responsability, UserRoleEnum } from "@/gen/jfds-api-client";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { ResponsabilityEdit } from "./responsability-edit";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { ShowIfRole } from "@/security/components";

export const ResponsabilityList = () => {
  return (
    <DialogContextProvider popover={false}>
      <ResponsabilityListContent />
    </DialogContextProvider>
  );
};

export const ResponsabilityListContent = () => {
  const { status, toggleStatus } = useDialogContext<false>();
  const [responsabilityToEdit, setResponsabilityToEdit] =
    useState<Responsability | null>(null);
  const translate = useTranslate();
  const doEdit = (responsability: Responsability) => {
    toggleStatus();
    setResponsabilityToEdit(responsability);
  };

  return (
    <BoxPaperTitled
      title={`Lisitry ny ${translate("resources.responsability.name")}`}
      containerSx={{ pt: 0 }}
    >
      <List resource="responsability">
        <TextField sortable={false} source="name" />
        <ShowIfRole roles={[UserRoleEnum.Admin]}>
          <FunctionField
            label="Actions"
            render={(responsability: Responsability) => (
              <>
                <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                  <EditButton onClick={() => doEdit(responsability)} />
                  <DeleteButton
                    resource="responsability"
                    id={responsability.id}
                  />
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
        {responsabilityToEdit && (
          <ResponsabilityEdit responsability={responsabilityToEdit} />
        )}
      </DialogContent>
    </BoxPaperTitled>
  );
};
