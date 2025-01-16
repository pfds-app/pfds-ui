import { FC } from "react";
import { Box, Typography } from "@mui/material";
import {
  Button,
  PasswordInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  required,
  useLogin,
  useTranslate,
} from "react-admin";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { Warning } from "@mui/icons-material";
import { useQuery } from "@tanstack/react-query";

import { FlexBox, LocaleSwitch } from "@/common/components";
import { usePalette } from "@/common/hooks";
import { securityApi } from "@/providers";
import { unwrap } from "@/providers/utils";
import {
  FB_PAGE_NAME,
  FB_PROFILE_LINK,
  MAIL_VALUE,
  MAILTO_LINK,
} from "@/common/utils/constant";

export const SigninPage: FC<{ handleTabChange: (value: number) => void }> = ({
  handleTabChange,
}) => {
  const { primaryPalette, textSecondaryColor } = usePalette();
  const login = useLogin();
  const translate = useTranslate();
  const { isLoading, data: allowAdminSignup } = useQuery({
    queryFn: () => unwrap(() => securityApi().allowAdminSignup()),
    queryKey: ["allowAdminSignup"],
  });

  return (
    <FlexBox
      sx={{ bgcolor: primaryPalette.main, width: "100%", minHeight: "100vh" }}
    >
      <FlexBox
        sx={{
          p: 3,
          pt: 7,
          width: "98%",
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
            <TextInput
              source="username"
              label={translate("custom.sign_in.username")}
              validate={required()}
            />
            <PasswordInput
              source="password"
              label={translate("ra.auth.password")}
              validate={required()}
            />
          </SimpleForm>
          {!isLoading && allowAdminSignup && (
            <Button
              startIcon={<Warning color="warning" />}
              label="custom.common.create_default_user_btn"
              sx={{ mt: 2, fontSize: "14px", textDecoration: "underline" }}
              onClick={() => handleTabChange(1)}
            />
          )}
          <Button
            label="custom.common.signin_by_role"
            sx={{ mt: 2, fontSize: "14px", textDecoration: "underline" }}
            onClick={() => handleTabChange(2)}
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
