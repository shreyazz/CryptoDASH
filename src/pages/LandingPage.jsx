import React, { useEffect, useState } from "react";
import {
  LandingWrapper,
  LeftLanding,
  RightLanding,
  Title,
  UlFeatures,
  LiFeature,
  LiImage,
  CTA,
  MainImage,
} from "../StyledComponents/LandingPageElements";
import imgForLiLight from "../images/imgForLiLight.svg";
import imgForLiDark from "../images/imgForLiDark.svg";
import mainImg from "../images/main.svg";
import mainImg1 from "../images/main-1.svg";
import mainImg1Light from "../images/main-1-light.svg";

const LandingPage = ({ theme, windowsize }) => {
  const mainImages = [mainImg, mainImg1];
  const [image, setImage] = useState(mainImg);
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * mainImages.length);
    setImage(mainImages[randomIndex]);
    if (mainImages[randomIndex] === mainImg1 && theme === "light") {
      setImage(mainImg1Light);
    } else if (mainImages[randomIndex] === mainImg1 && theme === "dark") {
      setImage(mainImg1);
    } else {
      setImage(mainImg);
    }
  };

  useEffect(getRandomImage, []); // eslint-disable-line react-hooks/exhaustive-deps
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
                windowsize={windowsize}
              />{" "}
              Track your favourite cryptos
            </LiFeature>
            <LiFeature color={theme}>
              <LiImage
                src={theme === "dark" ? imgForLiLight : imgForLiDark}
                alt=""
                windowsize={windowsize}
              />{" "}
              View multiple charts of various coins
            </LiFeature>
            <LiFeature color={theme}>
              <LiImage
                src={theme === "dark" ? imgForLiLight : imgForLiDark}
                alt=""
                windowsize={windowsize}
              />{" "}
              Get the latest news about the market
            </LiFeature>
          </UlFeatures>
          <CTA color={theme} to="/crypto">
            Get Started
          </CTA>
        </LeftLanding>
        <RightLanding>
          <MainImage src={image} alt="" />
        </RightLanding>
      </LandingWrapper>
    </>
  );
};

export default LandingPage;
