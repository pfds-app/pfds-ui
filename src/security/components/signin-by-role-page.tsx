import { FC } from "react";
import { Box, Typography } from "@mui/material";
import {
  Button,
  ReferenceInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
  useLogin,
  useTranslate,
} from "react-admin";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useWatch } from "react-hook-form";

import { FlexBox, LocaleSwitch } from "@/common/components";
import { UserRoleEnum } from "@/gen/jfds-api-client";
import { usePalette } from "@/common/hooks";
import {
  FB_PAGE_NAME,
  FB_PROFILE_LINK,
  MAIL_VALUE,
  MAILTO_LINK,
} from "@/common/utils/constant";
import { USER_ROLE_CHOICES } from "@/operations/profile/utils/role-choices";

export const SigninByRolePage: FC<{
  handleTabChange: (value: number) => void;
}> = ({ handleTabChange }) => {
  const { primaryPalette, textSecondaryColor } = usePalette();
  const login = useLogin();
  const translate = useTranslate();

  return (
    <FlexBox
      sx={{ bgcolor: primaryPalette.main, width: "100%", minHeight: "100vh" }}
    >
      <FlexBox
        sx={{
          p: 2,
          pt: 7,
          width: "98%",
          maxHeight: "500px",
          overflow: "auto",
          position: "relative",
          bgcolor: "white",
          alignItems: "start",
          borderRadius: "8px",
          minHeight: "450px",
          maxWidth: "900px",
          mx: { sm: 0, md: 1 },
        }}
      >
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: textSecondaryColor,
            }}
          >
            EKAR MD PIERA SY MD POLY SOAVIMASOANDRO
          </Typography>
          <Typography sx={{ fontSize: "15px", color: textSecondaryColor }}>
            Vovonan'ny Tanora Katolika
          </Typography>
          <img src="/logo.png" style={{ width: "400px" }} />
        </Box>
        <FlexBox
          sx={{ flex: 1, flexDirection: "column", justifyContent: "start" }}
        >
          <Typography sx={{ fontSize: "1.5rem", mb: 5 }}>
            {translate("custom.sign_in.welcome")}
          </Typography>
          <SimpleForm
            disableInvalidFormNotification
            onSubmit={(signinData: any) => login(signinData)}
            toolbar={
              <Toolbar>
                <SaveButton
                  fullWidth
                  label={translate("ra.auth.sign_in")}
                  icon={<></>}
                />
              </Toolbar>
            }
          >
            <SelectInput
              source="role"
              fullWidth
              translateChoice
              validate={required()}
              choices={USER_ROLE_CHOICES}
            />
            <FlexBox sx={{ width: "100%", gap: 1 }}>
              <TextInput
                source="firstName"
                label={translate("resources.user.fields.firstName")}
                validate={required()}
              />
              <TextInput
                source="lastName"
                label={translate("resources.user.fields.lastName")}
                validate={required()}
              />
            </FlexBox>
            <FlexBox sx={{ width: "100%", gap: 1 }}>
              <ReferenceInput
                reference="responsability"
                source="responsabilityId"
              >
                <SelectInput
                  fullWidth
                  validate={required()}
                  optionText="name"
                  label={translate("resources.responsability.name")}
                />
              </ReferenceInput>
              <AdditionalInfoInput />
            </FlexBox>
          </SimpleForm>
          <Button
            label="custom.common.simple_signin"
            sx={{ mt: 2, fontSize: "14px", textDecoration: "underline" }}
            onClick={() => handleTabChange(0)}
          />
          <Typography
            to={MAILTO_LINK}
            component={Link}
            sx={{
              mt: 5,
              fontSize: "14px",
              textAlign: "center",
              display: "inline-flex",
              gap: 1,
              alignItems: "center",
              color: primaryPalette.main,
            }}
          >
            <SocialIcon
              style={{ width: "20px", height: "20px" }}
              network="email"
            />
            {MAIL_VALUE}
          </Typography>
          <Typography
            component={Link}
            to={FB_PROFILE_LINK}
            sx={{
              mt: 1,
              fontSize: "14px",
              textAlign: "center",
              display: "inline-flex",
              gap: 1,
              alignItems: "center",
              color: primaryPalette.main,
            }}
          >
            <SocialIcon
              style={{ width: "20px", height: "20px" }}
              network="facebook"
            />
            {FB_PAGE_NAME}
          </Typography>
        </FlexBox>
        <LocaleSwitch />
      </FlexBox>
    </FlexBox>
  );
};

export const AdditionalInfoInput = () => {
  const role = useWatch({ name: "role" });
  const translate = useTranslate();

  switch (role) {
    case UserRoleEnum.RegionManager:
      return (
        <ReferenceInput reference="region" source="regionId">
          <SelectInput
            fullWidth
            optionText="name"
            label={translate("resources.region.name")}
          />
        </ReferenceInput>
      );
    case UserRoleEnum.CommitteeManager:
      return (
        <ReferenceInput reference="committee" source="committeeId">
          <SelectInput
            fullWidth
            optionText="name"
            label={translate("resources.committee.name")}
          />
        </ReferenceInput>
      );
    case UserRoleEnum.AssociationManager:
      return (
        <ReferenceInput reference="association" source="associationId">
          <SelectInput
            fullWidth
            optionText="name"
            label={translate("resources.association.name")}
          />
        </ReferenceInput>
      );
    default:
      return null;
  }
};
