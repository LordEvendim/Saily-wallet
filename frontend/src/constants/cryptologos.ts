import Binance from "../assets/icons/binance.png";
import Bitcoin from "../assets/icons/bitcoin.png";
import Chiliz from "../assets/icons/chiliz.png";
import dece from "../assets/icons/dece.png";
import doge from "../assets/icons/doge.png";
import eth from "../assets/icons/eth.png";
import ftx from "../assets/icons/ftx.png";
import mirror from "../assets/icons/mirror.png";
import monero from "../assets/icons/monero.png";
import polkadot from "../assets/icons/polkadot.png";
import propy from "../assets/icons/propy.png";
import sushi from "../assets/icons/sushi.png";
import tether from "../assets/icons/tether.webp";
import tezos from "../assets/icons/tezos.png";
import uni from "../assets/icons/uni.png";

type IconMap = { [name: string]: string };

export const Icons: IconMap = {
  bitcoin: Bitcoin,
  "ftx-token": ftx,
  "mirror-protocol": mirror,
  binancecoin: Binance,
  chiliz: Chiliz,
  decentraland: dece,
  dogecoin: doge,
  ethereum: eth,
  monero: monero,
  polkadot: polkadot,
  propy: propy,
  sushi: sushi,
  tether: tether,
  tezos: tezos,
  uniswap: uni,
};
