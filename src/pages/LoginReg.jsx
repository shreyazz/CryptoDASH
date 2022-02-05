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
const LoginReg = ({ theme, windowheight }) => {
  const [showReg, setShowReg] = useState(false);
  return (
    <>
      <LogRegWrapper color={theme} windowheight={windowheight}>
        <MainWrapper color={theme} windowheight={windowheight}>
          <H1 color={theme} windowheight={windowheight}>{showReg ? "Register" : "Login"}</H1>
          {!showReg && (
            <>
              <InputComponent
                labelText="Email"
                inputType="Email"
                placeholder="Email"
                color={theme}
                windowheight={windowheight}
              />
              <InputComponent
                labelText="Password"
                inputType="password"
                placeholder="Password"
                color={theme}
                windowheight={windowheight}
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
                windowheight={windowheight}
              />
              <InputComponent
                labelText="Email"
                inputType="email"
                placeholder="Email"
                color={theme}
                windowheight={windowheight}
              />
              <InputComponent
                labelText="Password"
                inputType="password"
                placeholder="Password"
                color={theme}
                windowheight={windowheight}
              />
            </>
          )}
          <div className="lower-login">
            <H3 color={theme}>OR</H3>
            <UserMessage color={theme} windowheight={windowheight}>
              {!showReg ? "Not Registered Yet" : "Already a User?"}{" "}
            </UserMessage>
            <P color={theme} windowheight={windowheight} onClick={() => setShowReg(!showReg)}>
              {!showReg ? "Register Now" : "Login"}
            </P>
          </div>
        </MainWrapper>
      </LogRegWrapper>
    </>
  );
};

export default LoginReg;
