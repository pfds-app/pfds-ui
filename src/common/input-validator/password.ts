// Check if the confirm password matches the actual password
export const confirmPasswordValidator = (
  passwordSource: string,
  message: string
) => {
  return (value: string, allValues: any) => {
    return value === allValues[passwordSource] ? undefined : message;
  };
};
