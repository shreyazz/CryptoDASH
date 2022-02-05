import React from "react";
import { Label, Input } from "../StyledComponents/LoginRegElements";
const InputComponent = ({ labelText, inputType, placeholder, color, windowheight }) => {
  return (
    <>
      <div className="inputWrapper">
        <Label htmlFor={labelText} color={color} windowheight={windowheight}>
          {" "}
          {!labelText ? "Label" : labelText}
        </Label>
        <Input type={inputType} placeholder={placeholder} color={color} windowheight={windowheight} />
      </div>
    </>
  );
};

export default InputComponent;
