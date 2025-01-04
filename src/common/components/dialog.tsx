import { FC, ReactElement, ReactNode } from "react";
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogContent as MuiDialogContent,
} from "@mui/material";
import {
  DialogContextProvider,
  useDialogContext,
} from "@/common/services/dialog";

export type DialogProps = Partial<MuiDialogProps> & {
  defaultValue?: boolean;
  actionHandler?: ReactElement;
  children: ReactNode;
};

export const Dialog: FC<DialogProps> = ({
  defaultValue,
  children,
  actionHandler,
  ...dialogProps
}) => {
  return (
    <DialogContextProvider popover={false} defaultValue={defaultValue}>
      {actionHandler}
      <DialogContent {...dialogProps}>{children}</DialogContent>
    </DialogContextProvider>
  );
};

export const DialogContent: FC<
  Omit<DialogProps, "defaultValue" | "actionHandler">
> = ({ children, ...dialogProps }) => {
  const { status, close } = useDialogContext<false>();
  return (
    <MuiDialog open={status} onClose={close} {...dialogProps}>
      <MuiDialogContent>{children}</MuiDialogContent>
    </MuiDialog>
  );
};
