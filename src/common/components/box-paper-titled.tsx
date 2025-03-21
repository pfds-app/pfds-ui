import { BoxProps, SxProps, Box, Typography } from "@mui/material";
import { FC } from "react";

import { usePalette } from "../hooks";

export type BoxPaperTitledProps = BoxProps & {
  title: string;
  containerSx?: SxProps;
};

export const BoxPaperTitled: FC<BoxPaperTitledProps> = ({
  containerSx = {},
  children,
  title,
  sx = {},
  ...boxProps
}) => {
  const { primaryPalette } = usePalette();

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        borderRadius: "5px",
        boxShadow: "0px 0px 5px rgba(0,0,5,.1)",
        ...sx,
      }}
      {...boxProps}
    >
      <Typography
        variant="h2"
        sx={{
          px: 2,
          py: "10px",
          bgcolor: "#87cefa30",
          color: primaryPalette.main,
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <Box sx={{ width: "100%", height: "100%", p: 2, ...containerSx }}>
        {children}
      </Box>
    </Box>
  );
};
