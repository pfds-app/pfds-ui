import { FunctionField, useTranslate } from "react-admin";
import { FC } from "react";
import { getObjValue } from "@/common/utils/get-obj-value";

export type TranslatedEnumTextFieldProps = {
  enumLocalSuffix: string;
  source: string;
};

export const TranslatedEnumTextField: FC<TranslatedEnumTextFieldProps> = ({
  source,
  enumLocalSuffix,
}) => {
  const translate = useTranslate();

  return (
    <FunctionField
      sortable={false}
      source={source}
      render={(record) => {
        const value = getObjValue(record, source);
        return translate(`${enumLocalSuffix}.${value}`);
      }}
    />
  );
};
