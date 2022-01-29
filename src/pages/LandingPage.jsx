import React from "react";
import {
  LandingWrapper,
  LeftLanding,
  RightLanding,
  Title,
  UlFeatures,
  LiFeature,
  LiImage,
  CTA,
} from "../StyledComponents/LandingPageElements";
import imgForLiLight from "../images/imgForLiLight.svg";
import imgForLiDark from "../images/imgForLiDark.svg";
const LandingPage = ({ theme }) => {
  return (
    <>
      <LandingWrapper color={theme}>
        <LeftLanding>
          <Title color={theme}>
            Track your favourite cryptos and stay updated! At{" "}
            <span>CryptoDASH</span> we let you
          </Title>
          <UlFeatures>
            <LiFeature color={theme}>
              <LiImage
                src={theme === "dark" ? imgForLiLight : imgForLiDark}
                alt=""
              />{" "}
              Track your favourite cryptos
            </LiFeature>
            <LiFeature color={theme}>
              <LiImage
                src={theme === "dark" ? imgForLiLight : imgForLiDark}
                alt=""
              />{" "}
              View multiple charts of various coins
            </LiFeature>
            <LiFeature color={theme}>
              <LiImage
                src={theme === "dark" ? imgForLiLight : imgForLiDark}
                alt=""
              />{" "}
              Get the latest news about the market
            </LiFeature>
          </UlFeatures>
          <CTA color={theme} to="/crypto">
            Get Started
          </CTA>
        </LeftLanding>
        <RightLanding></RightLanding>
      </LandingWrapper>
    </>
  );
};

export default LandingPage;
