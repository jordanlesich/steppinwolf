import React from "react";
import styled from "styled-components";
import { getColor } from "../helpers/helpers";

const StyledInput = styled.input`
  display: inline-block;
  background-color: ${(props) => props.bgColor};
  box-sizing: border-box;
  color: ${(props) => props.color};
  font-size: 3rem;
  font-weight: 400;
  padding-left: 1rem;
  height: 50px;
  width: 400px;
  border: none;
  border: 1px solid ${getColor("border")};
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

const TextInput = ({
  placeholder,
  label,
  id,
  fn,
  type,
  name,
  className,
  color,
  bgColor,
}) => {
  id ||
    console.warn(
      "Styled Input requires an id string to match the label with the input "
    );

  return (
    <StyledInput
      id={id}
      name={name || id || "name your Input"}
      color={color || getColor("light")}
      bgColor={color || getColor("bg")}
      onChange={fn}
      onBlur={fn}
      placeholder={placeholder || "Placeholder text"}
      type={type}
      className={className}
    />
  );
};

export default TextInput;
