import { FunctionField, TextField } from "react-admin";
import { List } from "@/common/components/list";
import { BoxPaperTitled, FlexBox } from "@/common/components";
import { EditButton, DeleteButton } from "@/common/components/buttons";
import { Sacrament } from "@/gen/jfds-api-client";
import { usePalette } from "@/common/hooks";

export const SacramentList = () => {
  const { primaryPalette, getPaletteColorValue } = usePalette();

  const headerRowBgcolor = getPaletteColorValue(primaryPalette, 900);
  return (
    <BoxPaperTitled title="Lisitry ny Sakramenta" containerSx={{ pt: 0 }}>
      <List
        resource="sacraments"
        sx={{
          "& .RaDatagrid-headerRow": {
            bgcolor: `${headerRowBgcolor} !important`,
          },
          "& .RaDatagrid-headerCell": {
            "color": "white",
            "& .Mui-active": {
              color: "white",
            },
          },
        }}
      >
        <TextField source="name" label="Nom" />
        <FunctionField
          label="Actions"
          render={(sacrament: Sacrament) => (
            <FlexBox sx={{ justifyContent: "start" }}>
              <EditButton id={sacrament.id} />
              <DeleteButton id={sacrament.id} />
            </FlexBox>
          )}
        />
      </List>
    </BoxPaperTitled>
  );
};
