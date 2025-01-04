import { Box, Typography } from "@mui/material";
import {
  PasswordInput,
  required,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  useLogin,
  useTranslate,
} from "react-admin";
import { SocialIcon } from "react-social-icons";
import { FlexBox, LocaleSwitch } from "@/common/components";
import { usePalette } from "@/common/hooks";

export const LoginPage = () => {
  const { primaryPalette, textSecondaryColor } = usePalette();
  const login = useLogin();
  const translate = useTranslate();

  return (
    <FlexBox
      sx={{ bgcolor: primaryPalette.main, width: "100%", minHeight: "100vh" }}
    >
      <FlexBox
        sx={{
          position: "relative",
          width: "98%",
          p: 3,
          pt: 7,
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
            {translate("ha.words.welcome")}
          </Typography>
          <SimpleForm
            disableInvalidFormNotification
            onSubmit={(signinData: any) => login(signinData)}
            toolbar={
              <Toolbar>
                <SaveButton
                  fullWidth
                  label={translate("ha.words.signin")}
                  icon={<></>}
                />
              </Toolbar>
            }
          >
            <TextInput
              label={translate("ha.login.forms.username")}
              source="username"
              validate={required()}
            />
            <PasswordInput
              label={translate("ha.login.forms.password")}
              source="password"
              validate={required()}
            />
          </SimpleForm>
          <Typography
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
            vdktsoavimasoandro@gmail.com
          </Typography>
          <Typography
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
            Vovonan'ny Tanora Katolika Soavimasoandro
          </Typography>
        </FlexBox>
        <LocaleSwitch />
      </FlexBox>
    </FlexBox>
  );
};
