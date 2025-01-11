import { FlexBox, LocaleSwitch } from "@/common/components";
import { Typography, Box } from "@mui/material";
import {
  DateInput,
  minLength,
  PasswordInput,
  ReferenceInput,
  required,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  useNotify,
  useTranslate,
} from "react-admin";
import { Add } from "@mui/icons-material";

import { SignupPayload, User } from "@/gen/jfds-api-client";
import { usePalette, useToggle } from "@/common/hooks";
import { confirmPasswordValidator } from "@/common/input-validator/password";
import { USER_GENDER_CHOICES } from "@/operations/profile/utils/gender-choices";
import { createTranform } from "@/common/utils/transform";
import { securityApi } from "@/providers";
import { isAxiosError } from "axios";
import { FC } from "react";

export const AdminSignupPage: FC<{
  handleTabChange: (value: number) => void;
}> = ({ handleTabChange }) => {
  const { primaryPalette, textSecondaryColor } = usePalette();
  const translate = useTranslate();
  const {
    value: isLoading,
    setTrue: startLoading,
    setFalse: stopLoading,
  } = useToggle();
  const notify = useNotify();

  const createDefaultAdminUser = async (
    signup: Omit<
      User,
      "id" | "photo" | "role" | "association" | "region" | "committee"
    > & {
      roleId: string;
      associationId: string;
      regionId: string;
      committeeId: string;
      password: string;
      adminApiKey: string;
    }
  ) => {
    const payload: SignupPayload = createTranform(signup);

    try {
      startLoading();
      await securityApi().signup(payload);
      notify("custom.common.created_default_user", { type: "success" });
      handleTabChange(0);
    } catch (error) {
      if (isAxiosError(error) && error.status === 403) {
        notify("ra.auth.sign_in_error", { type: "error" });
        return;
      }
      notify("ra.page.error");
    } finally {
      stopLoading();
    }
  };

  return (
    <FlexBox
      sx={{ bgcolor: primaryPalette.main, width: "100%", minHeight: "100vh" }}
    >
      <FlexBox
        sx={{
          p: 3,
          position: "relative",
          bgcolor: "white",
          alignItems: "start",
          flexDirection: "column",
          borderRadius: "8px",
          minHeight: "450px",
          minWidth: "600px",
          justifyContent: "start",
          maxWidth: "98%",
          mx: { sm: 0, md: 1 },
        }}
      >
        <Typography
          sx={{
            mb: 2,
            color: textSecondaryColor,
            fontSize: "1.2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {translate("custom.common.create_default_user")}
        </Typography>
        <SimpleForm
          sx={{ width: "100%" }}
          disableInvalidFormNotification
          onSubmit={(data: any) => createDefaultAdminUser(data)}
          toolbar={
            <Toolbar sx={{ justifyContent: "end" }}>
              <SaveButton
                disabled={isLoading}
                color="success"
                icon={<Add />}
                label="ra.action.create"
              />
            </Toolbar>
          }
        >
          <FlexBox sx={{ width: "100%", gap: 2, alignItems: "start" }}>
            <Box sx={{ flex: 1 }}>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
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
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
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
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
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
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
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
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <SelectInput
                  translateChoice
                  sx={{ mb: "8px" }}
                  source="gender"
                  choices={USER_GENDER_CHOICES}
                  validate={required()}
                />
                <ReferenceInput reference="role" source="roleId">
                  <SelectInput
                    fullWidth
                    sx={{ mb: 1 }}
                    label={translate("resources.role.name")}
                    optionText="name"
                    validate={required()}
                  />
                </ReferenceInput>
              </FlexBox>
            </Box>
            <Box sx={{ transform: "translateY(-8px)", flex: 1 }}>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <ReferenceInput reference="region" source="regionId">
                  <SelectInput
                    fullWidth
                    sx={{ mb: 1 }}
                    label={translate("resources.region.name", {
                      smart_count: 1,
                    })}
                    optionText="name"
                    validate={required()}
                  />
                </ReferenceInput>
                <ReferenceInput reference="committee" source="committeeId">
                  <SelectInput
                    fullWidth
                    sx={{ mb: 1 }}
                    label={translate("resources.committee.name", {
                      smart_count: 1,
                    })}
                    optionText="name"
                    validate={required()}
                  />
                </ReferenceInput>
              </FlexBox>
              <ReferenceInput reference="association" source="associationId">
                <SelectInput
                  fullWidth
                  sx={{ mb: 1 }}
                  label={translate("resources.association.name", {
                    smart_count: 1,
                  })}
                  optionText="name"
                  validate={required()}
                />
              </ReferenceInput>
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
              <PasswordInput
                source="adminApiKey"
                label={translate("custom.common.api_key")}
                fullWidth
              />
            </Box>
          </FlexBox>
        </SimpleForm>
        <LocaleSwitch />
      </FlexBox>
    </FlexBox>
  );
};
