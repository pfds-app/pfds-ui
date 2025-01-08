import { FC } from "react";
import { Show as RaShow, ShowProps } from "react-admin";

export const Show: FC<ShowProps> = ({ children, ...props }) => {
  return <RaShow {...props}>{children}</RaShow>;
};
