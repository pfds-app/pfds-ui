import { RaThemeOptions } from "react-admin";

export const COLOR_PALETTE: Partial<
  RaThemeOptions["palette"] & Record<string, any>
> = {
  primary: {
    "main": "#1b5de0",
    "900": "#002366",
    "800": "#0033a0",
    "200": "#87cefa",
  },
  black: {
    "1000": "#000000",
    "900": "#2e2d2d",
    "700": "#4f4f4d",
  },
};
