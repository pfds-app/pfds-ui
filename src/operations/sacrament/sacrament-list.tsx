import { FunctionField, TextField, useTranslate } from "react-admin";
import { useState } from "react";

import { Sacrament, UserRoleEnum } from "@/gen/jfds-api-client";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { SacramentEdit } from "./sacrament-edit";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { usePalette } from "@/common/hooks";
import { ShowIfRole } from "@/security/components";

export const SacramentList = () => {
  return (
    <DialogContextProvider popover={false}>
      <SacramentListContent />
    </DialogContextProvider>
  );
};

export const SacramentListContent = () => {
  const { status, toggleStatus } = useDialogContext<false>();
  const { primaryPalette, getPaletteColorValue } = usePalette();
  const headerRowBgcolor = getPaletteColorValue(primaryPalette, 900);
  const [sacramentToEdit, setSacramentToEdit] = useState<Sacrament | null>(
    null
  );
  const translate = useTranslate();

  const doEdit = (sacrament: Sacrament) => {
    toggleStatus();
    setSacramentToEdit(sacrament);
  };

  return (
    <BoxPaperTitled
      title={`Lisitry ny ${translate("resources.sacrament.name")}`}
      containerSx={{ pt: 0 }}
    >
      <List
        resource="sacrament"
        datagridProps={{
          sx: {
            "& .RaDatagrid-headerRow": {
              bgcolor: `${headerRowBgcolor} !important`,
            },
            "& .RaDatagrid-headerCell": {
              "color": "white !important",
              "&:hover": "white !important",
              "& .Mui-active": {
                color: "white",
              },
            },
          },
        }}
      >
        <TextField sortable={false} source="name" />
        <ShowIfRole roles={[UserRoleEnum.Admin]}>
          <FunctionField
            label="Actions"
            render={(sacrament: Sacrament) => (
              <>
                <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                  <EditButton onClick={() => doEdit(sacrament)} />
                  <DeleteButton resource="sacrament" id={sacrament.id} />
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
        {sacramentToEdit && <SacramentEdit sacrament={sacramentToEdit} />}
      </DialogContent>
    </BoxPaperTitled>
  );
};
