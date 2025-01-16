import { FC, ReactNode } from "react";
import { useWatch } from "react-hook-form";

export type IsSourceEqualsProps = {
  source: string;
  equals: string[];
  render: (isEqual: boolean) => ReactNode;
};

export const IsSourceEquals: FC<IsSourceEqualsProps> = ({
  render,
  source,
  equals,
}) => {
  const value = useWatch({ name: source });
  return render(equals.includes(value));
};
