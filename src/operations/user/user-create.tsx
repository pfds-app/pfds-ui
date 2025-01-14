import {
  DateInput,
  ReferenceInput,
  ImageField,
  ImageInput,
  PasswordInput,
  SelectInput,
  TextInput,
  minLength,
  required,
  useTranslate,
} from "react-admin";
import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { FC, useLayoutEffect } from "react";

import { BoxPaperTitled, RequiredWhen } from "@/common/components";
import { Create } from "@/common/components/create";
import { CreateUserPayload, UserSaveOrUpdateActionType } from "@/providers";
import { User, UserRoleEnum } from "@/gen/jfds-api-client";
import { createTranform } from "@/common/utils/transform";
import { confirmPasswordValidator } from "@/common/input-validator/password";
import { USER_GENDER_CHOICES } from "../profile/utils/gender-choices";
import { USER_ROLE_CHOICES } from "../profile/utils/role-choices";

export const UserCreate: FC<{ role: UserRoleEnum }> = ({ role }) => {
  const translate = useTranslate();
  const transform = ({
    photo,
    responsability,
    association,
    region,
    committee,
    ...createUser
  }: Omit<User, "id" | "photo" | "createdAt" | "updatedAt"> & {
    photo: { rawFile: any };
    password: string;
  }): CreateUserPayload => {
    return createTranform({
      ...createUser,
      photo: photo?.rawFile,
      regionId: region?.id,
      responsabilityId: responsability?.id,
      committeeId: committee?.id,
      associationId: association?.id,
    });
  };

  return (
    <BoxPaperTitled
      title={translate(`custom.enum.user_role.${role}`)}
      sx={{ minWidth: "350px", width: "350px" }}
    >
      <Create
        resource="user"
        transform={transform}
        mutationOptions={{
          meta: {
            actionType: UserSaveOrUpdateActionType.CREATE,
          },
        }}
      >
        <Box sx={{ width: "100%", maxHeight: "300px", overflow: "auto" }}>
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
            defaultValue={role}
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
          <PasswordInput
            source="password"
            label={translate("ra.auth.password")}
            validate={[required(), minLength(8)]}
          />
          <PasswordInput
            source="confirmPassword"
            label={translate("custom.common.confirm_password")}
            validate={[
              required(),
              confirmPasswordValidator(
                "password",
                translate("custom.common.confirm_password_error")
              ),
            ]}
          />
        </Box>
        <ResetFieldsHandler role={role} />
      </Create>
    </BoxPaperTitled>
  );
};

const ResetFieldsHandler: FC<{ role: UserRoleEnum }> = ({ role }) => {
  const { reset } = useFormContext();

  useLayoutEffect(() => {
    reset({ role }, { keepDefaultValues: true });
  }, [role]);

  return null;
};
