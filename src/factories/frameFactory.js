import React from "react";
import Message from "../frames/message";
import SingleQA from "../frames/singleQA";
import styled from "styled-components";
import { getColor } from "../helpers/helpers";

const StyledFrame = styled.div`
  border-top: 1px solid ${getColor("border")};
  padding: 3vw;
  margin: 1vw;
  padding-bottom: 0;
`;

const getFrame = ({
  type,
  message,
  subText,
  content,
  question,

  addData,
  input,
  response,
  validation,
  help,
  tag,
}) => {
  const frame = {
    message: <Message message={message} subText={subText} content={content} />,
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
        tag={tag}
      />
    ),
  };
  return frame[type];
};

const FrameFactory = ({ frame }) => {
  return <StyledFrame>{getFrame(frame)}</StyledFrame>;
};

export default FrameFactory;
