export const CRYPTOS = [
  "bitcoin",
  "tether",
  "dogecoin",
  "ethereum",
  "polkadot",
  "ftx-token",
  "monero",
  "uniswap",
  "tezos",
  "binancecoin",
  "decentraland",
  "chiliz",
  "propy",
  "mirror-protocol",
  "sushi",
] as const;

export type SupportedCryptos = typeof CRYPTOS[number];

export const riskValues = {
  bitcoin: "3.5431800000000004",
  tether: "1.5776399999999997",
  dogecoin: "2.7739299999999996",
  ethereum: "3.29997",
  polkadot: "2.319802",
  "ftx-token": "0.9753599999999999",
  monero: "2.6854",
  uniswap: "1.4609899999999998",
  tezos: "2.40244",
  binancecoin: "2.9522900000000005",
  decentraland: "2.30743",
  chiliz: "1.02324",
  propy: "0.5142690000000001",
  "mirror-protocol": "0.8624430000000001",
  sushi: "1.032474",
};
