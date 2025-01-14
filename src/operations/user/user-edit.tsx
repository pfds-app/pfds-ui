import {
  DateInput,
  ImageField,
  ImageInput,
  ReferenceInput,
  required,
  SelectInput,
  TextInput,
  useTranslate,
} from "react-admin";
import { FC } from "react";

import { User, UserRoleEnum } from "@/gen/jfds-api-client";
import { Edit } from "@/common/components/edit";
import { RequiredWhen } from "@/common/components";
import { UpdateUserPayload, UserSaveOrUpdateActionType } from "@/providers";
import { updateTranform } from "@/common/utils/transform";
import { USER_GENDER_CHOICES } from "../profile/utils/gender-choices";
import { USER_ROLE_CHOICES } from "../profile/utils/role-choices";

export const UserEdit: FC<{ user: User }> = ({ user }) => {
  const translate = useTranslate();
  const transform = ({
    photo,
    responsability,
    association,
    region,
    committee,
    ...createUser
  }: User & {
    photo: { rawFile: any };
  }): UpdateUserPayload => {
    return updateTranform({
      ...createUser,
      photo: photo?.rawFile,
      regionId: region?.id,
      responsabilityId: responsability?.id,
      committeeId: committee?.id,
      associationId: association?.id,
    });
  };

  return (
    <Edit
      id={user.id}
      resource="user"
      transform={transform}
      mutationOptions={{
        meta: {
          actionType: UserSaveOrUpdateActionType.UPDATE,
        },
      }}
    >
      <TextInput validate={required()} source="lastName" />
      <TextInput
        fullWidth
        validate={required()}
        label={translate("resources.user.fields.firstName")}
        source="firstName"
      />
      <TextInput
        fullWidth
        validate={required()}
        label={translate("resources.user.fields.lastName")}
        source="lastName"
      />
      <TextInput
        fullWidth
        validate={required()}
        label={translate("resources.user.fields.username")}
        source="username"
      />
      <TextInput
        fullWidth
        validate={required()}
        label={translate("resources.user.fields.email")}
        source="email"
      />
      <TextInput
        fullWidth
        validate={required()}
        label={translate("resources.user.fields.address")}
        source="address"
      />
      <DateInput
        fullWidth
        label={translate("resources.user.fields.birthDate")}
        validate={required()}
        source="birthDate"
      />
      <TextInput
        fullWidth
        label={translate("resources.user.fields.nic")}
        source="nic"
      />
      <TextInput
        fullWidth
        label={translate("resources.user.fields.apv")}
        source="apv"
      />
      <SelectInput
        translateChoice
        sx={{ mb: "8px" }}
        source="gender"
        label={translate("resources.user.fields.gender")}
        choices={USER_GENDER_CHOICES}
        validate={required()}
      />
      <SelectInput
        translateChoice
        source="role"
        sx={{ mb: "8px" }}
        label={translate("resources.user.fields.role")}
        choices={USER_ROLE_CHOICES}
        validate={required()}
      />
      <ReferenceInput reference="responsability" source="responsability.id">
        <SelectInput
          fullWidth
          optionText="name"
          label={translate("resources.responsability.name")}
        />
      </ReferenceInput>
      <ReferenceInput reference="region" source="region.id">
        <SelectInput
          fullWidth
          label={translate("resources.region.name")}
          optionText="name"
        />
      </ReferenceInput>
      <ReferenceInput reference="association" source="association.id">
        <RequiredWhen
          when="role"
          translatedEnum
          enumPath="custom.enum.user_role"
          equals={[UserRoleEnum.AssociationManager]}
          render={(validators) => (
            <SelectInput
              fullWidth
              validate={validators}
              label={translate("resources.association.name")}
              optionText="name"
            />
          )}
        />
      </ReferenceInput>
      <ReferenceInput reference="committee" source="committee.id">
        <RequiredWhen
          when="role"
          translatedEnum
          enumPath="custom.enum.user_role"
          equals={[UserRoleEnum.CommitteeManager]}
          render={(validators) => (
            <SelectInput
              fullWidth
              validate={validators}
              label={translate("resources.committee.name")}
              optionText="name"
            />
          )}
        />
      </ReferenceInput>
      <ImageInput source="photo" accept={{ "image/*": [".png", ".jpg"] }}>
        <ImageField source="src" title="title" />
      </ImageInput>
    </Edit>
  );
};
