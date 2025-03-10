import React from "react";
import { InputContainer } from "./styles";

const Input = ({ value, onChange }) => {
  return (
    <InputContainer>
      <input onChange={onChange} value={value} />
    </InputContainer>
  );
};

export default Input;
