import { Translate } from "react-admin";
import dayjs from "dayjs";

export const higherOrEqualsThan = (minSource: string, translate: Translate) => {
  return (value: string, allValues: any) => {
    const minValue = +allValues[minSource];
    return +value >= minValue
      ? undefined
      : translate("custom.common.must_be_higher_or_equal_than", {
          value: minValue,
        });
  };
};

export const higherOrEqualsThanDate = (
  minSource: string,
  translate: Translate
) => {
  return (value: string, allValues: any) => {
    const minValue = allValues[minSource];
    const isSame = dayjs(minValue).isSame(dayjs(value));
    const isValid = dayjs(minValue).isBefore(dayjs(value));

    return isValid || isSame
      ? undefined
      : translate("custom.common.must_be_higher_or_equal_than", {
          value: minValue,
        });
  };
};
