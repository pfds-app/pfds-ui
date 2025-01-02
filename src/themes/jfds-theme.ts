import { RaThemeOptions, defaultLightTheme } from "react-admin";
import { COMPONENT_THEME } from "./component-theme";
import { COLOR_PALETTE } from "./color-palette";

export const jfdsLightTheme: RaThemeOptions = {
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
