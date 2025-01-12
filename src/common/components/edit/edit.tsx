import {
  EditProps,
  Edit as RaEdit,
  SaveButton,
  SimpleForm,
  SimpleFormProps,
  Toolbar,
} from "react-admin";
import { Edit as EditIcon } from "@mui/icons-material";
import { FC } from "react";

export const Edit: FC<
  EditProps & { simpleFormProps?: Partial<SimpleFormProps> }
> = ({ children, simpleFormProps = {}, ...editProps }) => {
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
        {...simpleFormProps}
      >
        {children}
      </SimpleForm>
    </RaEdit>
  );
};
