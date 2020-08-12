import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
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

const StepperController = ({
  next,
  prev,
  help,
  tag,
  cannotMoveForward,
  cannotMoveBackward,
}) => {
  const { temporaryVals, addData, currentStep, currentFrame } = useContext(
    DataContext
  );

  const completeStep = () => {
    addData(tag, temporaryVals[tag]);
    next();
  };

  return (
    <StyledStepperController>
      <div className="controller-help">
        <Help helpText={help} className="QA-help" />
      </div>

      <div className="controller-nav">
        <Button
          height="5rem"
          content={<ChevronLeft size="5rem" />}
          fn={prev}
          disabled={cannotMoveBackward()}
        />
        <Button
          height="5rem"
          content={<ChevronRight size="5rem" />}
          fn={next}
          disabled={cannotMoveForward()}
        />
      </div>
      <Button
        height="5rem"
        width="12rem"
        content="Submit"
        fontSize={"2rem"}
        fn={completeStep}
        disabled={
          temporaryVals[tag] === "" ||
          currentStep.completed ||
          currentFrame.type === "message"
        }
      />
    </StyledStepperController>
  );
};

export default StepperController;
