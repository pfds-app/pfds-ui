import { RaThemeOptions } from "react-admin";

export const COLOR_PALETTE: Partial<
  RaThemeOptions["palette"] & Record<string, any>
> = {
  primary: {
    "main": "#49A078",
    "900": "#216869",
    "800": "#216869",
    "200": "#9CC5A1",
  },
  black: {
    "1000": "#121212",
    "900": "#2e2d2d",
    "700": "#4f4f4d",
  },
};
