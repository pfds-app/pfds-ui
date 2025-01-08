export const higherOrEqualsThan = (minSource: string, message: string) => {
  return (value: string, allValues: any) => {
    const minValue = +allValues[minSource];
    return +value >= minValue ? undefined : message;
  };
};
