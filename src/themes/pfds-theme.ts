import {
  RaThemeOptions,
  defaultLightTheme,
  defaultDarkTheme,
} from "react-admin";
import { COMPONENT_THEME } from "./component-theme";
import { COLOR_PALETTE } from "./color-palette";

export const pfdsLightTheme: RaThemeOptions = {
  ...defaultLightTheme,
  components: {
    ...defaultLightTheme.components,
    ...COMPONENT_THEME,
    RaLayout: {
      styleOverrides: {
        root: {
          "& #main-content": { backgroundColor: "#f2eded" },
        },
      },
    },
  },
  palette: {
    ...defaultLightTheme.palette,
    ...COLOR_PALETTE,
    background: {
      default: "#ffffff",
    },
  },
};

export const pfdsDarkTheme = {
  ...defaultDarkTheme,
  components: {
    ...defaultDarkTheme.components,
    ...COMPONENT_THEME,
  },
  palette: {
    ...defaultDarkTheme.palette,
    ...COLOR_PALETTE,
    background: {
      default: "#2e2d2d",
    },
  },
};
