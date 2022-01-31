import React from "react";
import { Label, Input } from "../StyledComponents/LoginRegElements";
const InputComponent = ({ labelText, inputType, placeholder, color }) => {
  return (
    <>
      <div className="inputWrapper">
        <Label htmlFor={labelText} color={color}>
          {" "}
          {!labelText ? "Label" : labelText}
        </Label>
        <Input type={inputType} placeholder={placeholder} color={color} />
      </div>
    </>
  );
};

export default InputComponent;
