import { createContext, ReactNode, MouseEvent, useState } from "react";
import { Nullable, StateSetter } from "@/common/utils/types";
import { useToggle } from "@/common/hooks";

export type DialogContextType<IsPopover extends boolean> =
  IsPopover extends false
    ? {
        status: boolean;
        open: () => void;
        setStatus: StateSetter<boolean>;
        toggleStatus: () => void;
        close: () => void;
      }
    : {
        status: boolean;
        anchorEl: Nullable<HTMLElement>;
        open: (event: MouseEvent<HTMLElement>) => void;
        setAnchorEl: StateSetter<Nullable<HTMLElement>>;
        close: () => void;
      };

export type DialogContextProviderProps = { children: ReactNode } & (
  | {
      popover: true;
      defaultValue?: never;
    }
  | {
      popover: false;
      defaultValue?: boolean;
    }
);

export const DIALOG_CONTEXT =
  createContext<Nullable<DialogContextType<any>>>(null);

export const DialogContextProvider = ({
  defaultValue,
  popover,
  children,
}: DialogContextProviderProps) => {
  const { value, setTrue, setFalse, toggleValue, setValue } =
    useToggle(defaultValue);
  const [anchorEl, setAnchorEl] = useState<Nullable<HTMLElement>>(null);

  const popoverValue: DialogContextType<true> = {
    status: Boolean(anchorEl),
    anchorEl,
    setAnchorEl,
    open: (event) => {
      setAnchorEl(event.currentTarget);
    },
    close: () => {
      setAnchorEl(null);
    },
  };

  const simpleDialogValue: DialogContextType<false> = {
    status: value,
    setStatus: setValue,
    close: setFalse,
    open: setTrue,
    toggleStatus: toggleValue,
  };

  return (
    <DIALOG_CONTEXT.Provider value={popover ? popoverValue : simpleDialogValue}>
      {children}
    </DIALOG_CONTEXT.Provider>
  );
};
