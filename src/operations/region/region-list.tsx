import { FunctionField, TextField, useTranslate } from "react-admin";
import { useState } from "react";

import { Region } from "@/gen/jfds-api-client";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { RegionEdit } from "./region-edit";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";

export const RegionList = () => {
  return (
    <DialogContextProvider popover={false}>
      <RegionListContent />
    </DialogContextProvider>
  );
};

export const RegionListContent = () => {
  const { status, toggleStatus } = useDialogContext<false>();
  const [regionToEdit, setRegionToEdit] = useState<Region | null>(null);
  const translate = useTranslate();

  const doEdit = (region: Region) => {
    toggleStatus();
    setRegionToEdit(region);
  };

  return (
    <BoxPaperTitled
      title={`Lisitry ny ${translate("resources.region.name")}`}
      containerSx={{ pt: 0 }}
    >
      <List resource="region">
        <TextField sortable={false} source="code" />
        <TextField sortable={false} source="name" />
        <FunctionField
          label="Actions"
          render={(region: Region) => (
            <>
              <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                <EditButton onClick={() => doEdit(region)} />
                <DeleteButton resource="region" id={region.id} />
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
        {regionToEdit && <RegionEdit region={regionToEdit} />}
      </DialogContent>
    </BoxPaperTitled>
  );
};
