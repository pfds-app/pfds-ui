import { FC } from "react";
import { Menu as RaMenu, useSidebarState, useTranslate } from "react-admin";
import { Box, SxProps, Drawer, useTheme, useMediaQuery } from "@mui/material";
import { Home } from "@mui/icons-material";
import { usePalette } from "@/common/hooks";
import { PAPER_BOX_SX } from "@/common/utils/common-props";

const MENU_SX: SxProps = {
  "top": "50px",
  "left": 0,
  "py": 2,
  "width": "250px",
  "height": "calc(100vh - 50px)",
  "display": "flex",
  "flexDirection": "column",
  "justifyContent": "space-between",
  "& .RaMenu-open": {
    width: "96%",
    mx: "auto",
  },
  "& .MuiMenuItem-root": {
    "my": "1px",
    "alignItems": "end",
    "transition": "all linear .5s",
    "&:hover": {
      "& .RaMenuItemLink-icon": {
        color: "white",
      },
      "color": "white",
      "bgcolor": "#49A078",
      "borderRadius": "8px",
    },
  },
  "& .RaMenuItemLink-active": {
    "bgcolor": "#49A078",
    "color": "white !important",
    "borderRadius": "8px",
    "& .RaMenuItemLink-icon": {
      color: "white",
    },
  },
  "& .MuiSvgIcon-root": {
    transition: "all linear .5s",
    mb: 0.47,
  },
};

export function Menu() {
  const [open, setOpen] = useSidebarState();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return isSmall ? (
    <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
      <MenuContent />
    </Drawer>
  ) : (
    <MenuContent sx={{ position: "fixed" }} />
  );
}

export const MenuContent: FC<{ sx?: Omit<SxProps, "boxShadow"> }> = ({
  sx,
}) => {
  const { bgcolor } = usePalette();
  const translate = useTranslate();

  return (
    <Box sx={{ ...MENU_SX, ...PAPER_BOX_SX, bgcolor, ...sx }}>
      <Box>
        <RaMenu>
          <RaMenu.Item
            to="/"
            primaryText={translate("ha.words.profil")}
            leftIcon={<Home />}
          />
        </RaMenu>
      </Box>
    </Box>
  );
};
