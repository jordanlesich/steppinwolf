import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getColor, getNeon } from "../helpers/helpers";

const StyledCircle = styled.li`
  height: 8rem;
  width: 8rem;
  border: 3px solid ${getColor("light")};
  list-style: none;
  border-radius: 50%;
  opacity: 0.5;
  transition: 0.6s all;

  &.completed {
    border: 3px solid ${getColor("primary")};
  }

  .circle-glow {
    border: none;
    ${getNeon("success", 0.4)}
  }
`;

const Circle = ({ completed, className, active }) => {
  // const [neon, setNeon] = useState({ isNeon: false, hasAnimated: false });
  const [neon, setNeon] = useState(false);

  useEffect(() => {
    if (!neon.hasAnimated && completed) {
      setNeon(true);
      // const animOutTimer = setTimeout(
      //   () => setNeon({ isNeon: false, hasAnimated: true }),
      //   1000
      // );
      // return () => clearTimeout(animOutTimer);
    }
  }, [completed]);

  return (
    <>
      <StyledCircle
        className={`
    ${completed && "completed"} 
      ${active && "active"} 
       ${className} `}
      />
      <div className={`${neon && "circle-glow"}`} />
    </>
  );
};

export default Circle;
