import { useTheme, Palette, PaletteColor } from "@mui/material";

const getPaletteColorNumberValue = (
  paletteColor: PaletteColor,
  value: number
) => {
  return (paletteColor as any)[value] as string;
};

export const usePalette = () => {
  const theme = useTheme();
  const palette = theme.palette as Palette & Record<string, any>;
  const bgcolor = "white";
  const bgcolorPaper = "#edebe6";
  const textPrimaryColor = getPaletteColorNumberValue(palette.black, 700);
  const textSecondaryColor = "gray";
  const primaryPalette = palette.primary;

  return {
    palette: theme.palette as Palette & Record<string, any>,
    getPaletteColorValue: getPaletteColorNumberValue,
    bgcolor,
    textPrimaryColor,
    textSecondaryColor,
    bgcolorPaper,
    primaryPalette,
  };
};
