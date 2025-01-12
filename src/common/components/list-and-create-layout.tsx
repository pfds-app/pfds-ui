import { BoxProps } from "@mui/material";
import { FC } from "react";

import { FlexBox } from "./flex-box";

export const ListAndCreateLayout: FC<BoxProps> = ({
  children,
  sx = {},
  ...boxProps
}) => {
  return (
    <FlexBox
      sx={{ alignItems: "start", width: "100%", gap: 2, ...sx }}
      {...boxProps}
    >
      {children}
    </FlexBox>
  );
};
