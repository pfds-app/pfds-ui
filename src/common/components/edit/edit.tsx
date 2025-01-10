import {
  EditProps,
  Edit as RaEdit,
  SaveButton,
  SimpleForm,
  Toolbar,
} from "react-admin";
import { Edit as EditIcon } from "@mui/icons-material";
import { FC } from "react";

export const Edit: FC<EditProps> = ({ children, ...editProps }) => {
  return (
    <RaEdit
      redirect={false}
      sx={{ "& *": { boxShadow: "none" } }}
      {...editProps}
    >
      <SimpleForm
        disableInvalidFormNotification
        toolbar={
          <Toolbar>
            <SaveButton size="small" icon={<EditIcon />} />
          </Toolbar>
        }
      >
        {children}
      </SimpleForm>
    </RaEdit>
  );
};
