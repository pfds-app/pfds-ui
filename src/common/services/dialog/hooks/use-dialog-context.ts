import { useContext } from "react";
import { DialogContextType, DIALOG_CONTEXT } from "../context";

export const useDialogContext = <IsPopover extends boolean>() => {
  const dialogContext = useContext(DIALOG_CONTEXT);

  if (dialogContext === null) {
    throw new Error("useDialogContext must be wrapper by DIALOG_CONTEXT");
  }

  return dialogContext as DialogContextType<IsPopover>;
};
