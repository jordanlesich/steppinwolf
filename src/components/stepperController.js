import React from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "react-feather";

import Help from "../components/help";
import Button from "../components/button";
import { getColor, getNeon } from "../helpers/helpers";

const StyledStepperController = styled.div`
  border-top: 1px solid ${getColor("border")};
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  padding: 2vw 3vw 0 3vw;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-bottom: 5vh;

  .controller-nav {
    display: flex;
  }
  .glow-button {
    border: none;
    ${getNeon("success", 0.3)}
  }
`;

const StepperController = ({ next, prev, help, steps, step, setSteps }) => {
  const completeStep = () => {
    const id = steps[step].tag;
    setSteps(
      steps.map((step) => {
        return step.tag === id ? { ...step, completed: true } : step;
      })
    );
  };

  return (
    <StyledStepperController>
      <div className="controller-help">
        <Help helpText={help} className="QA-help" />
      </div>

      <div className="controller-nav">
        <Button height="5rem" content={<ChevronLeft size="5rem" />} fn={prev} />
        <Button
          height="5rem"
          content={<ChevronRight size="5rem" />}
          fn={next}
        />
      </div>
      <Button
        height="5rem"
        width="12rem"
        content="Ready"
        fontSize={"2rem"}
        fn={completeStep}
      />
    </StyledStepperController>
  );
};

export default StepperController;
