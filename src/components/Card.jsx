import React from "react";
import {
  CardMain,
  CoinImage,
  Name,
  Price,
  Perc24Hour,
  Indicator,
} from "../StyledComponents/CardElements";
const Card = ({ theme, name, img, price, percentChange, currency }) => {
  return (
    <>
      <CardMain color={theme}>
        <CoinImage src={img} alt={`${img}-alt-text`} />
        <Name color={theme}>{name}</Name>
        <Price color={theme}>
          {price} {currency}
        </Price>
        <Perc24Hour loss={percentChange.toString()[0] === "-" ? true : false}>
          <Indicator
            loss={percentChange.toString()[0] === "-" ? true : false}
          />{" "}
          {percentChange.toFixed(2)}
        </Perc24Hour>
      </CardMain>
    </>
  );
};

export default Card;
