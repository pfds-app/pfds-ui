import { Show as RaShow, ShowProps } from "react-admin";
import { FC } from "react";

export const Show: FC<ShowProps> = ({ children, ...props }) => {
  return <RaShow {...props}>{children}</RaShow>;
};
