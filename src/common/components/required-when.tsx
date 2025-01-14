import { required, useTranslate, Validator } from "react-admin";
import { useWatch } from "react-hook-form";
import { FC, ReactNode } from "react";

export type RequireWhenProps = {
  when: string;
  equals: string[];
  validators?: Validator[];
  translatedEnum?: boolean;
  enumPath?: string;
  render: (validators: Validator[] | undefined) => ReactNode;
};

export const RequiredWhen: FC<RequireWhenProps> = ({
  enumPath = "",
  translatedEnum = true,
  render,
  validators = [],
  when,
  equals,
}) => {
  const value = useWatch({ name: when });
  const translate = useTranslate();
  const labels = translatedEnum
    ? equals.map((equal) => translate(`${enumPath}.${equal}`))
    : equals;

  const isRequired = equals.includes(value);
  const validatorsProps = isRequired
    ? [
        ...validators,
        required(
          translate("custom.common.required_when", {
            source: when,
            destination: labels.toString(),
          })
        ),
      ]
    : validators;

  return render(validatorsProps);
};
