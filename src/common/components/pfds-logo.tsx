import { Typography } from "@mui/material";
import { FlexBox } from "./flex-box";
import { usePalette } from "../hooks";

export const PfdsLogo = () => {
  const { primaryColor, palette } = usePalette();

  return (
    <FlexBox sx={{ justifyContent: "space-between", width: "200px", px: 2 }}>
      <img
        src={"/logo.png"}
        alt="logo"
        style={{
          display: "block",
          borderRadius: "50%",
          width: "35px",
          height: "35px",
        }}
      />
      <Typography sx={{ fontSize: "1.2rem", color: primaryColor }}>
        <span
          style={{
            color: palette.primary.main,
            marginLeft: 9,
          }}
        >
          Pfds{" "}
        </span>
        Pfds
      </Typography>
    </FlexBox>
  );
};
