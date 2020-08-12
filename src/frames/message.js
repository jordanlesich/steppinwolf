import React from "react";
import MainText from "../components/mainText";
import SubText from "../components/subText";
import styled from "styled-components";

const MessageFrame = styled.div`
  .QA-mainText {
    margin-bottom: 3vh;
  }
  .QA-subtext {
    margin-bottom: 5vh;
    margin-left: 2rem;
  }
`;

const Message = ({ message, subText, content }) => {
  console.log(subText);
  return (
    <MessageFrame>
      <MainText str={message} className="QA-mainText" />
      {subText && <SubText subText={subText} className="QA-subtext" />}
      {content && content}
    </MessageFrame>
  );
};

export default Message;
