import { useTranslate } from "react-admin";
import { Typography, Box } from "@mui/material";
import { WithLayoutPadding } from "@/common/components";
import { PAPER_BOX_SX } from "@/common/utils/common-props";
import {
  FB_PAGE_NAME,
  FB_PROFILE_LINK,
  MAIL_VALUE,
  MAILTO_LINK,
} from "@/common/utils/constant";

export const AboutPage = () => {
  const translate = useTranslate();

  return (
    <WithLayoutPadding>
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
        {translate("pfds.about.title")}
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
          {translate("pfds.about.who_are_us.title")}
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8 }}>
          {translate("pfds.about.who_are_us.content")}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1.7rem", mt: 3 }}>
          {translate("pfds.about.contacts")}
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8, my: 2 }}>
          Mail:{" "}
          <a
            href={MAILTO_LINK}
            style={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none",
            }}
          >
            {MAIL_VALUE}
          </a>
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8, my: 2 }}>
          Phone:{" "}
          <span style={{ fontWeight: "bold", color: "black" }}>0341256232</span>
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8, my: 2 }}>
          Facebook:{" "}
          <a
            href={FB_PROFILE_LINK}
            style={{
              color: "blue",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            {FB_PAGE_NAME}
          </a>
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "1.7rem", mt: 3, mb: "5px" }}>
          {translate("pfds.about.credits")}
        </Typography>
        <Typography sx={{ fontSize: "14px", opacity: 0.8, my: 2 }}>
          © jead 2023 ( adlinjeannot@gmail.com / 0326891205 )
        </Typography>
      </Box>
    </WithLayoutPadding>
  );
};
