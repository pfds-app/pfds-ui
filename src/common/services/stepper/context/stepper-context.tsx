import { FC, createContext, useState } from "react";
import { StateSetter } from "@/common/utils/types";

export type StepperContextType = {
  currentStep: number;
  maxStep: number;
  prevStep: number;
  nextStep: number;
  doNexStep: () => void;
  doPrevStep: () => void;
  setStep: StateSetter<number>;
};

export const STEPPER_CONTEXT = createContext<StepperContextType | null>(null);

export const StepperContextProvider: FC<{
  maxStep: number;
  defaultStep?: number;
  children: React.ReactNode;
}> = ({ maxStep, defaultStep = 1, children }) => {
  const [currentStep, setCurrentStep] = useState(defaultStep);

  if (maxStep < 1) {
    throw new Error("Max step cannot less than 1");
  }

  return (
    <STEPPER_CONTEXT.Provider
      value={{
        maxStep,
        currentStep,
        prevStep: currentStep - 1,
        nextStep: currentStep + 1,
        setStep: setCurrentStep,
        doNexStep: () => {
          setCurrentStep((prev) => ++prev);
        },
        doPrevStep: () => {
          setCurrentStep((prev) => --prev);
        },
      }}
    >
      {children}
    </STEPPER_CONTEXT.Provider>
  );
};
