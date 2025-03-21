import { FunctionField, useTranslate } from "react-admin";
import { FC } from "react";
import { getObjValue } from "@/common/utils/get-obj-value";

export type TranslatedEnumTextFieldProps = {
  enumLocalSuffix: string;
  source: string;
  label?: any;
};

export const TranslatedEnumTextField: FC<TranslatedEnumTextFieldProps> = ({
  source,
  enumLocalSuffix,
  label,
}) => {
  const translate = useTranslate();

  return (
    <FunctionField
      sortable={false}
      source={source}
      label={label}
      render={(record) => {
        const value = getObjValue(record, source);
        return translate(`${enumLocalSuffix}.${value}`);
      }}
    />
  );
};
