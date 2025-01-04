import { FunctionField, TextField } from "react-admin";
import { List } from "@/common/components/list";
import { BoxPaperTitled, DialogContent, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { SacramentEdit } from "./sacrament-edit";
import { Sacrament } from "@/gen/jfds-api-client";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { usePalette } from "@/common/hooks";
import { useState } from "react";

export const SacramentList = () => {
  return (
    <DialogContextProvider popover={false}>
      <SacramentListContent />
    </DialogContextProvider>
  );
};

export const SacramentListContent = () => {
  const [sacramentToEdit, setSacramentToEdit] = useState<Sacrament | null>(
    null
  );
  const { status, toggleStatus } = useDialogContext<false>();
  const { primaryPalette, getPaletteColorValue } = usePalette();
  const headerRowBgcolor = getPaletteColorValue(primaryPalette, 900);

  const doEdit = (sacrament: Sacrament) => {
    toggleStatus();
    setSacramentToEdit(sacrament);
  };

  return (
    <BoxPaperTitled title="Lisitry ny Sakramenta" containerSx={{ pt: 0 }}>
      <List
        resource="sacraments"
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
        <TextField sortable={false} source="name" label="Libellé" />
        <FunctionField
          label="Actions"
          render={(sacrament: Sacrament) => (
            <>
              <FlexBox sx={{ gap: 1, justifyContent: "start" }}>
                <EditButton onClick={() => doEdit(sacrament)} />
                <DeleteButton resource="sacraments" id={sacrament.id} />
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
        {sacramentToEdit && <SacramentEdit sacrament={sacramentToEdit} />}
      </DialogContent>
    </BoxPaperTitled>
  );
};
