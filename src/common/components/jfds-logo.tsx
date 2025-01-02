import { Typography } from "@mui/material";
import { FlexBox } from "./flex-box";
import { usePalette } from "../hooks";

export const JfdsLogo = () => {
  const { primaryPalette } = usePalette();

  return (
    <FlexBox
      sx={{
        justifyContent: "space-between",
        width: "fit-content",
        gap: 2,
        px: 2,
      }}
    >
      <img
        src={"/logo.png"}
        alt="logo"
        style={{
          display: "block",
          width: "40px",
          height: "40px",
        }}
      />
      <Typography
        sx={{
          fontSize: "1.1rem",
          color: primaryPalette.main,
          fontWeight: "bold",
        }}
      >
        J . F . D . S
      </Typography>
    </FlexBox>
  );
};
