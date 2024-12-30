import { FC } from "react";
import { Tooltip, IconButton, IconButtonProps } from "@mui/material";

export type TooltipIconButtonProps = IconButtonProps & {
  title: string;
};

export const TooltipIconButton: FC<TooltipIconButtonProps> = ({
  title,
  children,
  ...iconButtonProps
}) => {
  return (
    <Tooltip title={title}>
      <IconButton {...iconButtonProps}>{children}</IconButton>
    </Tooltip>
  );
};
