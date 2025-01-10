import { Translate } from "react-admin";

export const higherOrEqualsThan = (minSource: string, translate: Translate) => {
  return (value: string, allValues: any) => {
    const minValue = +allValues[minSource];
    return +value >= minValue ? undefined : translate('custom.common.must_be_higher_or_equal_than', { value: minValue });
  };
};
