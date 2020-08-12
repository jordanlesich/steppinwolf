import React from "react";
import styled from "styled-components";
import { getColor } from "../helpers/helpers";
import Circle from "./circle.js";

const StyledStepperNav = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;

  border-right: 1px solid ${getColor("border")};
  border-left: 1px solid ${getColor("border")};

  .nav-circle {
    margin: 2rem auto;
  }
`;
const StepperNav = ({ steps }) => {
  return (
    <StyledStepperNav>
      {steps.map((step, index) => {
        return (
          <Circle
            completed={step.completed}
            stepIndex={index}
            key={step.tag}
            className="nav-circle"
          />
        );
      })}
    </StyledStepperNav>
  );
};

export default StepperNav;
