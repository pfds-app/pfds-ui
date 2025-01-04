import { Typography } from "@mui/material";
import { usePalette } from "@/common/hooks";
import { useTranslate } from "react-admin";

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
      {translate("pfds.common.empty")}
    </Typography>
  );
};
