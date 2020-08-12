import React from "react";
import styled from "styled-components";
import { getColor } from "../helpers/helpers";

export const StyledButton = styled.button`
  padding: 0.25rem 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.radius};
  position: relative;
  outline: none;
  font-weight: 500;
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  transition: 0.2s all;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.selected ? props.bgColor : props.color)};
  border: ${(props) => props.border};
  /* box-shadow: 0px 0px 2px 1px ${(props) => props.color}; */
  :focus{
    border: 1px solid ${getColor("lightBorder")};
  }
  :hover {
    background-color: ${getColor("bgHighlight")}
  }
  :active{
    background-color: ${getColor("border")}
  }
  /* :focus {
    box-shadow: 5px 5px 3px -3px rgba(89, 89, 89, 0.3);
  } */

  & > * {
    pointer-events: none;
  }
  &.disabled{
    color: ${getColor("dark")};
    cursor: default;
    border: 1px solid ${getColor("dark")};
    :hover{
       background-color: ${getColor("bg")}
    }
  }
`;

const Button = ({
  className,
  fn,
  size,
  content,
  value,
  height,
  width,
  bgColor,
  fontSize,
  color,
  border,
  radius,
  selected,
  disabled,
}) => {
  return (
    <StyledButton
      onClick={fn}
      value={value}
      height={height}
      width={width}
      fontSize={fontSize}
      color={color || getColor("light")}
      bgColor={bgColor || getColor("bg")}
      radius={radius || "4px"}
      border={border || `1px solid ${getColor("border")}`}
      className={`${selected && "selected"} 
      ${disabled && "disabled"} 
      ${className}`}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
