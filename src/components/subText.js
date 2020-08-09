import React from "react";
import styled from "styled-components";

const StyledSubText = styled.p`
  font-size: 2.5rem;
  font-weight: 300;
  line-height: 32px;
  overflow-wrap: break-word;
  word-break: break-word;
`;
const SubText = ({ subText, className }) => {
  return <StyledSubText className={className}>{subText}</StyledSubText>;
};

export default SubText;
