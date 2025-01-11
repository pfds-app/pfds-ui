import { FC } from "react";
import {
  useGetOne,
  useLocale,
  useLogout,
  useRedirect,
  useSetLocale,
  useTranslate,
} from "react-admin";
import {
  SxProps,
  Divider,
  Menu as MuiMenu,
  MenuList as MuiMenuList,
  CircularProgress,
  ListItemIcon,
  ListItemText,
  MenuItem as MuiMenuItem,
  AppBar as MuiAppBar,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import {
  Logout,
  Check,
  GTranslate,
  ExpandMore,
  ExpandLess,
  AccountCircle,
  ArrowRight,
} from "@mui/icons-material";
import { User } from "@/gen/jfds-api-client";
import { FlexBox, JfdsLogo, LocaleSwitch } from "@/common/components";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";
import { usePalette } from "@/common/hooks";
import { useWhoami } from "@/security/hooks";
import { createImageUrl } from "@/providers";
import { PAPER_BOX_SX } from "@/common/utils/common-props";
import { SUPPORTED_LOCALES } from "@/providers/i18n";
import { DEFAULT_PICTURE_IMG } from "@/common/utils/constant";

const APPBAR_SX: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  boxShadow: "none",
  px: 2,
  py: "5px",
  width: "100%",
  ...PAPER_BOX_SX,
};

const USER_INFO_SX: SxProps = {
  px: 2,
  py: 1,
  gap: 2,
  minWidth: "200px",
  cursor: "pointer",
  justifyContent: "start",
  transition: "all linear .5s",
};

export const AppBar = () => {
  return (
    <DialogContextProvider popover>
      <AppBarContent />
    </DialogContextProvider>
  );
};

const SelectLocalMenu: FC<{ closeMainMenu: () => void }> = ({
  closeMainMenu,
}) => {
  return (
    <DialogContextProvider popover>
      <SelectLocalMenuContent closeMainMenu={closeMainMenu} />
    </DialogContextProvider>
  );
};

const SelectLocalMenuContent: FC<{ closeMainMenu: () => void }> = ({
  closeMainMenu,
}) => {
  const { status, anchorEl, open, close } = useDialogContext<true>();
  const translate = useTranslate();
  const currentLocale = useLocale();
  const setLocale = useSetLocale();

  const languages = SUPPORTED_LOCALES.map((locale) => {
    return {
      locale,
      name: translate(`custom.locales.${locale}.name`),
    };
  });

  const closeAllAfterSelect = () => {
    closeMainMenu();
    close();
  };

  return (
    <MuiMenuItem onClick={open} sx={{ "& .MuiSvgIcon-root": { mb: 0.3 } }}>
      <ListItemIcon>
        <GTranslate />
      </ListItemIcon>
      <ListItemText>Langues</ListItemText>
      <ArrowRight />
      <MuiMenu
        open={status}
        anchorEl={anchorEl}
        onClose={closeAllAfterSelect}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MuiMenuList dense sx={{ minWidth: "200px" }}>
          {languages.map((langage) => (
            <MuiMenuItem
              key={langage.locale}
              onClick={() => {
                setLocale(langage.locale);
                closeAllAfterSelect();
              }}
            >
              <ListItemIcon>
                {langage.locale === currentLocale && <Check />}
              </ListItemIcon>
              <ListItemText>{langage.name}</ListItemText>
            </MuiMenuItem>
          ))}
        </MuiMenuList>
      </MuiMenu>
    </MuiMenuItem>
  );
};

export const AppBarContent = () => {
  const { textPrimaryColor, textSecondaryColor, bgcolor, bgcolorPaper } =
    usePalette();
  const { id } = useWhoami();
  const { isLoading, data: user } = useGetOne<User>("profile", {
    id: id!,
  });
  const {
    status,
    anchorEl,
    open: openMenu,
    close: closeMenu,
  } = useDialogContext<true>();
  const logout = useLogout();
  const redirect = useRedirect();
  const translate = useTranslate();

  return (
    <MuiAppBar id="appbar" position="sticky" sx={{ ...APPBAR_SX, bgcolor }}>
      <FlexBox sx={{ gap: 5 }}>
        <JfdsLogo />
      </FlexBox>
      <FlexBox sx={{ gap: 0.5 }}>
        <LocaleSwitch
          locale={false}
          sx={{
            "& *": { color: `${textPrimaryColor} !important` },
            "position": "static",
          }}
        />
        <FlexBox
          sx={{
            ...USER_INFO_SX,
            "&:hover": { bgcolor: bgcolorPaper },
            "& *": { color: `${textPrimaryColor} !important` },
          }}
          onClick={openMenu}
        >
          {!isLoading ? (
            <Avatar
              alt="John Doe"
              src={
                user?.photo
                  ? createImageUrl(user?.photo ?? "")
                  : DEFAULT_PICTURE_IMG
              }
              sx={{ width: "35px", height: "35px" }}
            />
          ) : (
            <CircularProgress />
          )}
          <Box>
            <Typography sx={{ fontSize: "14px", color: textPrimaryColor }}>
              {user?.username}
            </Typography>
            <Typography sx={{ fontSize: "13px", color: textSecondaryColor }}>
              {user?.email}
            </Typography>
          </Box>
          {status ? <ExpandLess /> : <ExpandMore />}
        </FlexBox>
      </FlexBox>
      <MuiMenu open={status} anchorEl={anchorEl} onClose={closeMenu}>
        <MuiMenuList dense sx={{ minWidth: "200px" }}>
          <MuiMenuItem
            onClick={() => {
              redirect("/profiles");
              closeMenu();
            }}
            sx={{ "& .MuiSvgIcon-root": { mb: 0.3 } }}
          >
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText>
              {translate("custom.common.edit_profile")}
            </ListItemText>
          </MuiMenuItem>
          <Divider sx={{ my: 0 }} />
          <SelectLocalMenu closeMainMenu={closeMenu} />
          <MuiMenuItem
            onClick={async () => {
              await logout();
              closeMenu();
            }}
            sx={{ "& .MuiSvgIcon-root": { mb: 0.3 } }}
          >
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText>{translate("ra.auth.logout")}</ListItemText>
          </MuiMenuItem>
        </MuiMenuList>
      </MuiMenu>
    </MuiAppBar>
  );
};
