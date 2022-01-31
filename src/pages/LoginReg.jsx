import React, { useState } from "react";
import {
  LogRegWrapper,
  H3,
  P,
  H1,
  MainWrapper,
  UserMessage,
} from "../StyledComponents/LoginRegElements";
import InputComponent from "../components/InputComponent";
const LoginReg = ({ theme }) => {
  const [showReg, setShowReg] = useState(false);
  return (
    <>
      <LogRegWrapper color={theme}>
        <MainWrapper color={theme}>
          <H1 color={theme}>{showReg ? "Register" : "Login"}</H1>
          {!showReg && (
            <>
              <InputComponent
                labelText="Email"
                inputType="Email"
                placeholder="Email"
                color={theme}
              />
              <InputComponent
                labelText="Password"
                inputType="password"
                placeholder="Password"
                color={theme}
              />
            </>
          )}

          {showReg && (
            <>
              <InputComponent
                labelText="Name"
                inputType="text"
                placeholder="Name"
                color={theme}
              />
              <InputComponent
                labelText="Email"
                inputType="email"
                placeholder="Email"
                color={theme}
              />
              <InputComponent
                labelText="Password"
                inputType="password"
                placeholder="Password"
                color={theme}
              />
            </>
          )}
          <div className="lower-login">
            <H3 color={theme}>OR</H3>
            <UserMessage color={theme}>
              {!showReg ? "Not Registered Yet" : "Already a User?"}{" "}
            </UserMessage>
            <P color={theme} onClick={() => setShowReg(!showReg)}>
              {!showReg ? "Register Now" : "Login"}
            </P>
          </div>
        </MainWrapper>
      </LogRegWrapper>
    </>
  );
};

export default LoginReg;
