export const toISOString = (date: string) => {
  try {
    return new Date(date).toISOString();
  } catch {
    throw new Error("String passed to toISOString is not a valid string");
  }
};
