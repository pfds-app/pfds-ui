export const renderMoney = (value: string) => {
  if (!value.includes(".")) {
    return value;
  }

  const [entier, decimal] = value.split(".");
  return `${entier}.${decimal.slice(0, 2)}`;
};

export const renderMoneyWithUnit = (value: string, unit: string = "Ar") => {
  return `${renderMoney(value)} ${unit}`;
};
