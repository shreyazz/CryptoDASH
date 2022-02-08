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
  LeftInfo,
  RightGraph,
} from "../StyledComponents/CryptoElements";
import moment from "moment";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
const Crypto = ({ theme }) => {
  const [cOnePrice, setCOnePirces] = useState([]);
  const [cTwoPrice, setCTwoPrices] = useState([]);
  const [cThreePrice, setCThreePrices] = useState([]);

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

  // useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const [coins, setCoins] = useState({});
  const [favCoins, setFavCoins] = useState([]);
  const [currency, setCurrency] = useState("usd");
  useEffect(() => {
    favs.map((fav) => getDynamicCrypto(fav.name, fav.var, fav.setVar));
    fetch("https://api.coingecko.com/api/v3/coins")
      .then((res) => res.json())
      .then((res) => setCoins(res));
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

  let data2 = [];
  for (let index = 0; index < 31; index++) {
    data2.push({
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
              <ResponsiveContainer width="100%" height="80%">
                <AreaChart
                  width={1300}
                  height={450}
                  data={data2.reverse()}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorb" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1184d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#1184d1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colors" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#454f93" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#454f93" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" angle="300" fontSize={"10px"} />
                  <YAxis />
                  <CartesianGrid strokeDasharray="4 4" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="cOne"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorb)"
                  />
                  <Area
                    type="monotone"
                    dataKey="cTwo"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colore)"
                  />
                  <Area
                    type="monotone"
                    dataKey="cThree"
                    stroke="#122370"
                    fillOpacity={1}
                    fill="url(#colors)"
                  />
                </AreaChart>

                {/* <LineChart
                  // width={730}
                  // height={250}
                  data={data2}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="cOne" stroke="#1184d8" />
                  <Line type="monotone" dataKey="cTwo" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="cThree" stroke="#454f93" />
                </LineChart> */}
              </ResponsiveContainer>
            </RightGraph>
          </GraphArea>
        </CardHolder>
      </CryptoWrapper>
    </>
  );
};

export default Crypto;
