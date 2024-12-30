import { Dispatch, SetStateAction, HTMLAttributes } from "react";
import { ResourceProps } from "react-admin";

export type UI = Partial<ResourceProps>;
export type StateSetter<T> = Dispatch<SetStateAction<T>>;
export type Nullable<T> = T | null;
export type NativeStyle = HTMLAttributes<HTMLElement>["style"];
