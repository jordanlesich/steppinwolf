import React from "react";
import TextInput from "../components/textInput";
import TextBox from "../components/textBox";

const GetInput = ({
  value,
  fn,
  placeholder,
  type,
  tag,
  id,
  className,
  disabled,
}) => {
  const inputs = {
    textInput: (
      <TextInput
        value={value}
        fn={fn}
        placeholder={placeholder}
        tag={tag}
        className={className}
      />
    ),
    textBox: (
      <TextBox
        value={value}
        fn={fn}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        tag={tag}
      />
    ),
  };
  return inputs[type];
};

const InputFactory = ({ input }) => {
  return <>{GetInput(input)}</>;
};

export default InputFactory;
