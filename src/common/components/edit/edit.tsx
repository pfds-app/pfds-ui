import {
  EditProps,
  Edit as RaEdit,
  SaveButton,
  SimpleForm,
  SimpleFormProps,
  Toolbar,
  useNotify,
} from "react-admin";
import { Edit as EditIcon } from "@mui/icons-material";
import { FC } from "react";
import { isAxiosError } from "axios";

export const Edit: FC<
  EditProps & { simpleFormProps?: Partial<SimpleFormProps> }
> = ({
  children,
  mutationOptions = {},
  simpleFormProps = {},
  ...editProps
}) => {
  const notify = useNotify();
  return (
    <RaEdit
      redirect={false}
      sx={{ "& *": { boxShadow: "none" } }}
      {...editProps}
      mutationOptions={{
        onError: (error) => {
          if (isAxiosError(error) && error.status === 400) {
            notify("Email ou identifiant déjà utilisé", {
              autoHideDuration: 5_000,
            });
            return;
          }
          notify("ra.page.error");
        },
        ...mutationOptions,
      }}
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
