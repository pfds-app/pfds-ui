import { Typography } from "@mui/material";
import { usePalette } from "@/common/hooks";

export const ListEmpty = () => {
  const { textSecondaryColor } = usePalette();

  return (
    <Typography
      sx={{
        color: textSecondaryColor,
        fontSize: "14px",
      }}
    >
      Il n'y pas d'enregistrement!
    </Typography>
  );
};
