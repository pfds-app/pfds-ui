import { Box, SxProps } from "@mui/material";
import { LayoutProps } from "react-admin";
import { FC } from "react";

import { Menu } from "./menu";
import { AppBar } from "./appbar";
import { usePalette } from "@/common/hooks";

const MAIN_CONTENT_SX: SxProps = {
  m: 0,
  pt: "1px",
  ml: {
    xs: 0,
    md: "220px",
  },
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { bgcolorPaper } = usePalette();

  return (
    <Box
      id="main-content"
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: bgcolorPaper,
      }}
    >
      <Menu />
      <AppBar />
      <Box sx={MAIN_CONTENT_SX}>{children}</Box>
    </Box>
  );
};
