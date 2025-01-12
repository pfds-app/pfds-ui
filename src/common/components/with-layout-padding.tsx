import { BoxProps, Box } from "@mui/material";
import { FC } from "react";

export const WithLayoutPadding: FC<BoxProps> = ({
  sx = {},
  children,
  ...boxProps
}) => {
  return (
    <Box sx={{ width: "100%", px: 2, ...sx }} {...boxProps}>
      {children}
    </Box>
  );
};
