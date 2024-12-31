import { FC, useEffect } from "react";
import { Menu as RaMenu, useSidebarState, useTranslate } from "react-admin";
import { Box, SxProps, Drawer, useTheme, useMediaQuery } from "@mui/material";
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
  }, [isSmall]);

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
            primaryText={translate("ha.words.home")}
            leftIcon={<Home />}
          />
          <RaMenu.Item
            to="/calendar"
            primaryText={translate("ha.words.calendar")}
            leftIcon={<EventAvailable />}
          />
          <RaMenu.Item
            to="/stats"
            primaryText={translate("ha.words.stats")}
            leftIcon={<SignalCellularAlt />}
          />
          <RaMenu.Item
            to="/creation"
            primaryText={translate("ha.words.creation")}
            leftIcon={<AutoGraph />}
          />
          <RaMenu.Item
            to="/herivelona"
            primaryText={translate("ha.words.herivelona")}
            leftIcon={<PersonAdd />}
          />
          <RaMenu.Item
            to="/caisse"
            primaryText={translate("ha.words.caisse")}
            leftIcon={<AddBusiness />}
          />
          <RaMenu.Item
            to="/presence"
            primaryText={translate("ha.words.presence")}
            leftIcon={<AssignmentTurnedIn />}
          />
          <RaMenu.Item
            to="/fitadiavam-bola"
            primaryText={translate("ha.words.fitadiavamBola")}
            leftIcon={<LocalAtm />}
          />
          <RaMenu.Item
            to="/activity"
            primaryText={translate("ha.words.activity")}
            leftIcon={<Celebration />}
          />
          <RaMenu.Item
            to="/history"
            primaryText={translate("ha.words.history")}
            leftIcon={<ReceiptLong />}
          />
          <RaMenu.Item
            to="/search"
            primaryText={translate("ha.words.find")}
            leftIcon={<Search />}
          />
          <RaMenu.Item
            sx={{ borderBottom: "none !important" }}
            to="/about"
            primaryText={translate("ha.words.about")}
            leftIcon={<Apartment />}
          />
        </RaMenu>
      </Box>
    </Box>
  );
};
