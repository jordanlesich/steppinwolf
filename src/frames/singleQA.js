import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import InputFactory from "../factories/inputFactory";
import Label from "../components/label";
import SubText from "../components/subText";
import styled from "styled-components";

const StyledQA = styled.form`
  position: relative;

  .QA-label {
    margin-bottom: 3vh;
  }
  .QA-subtext {
    margin-bottom: 5vh;
    margin-left: 2rem;
  }
  .QA-input {
    margin-left: 2rem;
  }
`;

const SingleQA = ({ content, question, subText, input, tag }) => {
  // const [userInput, setUserInput] = useState("");
  const { temporaryVals, saveInput, submitData } = useContext(DataContext);
  const relevantValue = temporaryVals[tag];
  // const checkValidation = () => {
  //   //run e against a regex match function
  // };
  const handleTyping = (e) => {
    saveInput(tag, e.target.value);
    // setCanSubmit(checkValidation(e.target.value));
  };
  // const submitData = () => {
  //   addData(userInput);
  // };

  return (
    <StyledQA onSubmit={submitData}>
      <Label question={question} htmlFor={question} className="QA-label" />
      {subText && (
        <SubText subText={subText} htmlFor={question} className="QA-subtext" />
      )}
      {content && content}

      <InputFactory
        input={{
          ...input,
          fn: handleTyping,
          tag: tag,
          className: "QA-input",
          placeholder: "Type here",
          value: relevantValue,
        }}
      />
    </StyledQA>
  );
};

export default SingleQA;
