import React from "react";
import styled from "styled-components";
import { StyledMainText } from "./mainText";

const StyledLabel = styled(StyledMainText)``;

const Label = ({ question, htmlFor, children, className }) => {
  return (
    <StyledLabel htmlFor={htmlFor} className={className}>
      {question}
      {children}
    </StyledLabel>
  );
};

export default Label;
