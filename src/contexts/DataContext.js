import React, { useState, createContext } from "react";
import { data } from "../helpers/instructions";
import { mapTagsToObject } from "../helpers/helpers";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [steps, setSteps] = useState(
    data.map((step) => {
      return { ...step, completed: false };
    })
  );
  const [frame, setFrame] = useState(0);
  const [step, setStep] = useState(0);
  const currentStep = steps[step];
  const currentFrame = steps[step].frame[frame];
  const [temporaryVals, setTemporaryValues] = useState(mapTagsToObject(data));

  const saveInput = (tag, val) =>
    setTemporaryValues({ ...temporaryVals, [tag]: val });

  const addData = (tag, val) => {
    setSteps((currentSteps) =>
      currentSteps.map((step) => {
        return step.tag === tag
          ? { ...step, completed: true, answer: val }
          : step;
      })
    );
  };
  return (
    <DataContext.Provider
      value={{
        steps,
        setSteps,
        temporaryVals,
        saveInput,
        addData,
        frame,
        setFrame,
        step,
        setStep,
        currentStep,
        currentFrame,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
