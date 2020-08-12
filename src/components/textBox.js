import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import styled from "styled-components";
import { getColor } from "../helpers/helpers";

const StyledTextBox = styled.textarea`
  display: inline-block;
  background-color: ${(props) => props.bgColor};
  box-sizing: border-box;
  resize: none;
  color: ${(props) => props.color};
  font-size: 2.5rem;
  font-weight: 400;
  padding: 2rem;
  padding-left: 2rem;
  height: 35vh;
  width: 90%;
  border: ${(props) => props.border};
  border-radius: 4px;
  transition: 0.2s all;
  font-family: inherit;
  ::placeholder {
    margin-left: 6px;
    color: ${(props) => props.color};
    opacity: 0.2;
  }
  :focus {
    outline: none;
    background-color: ${getColor("bgHighlight")};
  }
`;

const TextBox = ({
  placeholder,
  value,
  disabled,
  border,
  id,
  fn,
  type,
  tag,
  name,
  className,
  color,
  bgColor,
}) => {
  const { currentStep } = useContext(DataContext);
  id ||
    console.warn(
      "Styled Input requires an id string to match the label with the input "
    );

  return (
    <StyledTextBox
      id={tag}
      name={name || id || "name your Input"}
      color={color || "#ececec"}
      border={border || `1px solid ${getColor("border")}`}
      bgColor={color || getColor("bg")}
      onChange={fn}
      onBlur={fn}
      placeholder={placeholder || "Placeholder text"}
      type={type}
      className={`${className} ${currentStep.completed && "completed"}`}
      value={value}
      disabled={currentStep.completed}
    />
  );
};

export default TextBox;
