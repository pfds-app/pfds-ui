import { FC } from "react";
import { Tooltip, IconButton, IconButtonProps } from "@mui/material";
import { useTranslate } from "react-admin";

export type TooltipIconButtonProps = IconButtonProps & {
  title: string;
  translateTitle?: boolean;
};

export const TooltipIconButton: FC<TooltipIconButtonProps> = ({
  title,
  children,
  translateTitle = true,
  ...iconButtonProps
}) => {
  const translate = useTranslate();

  return (
    <Tooltip title={translateTitle ? translate(title) : title}>
      <span>
        <IconButton {...iconButtonProps}>{children}</IconButton>
      </span>
    </Tooltip>
  );
};
