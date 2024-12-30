import { useState } from "react";

export const useToggle = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  return {
    value,
    setValue,
    setTrue: () => {
      setValue(true);
    },
    setFalse: () => {
      setValue(false);
    },
    toggleValue: () => {
      setValue((prev) => !prev);
    },
  };
};
