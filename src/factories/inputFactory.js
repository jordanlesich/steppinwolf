import React from "react";
import TextInput from "../components/textInput";
import TextBox from "../components/textBox";

const GetInput = ({ value, fn, placeholder, type, id, className }) => {
  const inputs = {
    textInput: (
      <TextInput
        value={value}
        fn={fn}
        placeholder={placeholder}
        id={id}
        className={className}
      />
    ),
    textBox: (
      <TextBox
        value={value}
        fn={fn}
        placeholder={placeholder}
        id={id}
        className={className}
      />
    ),
  };
  return inputs[type];
};

const InputFactory = ({ input }) => {
  return <>{GetInput(input)}</>;
};

export default InputFactory;
