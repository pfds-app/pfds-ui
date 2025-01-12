import { Typography, Box } from "@mui/material";
import {
  Button,
  DateInput,
  PasswordInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
  minLength,
  useNotify,
  useTranslate,
} from "react-admin";
import { FC } from "react";
import { isAxiosError } from "axios";

import { SignupPayload, User, UserRoleEnum } from "@/gen/jfds-api-client";
import { FlexBox, LocaleSwitch } from "@/common/components";
import { usePalette, useToggle } from "@/common/hooks";
import { confirmPasswordValidator } from "@/common/input-validator/password";
import { createTranform } from "@/common/utils/transform";
import { securityApi } from "@/providers";
import { USER_GENDER_CHOICES } from "@/operations/profile/utils/gender-choices";
import { USER_ROLE_CHOICES } from "@/operations/profile/utils/role-choices";

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
      "id" | "photo" | "responsability" | "association" | "region" | "committee"
    > & {
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
            <Toolbar sx={{ gap: 2, justifyContent: "end" }}>
              <Button
                size="medium"
                color="primary"
                label={"ra.action.cancel"}
                variant="contained"
                disabled={isLoading}
                onClick={() => handleTabChange(0)}
              />
              <SaveButton
                disabled={isLoading}
                size="small"
                color="success"
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
            </Box>
            <Box sx={{ transform: "translateY(-8px)", flex: 1 }}>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
                <SelectInput
                  translateChoice
                  sx={{ mb: "8px" }}
                  source="gender"
                  label={translate("resources.user.fields.gender")}
                  choices={USER_GENDER_CHOICES}
                  validate={required()}
                />
                <SelectInput
                  readOnly
                  translateChoice
                  source="role"
                  label={translate("resources.user.fields.role")}
                  sx={{ mb: "8px" }}
                  value={UserRoleEnum.Admin}
                  defaultValue={UserRoleEnum.Admin}
                  choices={USER_ROLE_CHOICES}
                  validate={required()}
                />
              </FlexBox>
              <FlexBox sx={{ gap: 1, width: "100%" }}>
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
              </FlexBox>
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
