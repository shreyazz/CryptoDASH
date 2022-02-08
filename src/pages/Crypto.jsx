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
        `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart?vs_currency=inr&days=15&interval=daily`
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
    { name: "solana", var: cOnePrice, setVar: setCOnePirces },
    { name: "bitcoin", var: cTwoPrice, setVar: setCTwoPrices },
    { name: "ethereum", var: cThreePrice, setVar: setCThreePrices },
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

  const data = [
    {
      name: "Page A",
      b: 4000,
      e: 2400,
      s: 2000,
      d: 120,
    },
    {
      name: "Page B",
      b: 3000,
      e: 2100,
      s: 2400,
      d: 220,
    },
  ];

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
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorb" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colors" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#122370" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#122370" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colord" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#124a9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#124a9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="b"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorb)"
                  />
                  <Area
                    type="monotone"
                    dataKey="e"
                    stroke="#82ca9d"
                    fillOpacity={1}
                    fill="url(#colore)"
                  />
                  <Area
                    type="monotone"
                    dataKey="s"
                    stroke="#122370"
                    fillOpacity={1}
                    fill="url(#colors)"
                  />
                  <Area
                    type="monotone"
                    dataKey="d"
                    stroke="#124a9d"
                    fillOpacity={1}
                    fill="url(#colord)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </RightGraph>
          </GraphArea>
        </CardHolder>
      </CryptoWrapper>
    </>
  );
};

export default Crypto;
