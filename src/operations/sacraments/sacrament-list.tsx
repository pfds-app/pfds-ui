import { DeleteButton, TextField } from "react-admin";
import { List } from "@/common/components/list";
import { BoxPaperTitled } from "@/common/components";

export const SacramentList = () => {
  return (
    <BoxPaperTitled title="Lisitry ny Sakramenta">
      <List resource="sacraments">
        <TextField source="id" label="Id" />
        <TextField source="name" label="Nom" />
        <DeleteButton redirect={false} />
      </List>
    </BoxPaperTitled>
  )
}
