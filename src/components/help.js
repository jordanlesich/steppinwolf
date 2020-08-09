import React, { useState } from "react";
import styled from "styled-components";
import { HelpCircle } from "react-feather";

const StyledHelpButton = styled.span``;

const Help = ({ helpText, className }) => {
  const [helpTextShowing, setHelpText] = useState(false);
  return (
    <StyledHelpButton className={className}>
      {helpTextShowing ? (
        <p>{helpText}</p>
      ) : (
        <button>
          <HelpCircle />
        </button>
      )}
    </StyledHelpButton>
  );
};

export default Help;
