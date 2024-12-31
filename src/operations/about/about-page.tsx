import { Typography, Box } from "@mui/material";
import { PAPER_BOX_SX } from "@/common/utils/common-props";

export const AboutPage = () => {
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
        À propos de J.F.D.S
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
          Nous sommes qui ?
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8 }}>
          J.F.D.S ou plus précisement Jeune Foi Digital Soavimasoandro <br />
          est une plateforme d'association des jeunes croyant de l'église
          catholique sise à Soavimasoandro
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1.7rem", mt: 3 }}>
          Nos Contacts
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
            vdktsoavimasoandro@gmail.com
          </a>
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1.7rem", mt: 3, mb: "5px" }}>
          Crée par
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8, my: 2 }}>
          jead 2023 ( adlinjeannot@gmail.com / 0326891205 )
        </Typography>
      </Box>
    </>
  );
};
