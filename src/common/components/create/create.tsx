import { FC } from "react"
import { CreateProps, Create as RaCreate, SaveButton, SimpleForm, Toolbar } from "react-admin"
import { PostAdd } from "@mui/icons-material"

export const Create: FC<CreateProps> = ({ children, ...createProps }) => {
  return (
    <RaCreate
      redirect={false}
      sx={{
        "& .RaCreate-card": {
          boxShadow: "none"
        }
      }}
      {...createProps}
    >
      <SimpleForm
        toolbar={(
          <Toolbar>
            <SaveButton color="success" label="Créer" icon={<PostAdd />} />
          </Toolbar>
        )}
      >
        {children}
      </SimpleForm>
    </RaCreate>
  )
}
