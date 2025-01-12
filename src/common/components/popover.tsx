import { FC, ReactElement } from "react";
import {
  Popover as MuiPopover,
  PopoverProps as MuiPopoverProps,
} from "@mui/material";

import { DialogContextProvider, useDialogContext } from "../services/dialog";

export type PopoverProps = { actionHandler: ReactElement } & Omit<
  MuiPopoverProps,
  "anchorEl" | "open" | "onClose"
>;

export const Popover: FC<PopoverProps> = ({ children, ...popoverProps }) => {
  return (
    <DialogContextProvider popover>
      <PopoverContent {...popoverProps}>{children}</PopoverContent>
    </DialogContextProvider>
  );
};

export const PopoverContent: FC<PopoverProps> = ({
  children,
  actionHandler,
  sx = {},
  ...popoverProps
}) => {
  const { anchorEl, status, close } = useDialogContext<true>();

  return (
    <>
      {actionHandler}
      <MuiPopover
        open={status}
        onClose={close}
        anchorEl={anchorEl}
        sx={{
          "borderRadius": "15px",
          "& .MuiPaper-root": { borderRadius: "15px" },
          ...sx,
        }}
        {...popoverProps}
      >
        {children}
      </MuiPopover>
    </>
  );
};
