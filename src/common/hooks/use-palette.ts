import { useTheme, Palette, PaletteColor } from "@mui/material";
import { useIsDarkTheme } from "./use-is-dark-theme";

const getPaletteColorNumberValue = (
  paletteColor: PaletteColor,
  value: number
) => {
  return (paletteColor as any)[value] as string;
};

export const usePalette = () => {
  const theme = useTheme();
  const isDarkTheme = useIsDarkTheme();
  const palette = theme.palette as Palette & Record<string, any>;
  const bgcolor = isDarkTheme
    ? getPaletteColorNumberValue(palette.black, 900)
    : "white";
  const bgcolorPaper = isDarkTheme
    ? getPaletteColorNumberValue(palette.black, 1000)
    : "#edebe6";
  const primaryColor = !isDarkTheme
    ? getPaletteColorNumberValue(palette.black, 700)
    : "white";
  const secondaryColor = !isDarkTheme ? "gray" : "#b5b5ac";

  return {
    palette: theme.palette as Palette & Record<string, any>,
    getPaletteColorValue: getPaletteColorNumberValue,
    bgcolor,
    primaryColor,
    secondaryColor,
    bgcolorPaper,
  };
};
