import { Typography } from "@mui/material";
import { useTranslate } from "react-admin";

import { usePalette } from "@/common/hooks";

export const ListEmpty = () => {
  const { textSecondaryColor } = usePalette();
  const translate = useTranslate();

  return (
    <Typography
      sx={{
        color: textSecondaryColor,
        fontSize: "14px",
        textAlign: "center",
      }}
    >
      {translate("custom.common.empty")}
    </Typography>
  );
};
