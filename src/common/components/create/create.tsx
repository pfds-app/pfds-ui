import { PostAdd } from "@mui/icons-material";
import {
  CreateProps as RaCreateProps,
  Create as RaCreate,
  SaveButton,
  SimpleForm,
  SimpleFormProps,
  Toolbar,
} from "react-admin";
import { FC } from "react";

export type CreateProps = RaCreateProps & {
  simpleFormProps?: Partial<SimpleFormProps>;
};

export const Create: FC<CreateProps> = ({
  children,
  simpleFormProps = {},
  ...createProps
}) => {
  return (
    <RaCreate
      redirect={false}
      sx={{
        "& .RaCreate-card": {
          boxShadow: "none",
        },
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
