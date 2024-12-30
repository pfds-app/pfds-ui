import { useContext } from "react";
import { STEPPER_CONTEXT } from "../context";

export const useStepperContext = () => {
  const stepperContext = useContext(STEPPER_CONTEXT);

  if (stepperContext === null) {
    throw new Error("useStepperContext must be wrapper by STEPPER_CONTEXT");
  }

  return stepperContext;
};
