import React from "react";
import styled from "styled-components";

export const StyledMainText = styled.h2`
  line-height: 48px;
  font-size: 5rem;
  font-weight: 300;
  overflow-wrap: break-word;
  word-break: break-word;
`;

const MainText = ({ str }) => {
  return <StyledMainText>{str}</StyledMainText>;
};

export default MainText;
