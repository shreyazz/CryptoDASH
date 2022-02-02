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
} from "../StyledComponents/CryptoElements";
const Crypto = ({ theme }) => {
  const [coins, setCoins] = useState({});
  const [favCoins, setFavCoins] = useState([]);
  const [currency, setCurrency] = useState("usd");
  useEffect(() => {
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
        </CardHolder>
      </CryptoWrapper>
    </>
  );
};

export default Crypto;
