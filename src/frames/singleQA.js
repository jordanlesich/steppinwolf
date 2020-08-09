import React, { useState } from "react";
import InputFactory from "../factories/inputFactory";
import Help from "../components/help";
import Label from "../components/label";
import SubText from "../components/subText";
import styled from "styled-components";

const StyledQA = styled.form`
  position: relative;

  .QA-label {
    margin-bottom: 4vh;
  }
  .QA-subtext {
    margin-bottom: 8vh;
  }
  .QA-input {
  }
  .QA-help {
    position: absolute;
    top: 0;
    right: -5rem;
  }
`;

const SingleQA = ({ addData, content, question, subText, input, help, id }) => {
  const [userInput, setUserInput] = useState("");

  const checkValidation = () => {
    //run val against a regex match function
  };
  const handleTyping = (val) => {
    setUserInput(val);
    checkValidation();
  };
  const submitData = () => {
    addData(userInput);
  };

  return (
    <StyledQA onSubmit={submitData}>
      <Label question={question} htmlFor={question} className="QA-label" />
      {subText && (
        <SubText subText={subText} htmlFor={question} className="QA-subtext" />
      )}
      {content && content}
      {help && <Help text={help} className="QA-help" />}
      <InputFactory
        input={{
          ...input,
          fn: handleTyping,
          id: question,
          className: "QA-input",
          placeholder: "Type here",
        }}
      />
    </StyledQA>
  );
};

export default SingleQA;
