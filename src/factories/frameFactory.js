import React from "react";
import Message from "../frames/message";
import SingleQA from "../frames/singleQA";
import styled from "styled-components";

export const StyledFrame = styled.div``;

const getFrame = ({
  type,
  message,
  subtext,
  content,
  question,
  subText,
  addData,
  input,
  response,
  validation,
  help,
  tag,
}) => {
  const frame = {
    message: <Message message={message} subText={subtext} content={content} />,
    singleQA: (
      <SingleQA
        addData={addData}
        content={content}
        question={question}
        subText={subText}
        input={input}
        response={response}
        validation={validation}
        help={help}
        id={tag}
      />
    ),
  };
  return frame[type];
};

const FrameFactory = ({ frame }) => {
  return <>{getFrame(frame)}</>;
};

export default FrameFactory;
