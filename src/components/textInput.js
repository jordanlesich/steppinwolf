import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: inline-block;
  box-sizing: border-box;
  font-size: 3rem;
  height: 50px;
  width: 400px;
  border: none;
  border-bottom: 1px solid rgba(47, 47, 47, 0.2);
  border-radius: 4px;
  transition: 0.2s all;
  font-family: inherit;
  ::placeholder {
    margin-left: 6px;
  }
  :focus {
    background-color: #f2f6fa;
    outline: none;
    border-bottom: 1px solid rgba(47, 47, 47, 0.4);
  }
`;

const TextInput = ({ placeholder, label, id, fn, type, name, className }) => {
  id ||
    console.warn(
      "Styled Input requires an id string to match the label with the input "
    );

  return (
    <StyledInput
      id={id}
      name={name || id || "name your Input"}
      onChange={fn}
      onBlur={fn}
      placeholder={placeholder || "Placeholder text"}
      type={type}
      className={className}
    />
  );
};

export default TextInput;
