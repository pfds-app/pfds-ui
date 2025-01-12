import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

export const FlexBox: FC<BoxProps> = ({ sx = {}, ...boxProps }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
      {...boxProps}
    />
  );
};
