import {
  AssignmentTurnedIn,
  Home,
  EventAvailable,
  SignalCellularAlt,
  AutoGraph,
  PersonAdd,
  AddBusiness,
  LocalAtm,
  Celebration,
  Search,
  ReceiptLong,
  Apartment,
} from "@mui/icons-material";
import { Menu as RaMenu, useSidebarState, useTranslate } from "react-admin";
import { Box, SxProps, Drawer, useTheme, useMediaQuery } from "@mui/material";
import { FC, useEffect } from "react";

import { usePalette } from "@/common/hooks";
import { PAPER_BOX_SX } from "@/common/utils/common-props";

const MENU_SX: SxProps = {
  "top": "68px",
  "left": 0,
  "pb": 3,
  "width": "220px",
  "height": "calc(100vh - 65px)",
  "overflowY": "auto",
  "display": "flex",
  "flexDirection": "column",
  "justifyContent": "space-between",
  "& .RaMenu-open": {
    width: "100%",
    mx: "auto",
  },
  "& .MuiMenuItem-root": {
    "mt": 1,
    "fontSize": "14px",
    "fontWeight": "normal",
    "transition": "all linear .5s",
    "color": "#edebe6",
    "borderBottom": "1px solid #FFFFFF50",
    "bgcolor": "none",
    "alignItems": "end",
    "opacity": ".8",
    "&:hover": {
      color: "white",
      opacity: 1,
    },
  },
  "& .RaMenuItemLink-active": {
    color: "white !important",
    opacity: "1 !important",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
    transition: "all linear .5s",
    mb: 0.3,
  },
};

export function Menu() {
  const [open, setOpen] = useSidebarState();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setOpen(true);
  }, [isSmall, setOpen]);

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
  const translate = useTranslate();
  const { primaryPalette } = usePalette();

  return (
    <Box
      sx={{ ...MENU_SX, ...PAPER_BOX_SX, bgcolor: primaryPalette.main, ...sx }}
    >
      <Box>
        <RaMenu>
          <RaMenu.Item
            to="/"
            sx={{ mt: "0 !important" }}
            primaryText={translate("custom.menu.home")}
            leftIcon={<Home />}
          />
          <RaMenu.Item
            to="/calendar"
            primaryText={translate("custom.menu.calendar")}
            leftIcon={<EventAvailable />}
          />
          <RaMenu.Item
            to="/stats"
            primaryText={translate("custom.menu.stats")}
            leftIcon={<SignalCellularAlt />}
          />
          <RaMenu.Item
            to="/creations"
            primaryText={translate("custom.menu.creation")}
            leftIcon={<AutoGraph />}
          />
          <RaMenu.Item
            to="/herivelona"
            primaryText={translate("custom.menu.herivelona")}
            leftIcon={<PersonAdd />}
          />
          <RaMenu.Item
            to="/ledger"
            primaryText={translate("custom.menu.caisse")}
            leftIcon={<AddBusiness />}
          />
          <RaMenu.Item
            to="/presence"
            primaryText={translate("custom.menu.presence")}
            leftIcon={<AssignmentTurnedIn />}
          />
          <RaMenu.Item
            to="/fitadiavam-bola"
            primaryText={translate("custom.menu.fitadiavamBola")}
            leftIcon={<LocalAtm />}
          />
          <RaMenu.Item
            to="/activity"
            primaryText={translate("custom.menu.activity")}
            leftIcon={<Celebration />}
          />
          <RaMenu.Item
            to="/history"
            primaryText={translate("custom.menu.history")}
            leftIcon={<ReceiptLong />}
          />
          <RaMenu.Item
            to="/search"
            primaryText={translate("custom.menu.find")}
            leftIcon={<Search />}
          />
          <RaMenu.Item
            sx={{ borderBottom: "none !important" }}
            to="/about"
            primaryText={translate("custom.menu.about")}
            leftIcon={<Apartment />}
          />
        </RaMenu>
      </Box>
    </Box>
  );
};
