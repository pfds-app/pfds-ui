import { TextField } from "react-admin";
import { List } from "@/common/components/list";

export const DummiesList = () => {
  return (
    <List>
      <TextField label="ID" source="id" />
      <TextField label="Name" source="name" />
    </List>
  );
};
