import { renderMoneyWithUnit } from "@/common/utils/money";
import { FC } from "react";
import { FunctionField } from "react-admin";

export type MoneyTextFieldProps = {
  source: string;
};

export const MoneyTextField: FC<MoneyTextFieldProps> = ({ source }) => {
  return (
    <FunctionField
      source={source}
      sortable={false}
      render={(record) => renderMoneyWithUnit(record[source])}
    />
  );
};
