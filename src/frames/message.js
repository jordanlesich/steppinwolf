import React from "react";
import MainText from "../components/mainText";
import SubText from "../components/subText";
import { StyledFrame } from "../factories/frameFactory";

const Message = ({ message, subText, content }) => {
  return (
    <>
      <MainText str={message} />
      {subText && <SubText subText={subText} />}
      {content && content}
    </>
  );
};

export default Message;
