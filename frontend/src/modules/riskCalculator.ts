import axios from "axios";
import { toast } from "react-toastify";
import { CRYPTOS } from "../constants/cryptos";

export interface CoinData {
  id: string;
  riskScore: number;
  name: string;
  symbol: string;
  image: string;
  price: number;
}

export const fetchCoins = async () => {
  const coinData = async (coinID: string): Promise<CoinData | undefined> => {
    try {
      const result = await axios.get(
        "https://api.coingecko.com/api/v3/coins/" + coinID
      );

      if (!result) throw new Error("Please wait and try again");

      const com_score = result.data.community_score * 1.2;
      const dev_score = result.data.developer_score * 0.8;
      const liq_score = result.data.liquidity_score * 1.5;
      const opinion_score = result.data.public_interest_score * 1;

      var risk_score =
        (com_score + dev_score + liq_score + opinion_score) / 100;

      return {
        id: coinID,
        name: result.data.name,
        symbol: result.data.symbol,
        image: result.data.image.thumb,
        price: result.data.market_data.current_price.usd,
        riskScore: risk_score,
      };
    } catch (error: any) {
      if (error instanceof Error) {
        toast.error(error.message);
      }

      console.log(error);
    }
  };

  const result = await Promise.all(CRYPTOS.map(async (i) => coinData(i)));
  console.log(result);
  return result;
};
