import { PostAdd } from "@mui/icons-material";
import {
  CreateProps as RaCreateProps,
  Create as RaCreate,
  SaveButton,
  SimpleForm,
  SimpleFormProps,
  Toolbar,
  useNotify,
} from "react-admin";
import { FC } from "react";

export type CreateProps = RaCreateProps & {
  simpleFormProps?: Partial<SimpleFormProps>;
};

export const Create: FC<CreateProps> = ({
  children,
  mutationOptions = {},
  simpleFormProps = {},
  ...createProps
}) => {
  const notify = useNotify();
  return (
    <RaCreate
      redirect={false}
      sx={{
        "& .RaCreate-card": {
          boxShadow: "none",
        },
      }}
      mutationOptions={{
        onError: (error: any) => {
          if (error.status === 400) {
            notify("Email ou identifiant déjà utilisé", {
              autoHideDuration: 5_000,
            });
            return;
          }
          notify("ra.page.error");
        },
        ...mutationOptions,
      }}
      {...createProps}
    >
      <SimpleForm
        disableInvalidFormNotification
        toolbar={
          <Toolbar sx={{ mt: "5px" }}>
            <SaveButton
              color="success"
              label={"ra.action.create"}
              icon={<PostAdd />}
            />
          </Toolbar>
        }
        {...simpleFormProps}
      >
        {children}
      </SimpleForm>
    </RaCreate>
  );
};
