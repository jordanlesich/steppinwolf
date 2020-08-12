import React, { useState } from "react";
import styled from "styled-components";
import FrameFactory from "../factories/frameFactory";
import StepperController from "./stepperController";
import StepperNav from "./stepperNav";
import { data } from "../helpers/instructions";
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
    /* border-radius: 50px; */
    /* border-top: 1px solid ${getColor("")}; */

    grid-row: 2/3;
    grid-column: 4/5;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: 0.3s all;
    box-shadow: none;
    .glow {
      /* border: 1px solid rgba(255, 255, 255, 1); */
      box-shadow: 0 0 0.1vw 0.4vw #fff7f7, 0 0 0.4vw 0.6vw #e97272,
        0 0 4vw 0.4vw #e50b0b, inset 0 0 1.5vw 0.4vw #e50b0b,
        inset 0 0 0.4vw 0.2vw #e97272, inset 0 0 0.5vw 0.2vw #fff7f7;
    }
    /* padding: 4vw; */
    /* padding-top: 3vh; */
  }
`;

const Stepper = () => {
  const [steps, setSteps] = useState(
    data.map((step) => {
      return { ...step, completed: false };
    })
  );
  const [frame, setFrame] = useState(2);
  const [step, setStep] = useState(0);

  const currentStep = steps[step];
  const currentFrame = currentStep.frame[frame];

  const nextFrame = () => setFrame((currentFrame) => currentFrame + 1);
  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };
  const next = () => {
    if (frame + 1 < currentStep.frame.length) {
      nextFrame();
    } else {
      nextStep();
      setFrame(0);
    }
  };
  const prev = () => {
    if (frame === 0) {
      setStep((thisStep) => thisStep - 1);
      setFrame(currentStep.frame.length - 1);
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
        />
      </div>
    </StepperWindow>
  );
};

export default Stepper;
