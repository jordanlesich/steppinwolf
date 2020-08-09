import React, { useState } from "react";
import Button from "./button";
import styled from "styled-components";
import FrameFactory from "../factories/frameFactory";
import { steps } from "../helpers/instructions";

const StepperWindow = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns:
    auto
    minmax(150px, 300px) minmax(550px, 800px) minmax(150px, 300px)
    auto;
  grid-template-rows: minmax(0, 50px) 800px auto;
  .stepper-panel {
    grid-row: 2/3;
    grid-column: 3/4;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-top: 3vh;
  }
  .stepper-stage {
  }
  .stepper-nav {
    grid-row: 2/3;
    grid-column: 2/3;
  }
  .stepper-controller {
    margin-top: auto;
    margin-bottom: 10vh;
  }
`;

const Stepper = () => {
  const [frame, setFrame] = useState(2);
  const [step, setStep] = useState(0);

  const nextFrame = () => setFrame((currentFrame) => currentFrame + 1);
  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };
  const currentStep = steps[step];
  const currentFrame = currentStep.frame[frame];

  const next = () => {
    if (frame + 1 < currentStep.frame.length) {
      nextFrame();
    } else {
      nextStep();
      setFrame(0);
    }
  };

  return (
    <>
      <StepperWindow>
        <div className="stepper-nav">
          <h1>{step}</h1>
          <h1>{frame}</h1>
        </div>
        <div className="stepper-panel">
          <div className="stepper-stage">
            <FrameFactory frame={currentFrame} />
          </div>

          <div className="stepper-controller">
            <Button content="Next" fn={next} />
          </div>
        </div>
      </StepperWindow>
    </>
  );
};

export default Stepper;
