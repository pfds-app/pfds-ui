import { Typography, Box } from "@mui/material";
import { PAPER_BOX_SX } from "@/common/utils/common-props";
import { useTranslate } from "react-admin";

export const AboutPage = () => {
  const translate = useTranslate();

  return (
    <>
      <Typography
        sx={{
          mt: 3,
          fontSize: "2rem",
          textAlign: "center",
          mx: "auto",
          py: 2,
          width: "95%",
          color: "white",
          bgcolor: "#000000F0",
          opacity: 0.9,
        }}
      >
        {translate("ha.about.title")}
      </Typography>
      <Box
        sx={{
          width: "100%",
          borderRadius: "5px",
          maxWidth: "800px",
          p: 6,
          mx: "auto",
          my: 1,
          bgcolor: "white",
          ...PAPER_BOX_SX,
        }}
      >
        <Typography variant="h2" sx={{ fontSize: "1.7rem", mb: "5px" }}>
          {translate("ha.about.whoAreUs.title")}
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8 }}>
          {translate("ha.about.whoAreUs.content")}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1.7rem", mt: 3 }}>
          {translate("ha.about.contacts")}
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8, my: 2 }}>
          mail:{" "}
          <a
            href="mailto:vdktsoavimasoandro@gmail.com"
            style={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            vdktsoavimasoandro@gmail.com
          </a>
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8, my: 2 }}>
          phone:{" "}
          <span style={{ fontWeight: "bold", color: "black" }}>0341256232</span>
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8, my: 2 }}>
          mail:{" "}
          <a
            href="mailto:vdktsoavimasoandro@gmail.com"
            style={{
              color: "blue",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            {
              //TODO: change to facebook link and name
            }
            vdktsoavimasoandro@gmail.com
          </a>
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1.7rem", mt: 3, mb: "5px" }}>
          {translate("ha.about.credits")}
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8, my: 2 }}>
          © jead 2023 ( adlinjeannot@gmail.com / 0326891205 )
        </Typography>
      </Box>
    </>
  );
};
