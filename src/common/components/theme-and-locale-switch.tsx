import { FC } from "react";
import { SxProps } from "@mui/material";
import {
  LocalesMenuButton,
  ToggleThemeButton,
  useTranslate,
} from "react-admin";
import { GTranslate as GTranslateIcon } from "@mui/icons-material";
import { FlexBox } from "./flex-box";
import { SUPPORTED_LOCALES } from "@/providers/i18n";
import { usePalette } from "../hooks";

export const ThemeAndLocaleSwitch: FC<{ sx?: SxProps; locale?: boolean }> = ({
  sx = {},
  locale = true,
}) => {
  const translate = useTranslate();
  const { primaryColor } = usePalette();

  const languages = SUPPORTED_LOCALES.map((locale) => {
    return {
      locale,
      name: translate(`ha.locales.${locale}.name`),
    };
  });

  return (
    <FlexBox
      sx={{
        "position": "absolute",
        "gap": 1,
        "top": 5,
        "right": 5,
        "& *": {
          textTransform: "none !important",
          color: primaryColor,
        },
        ...sx,
      }}
    >
      {locale && (
        <LocalesMenuButton languages={languages} icon={<GTranslateIcon />} />
      )}
      <ToggleThemeButton />
    </FlexBox>
  );
};
