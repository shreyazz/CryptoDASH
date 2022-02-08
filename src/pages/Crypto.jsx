import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import {
  CryptoWrapper,
  CardHolder,
  OverView,
  HeadOverview,
  ReloadButton,
  LastUpdated,
  SyncIcon,
  SelectCurrency,
  SelectDiv,
  GraphArea,
  RightGraph,
  GraphSelector,
} from "../StyledComponents/CryptoElements";
import moment from "moment";
import LineGraph from "../components/LineGraph";
import AreaGraph from "../components/AreaGraph";
const Crypto = ({ theme }) => {
  const [cOnePrice, setCOnePirces] = useState([]);
  const [cTwoPrice, setCTwoPrices] = useState([]);
  const [cThreePrice, setCThreePrices] = useState([]);
  const [graphType, setGraphType] = useState("line");

  // A dynamic function which takes
  // 1. crypto: bitcoin/solana
  // 2. cyrptoVar: cOnePrice/cTwoPrice
  // 3. setCryptoVar: setCOnePirces/setCTwoPirces

  const getDynamicCrypto = async (crypto, cyrptoVar, setCryptoVar) => {
    try {
      setCryptoVar([]);
      const api = await fetch(
        `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=inr&days=30&interval=daily`
      );
      const data = await api.json();
      const priceBe = [];
      data.prices.forEach((perPrice) => {
        priceBe.push(perPrice[1]);
        setCryptoVar((prev) => [...prev, perPrice[1]]);
      });
    } catch (err) {
      console.log("unable to fetch the entered crypto");
    }
  };

  // favourite cryptos array which includes all the needed keys:values
  const favs = [
    { name: "ripple", var: cOnePrice, setVar: setCOnePirces },
    { name: "cardano", var: cTwoPrice, setVar: setCTwoPrices },
    { name: "usd-coin", var: cThreePrice, setVar: setCThreePrices },
  ];

  const [coins, setCoins] = useState({});
  const [favCoins, setFavCoins] = useState([]);
  const [currency, setCurrency] = useState("usd");
  useEffect(() => {
    //  calling the dynamic function
    favs.map((fav) => getDynamicCrypto(fav.name, fav.var, fav.setVar));

    fetch("https://api.coingecko.com/api/v3/coins")
      .then((res) => res.json())
      .then((res) => setCoins(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getFavCoin = () => {
    setFavCoins(
      coins.filter(
        (coin) =>
          coin.id === "bitcoin" ||
          coin.id === "solana" ||
          coin.id === "ethereum" ||
          coin.id === "dogecoin"
      )
    );
  };

  // graph data

  let dataForGraph = [];
  for (let index = 0; index < 31; index++) {
    dataForGraph.push({
      name: moment()
        .subtract(index + 1, "days")
        .format("MMM Do YY"),
      cOne: favs[0].var[index],
      cTwo: favs[1].var[index],
      cThree: favs[2].var[index],
    });
  }

  // graph data ends

  return (
    <>
      <CryptoWrapper color={theme}>
        <OverView>
          <div>
            <HeadOverview color={theme}>
              Favourite crypto currencies
            </HeadOverview>
            <LastUpdated color={theme}>
              Last Updated:{" "}
              {coins[0] === undefined || null
                ? "loading..."
                : `${new Date(
                    coins[0].last_updated
                  ).toLocaleDateString()} ${new Date(
                    coins[0].last_updated
                  ).toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}`}{" "}
            </LastUpdated>
          </div>
          <div className="flex-it">
            <SelectDiv>
              <SelectCurrency
                color={theme}
                name="curencies"
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="usd">USD</option>
                <option value="inr">INR</option>
                <option value="aud">AUD</option>
                <option value="gbp">GBP</option>
              </SelectCurrency>
            </SelectDiv>
            {/* ! change graph type from this div... just like theme toggler */}
            {/* ! set the setGraphType to line || area */}
            <GraphSelector
              onClick={() => setGraphType("area")}
              color={theme}
            ></GraphSelector>
            <ReloadButton color={theme} onClick={getFavCoin}>
              {" "}
              <SyncIcon color={theme} />{" "}
            </ReloadButton>
          </div>
        </OverView>
        <CardHolder color={theme}>
          {favCoins.map((coin) => {
            return (
              <Card
                currency={currency.toUpperCase()}
                theme={theme}
                key={coin.id}
                name={coin.name}
                img={coin.image.small}
                price={coin.market_data.current_price[
                  currency
                ].toLocaleString()}
                percentChange={coin.market_data.price_change_percentage_24h}
              />
            );
          })}
          <GraphArea>
            <RightGraph>
              {graphType === "line" ? (
                <LineGraph dataForGraph={dataForGraph} />
              ) : (
                <AreaGraph dataForGraph={dataForGraph} />
              )}
            </RightGraph>
          </GraphArea>
        </CardHolder>
      </CryptoWrapper>
    </>
  );
};

export default Crypto;
