import { Datagrid, List, TextField } from "react-admin";

export const DummiesList = () => {
  return (
    <List>
      <Datagrid rowClick={false}>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
      </Datagrid>
    </List>
  );
};
