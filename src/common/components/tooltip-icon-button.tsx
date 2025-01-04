import { FC } from "react";
import { Tooltip, IconButton, IconButtonProps } from "@mui/material";
import { useTranslate } from "react-admin";

export type TooltipIconButtonProps = IconButtonProps & {
  title: string;
};

export const TooltipIconButton: FC<TooltipIconButtonProps> = ({
  title,
  children,
  ...iconButtonProps
}) => {
  const translate = useTranslate();

  return (
    <Tooltip title={translate(title)}>
      <IconButton {...iconButtonProps}>{children}</IconButton>
    </Tooltip>
  );
};
