import { Avatar } from "@mui/material";
import {
  DateField,
  FunctionField,
  Show,
  SimpleShowLayout,
  TextField,
  useTranslate,
} from "react-admin";
import { useParams } from "react-router-dom";

import { TranslatedEnumTextField } from "@/common/components/list";
import { User } from "@/gen/jfds-api-client";
import { createImageUrl } from "@/providers";

export const UserShow = () => {
  const { id } = useParams();
  const translate = useTranslate();

  return (
    <Show actions={false} resource="user" id={id}>
      <SimpleShowLayout>
        <FunctionField
          label=" "
          render={(user: User) => (
            <Avatar
              src={createImageUrl(user.photo ?? "")}
              sx={{ width: "50px", height: "50px" }}
            />
          )}
        />
        <TextField source="username" />
        <TextField source="firstName" />
        <TextField source="lastName" />
        <DateField source="birthDate" />
        <TextField source="address" />
        <TranslatedEnumTextField
          source="gender"
          enumLocalSuffix="custom.enum.user_gender"
        />
        <TranslatedEnumTextField
          source="role"
          enumLocalSuffix="custom.enum.user_role"
        />
        <TextField source="nic" />
        <TextField source="apv" />
        <TextField
          label={translate("resources.responsability.name")}
          source="responsability.name"
        />
        <TextField
          label={translate("resources.region.name")}
          source="region.name"
        />
        <TextField
          label={translate("resources.committee.name")}
          source="committee.name"
        />
        <TextField
          label={translate("resources.association.name")}
          source="association.name"
        />
      </SimpleShowLayout>
    </Show>
  );
};
