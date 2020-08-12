import React from "react";
import MainText from "../components/mainText";
import SubText from "../components/subText";
import styled from "styled-components";

const MessageFrame = styled.div``;

const Message = ({ message, subText, content }) => {
  return (
    <MessageFrame>
      <MainText str={message} />
      {subText && <SubText subText={subText} />}
      {content && content}
    </MessageFrame>
  );
};

export default Message;
