import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import styled from "styled-components";
import FrameFactory from "../factories/frameFactory";
import StepperController from "./stepperController";
import StepperNav from "./stepperNav";
import { getColor } from "../helpers/helpers";

const StepperWindow = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns:
    auto
    minmax(100px, 150px) minmax(0, 20px) minmax(550px, 900px) minmax(
      150px,
      300px
    )
    auto;
  grid-template-rows: minmax(0, 50px) 800px auto;
  .stepper-panel {
    background-color: ${getColor("bg")};
    grid-row: 2/3;
    grid-column: 4/5;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.3s all;
    box-shadow: none;
  }
`;

const Stepper = () => {
  const {
    steps,
    setSteps,
    frame,
    setFrame,
    step,
    setStep,
    currentStep,
    currentFrame,
  } = useContext(DataContext);

  const nextFrame = () => setFrame((currentFrame) => currentFrame + 1);
  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };
  const cannotMoveForward = () =>
    frame >= steps[step].frame.length - 1 && step >= steps.length - 1;
  const cannotMoveBackward = () => frame <= 0 && step <= 0;

  const next = () => {
    if (cannotMoveForward()) return;
    if (frame + 1 < currentStep.frame.length) {
      nextFrame();
    } else {
      nextStep();
      setFrame(0);
    }
  };
  const prev = () => {
    if (cannotMoveBackward()) return;
    if (frame === 0) {
      setStep((thisStep) => thisStep - 1);
      const prevStep = steps[step - 1];
      setFrame(prevStep.frame.length - 1);
    } else {
      setFrame((thisFrame) => thisFrame - 1);
    }
  };
  return (
    <StepperWindow>
      <StepperNav step={step} frame={frame} steps={steps} />
      <div className="stepper-panel">
        <FrameFactory frame={currentFrame} />
        <StepperController
          help={currentFrame.help}
          next={next}
          prev={prev}
          setSteps={setSteps}
          steps={steps}
          step={step}
          tag={currentFrame.tag}
          cannotMoveForward={cannotMoveForward}
          cannotMoveBackward={cannotMoveBackward}
        />
      </div>
    </StepperWindow>
  );
};

export default Stepper;
