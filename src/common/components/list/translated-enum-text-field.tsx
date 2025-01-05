import { FC } from "react";
import { FunctionField, useTranslate } from "react-admin";

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
        const value = record[source];
        return translate(`${enumLocalSuffix}.${value}`);
      }}
    />
  );
};
