import { FunctionField } from "react-admin";
import { FC } from "react";

import { renderMoneyWithUnit } from "@/common/utils/money";

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
