// Static points for the BTC price line (SVG viewBox 0 0 700 220)
export const btcChartPoints = [
  { x: 0, y: 140 },
  { x: 100, y: 90 },
  { x: 200, y: 130 },
  { x: 300, y: 60 },
  { x: 350, y: 100 }, // highlighted point
  { x: 450, y: 170 },
  { x: 550, y: 70 },
  { x: 650, y: 40 },
  { x: 700, y: 90 },
];

export const chartMonths = ["Jan", "Mar", "May", "Jul", "Sep", "Nov"];

// Live Market sparklines — just a wave shape per coin, colored differently
export const marketData = [
  {
    id: 1,
    name: "Ethereum",
    pair: "ETH / USDT",
    change: "+14.02%",
    price: "39,786 USD",
    positive: true,
    color: "#A78BFA",
    spark:
      "M0 18 L10 8 L20 22 L30 5 L40 20 L50 10 L60 24 L70 6 L80 18 L90 12 L100 20",
  },
  {
    id: 2,
    name: "Bitcoin",
    pair: "ETH / USDT",
    change: "+4.02%",
    price: "21,786 USD",
    positive: true,
    color: "#FBBF24",
    spark: "M0 15 L15 20 L25 6 L35 18 L45 4 L55 16 L65 26 L75 10 L85 20 L100 8",
  },
  {
    id: 3,
    name: "Litecoin",
    pair: "ITC / USDT",
    change: "-4.02%",
    price: "9,786 USD",
    positive: false,
    color: "#60A5FA",
    spark:
      "M0 10 L12 24 L22 14 L32 26 L42 8 L52 20 L62 6 L72 22 L82 12 L92 18 L100 4",
  },
  {
    id: 4,
    name: "Cardano",
    pair: "ADA / USDT",
    change: "+0.02%",
    price: "4,786 USD",
    positive: true,
    color: "#34D399",
    spark:
      "M0 22 L8 6 L18 16 L28 4 L38 24 L48 14 L58 8 L68 20 L78 10 L88 26 L100 12",
  },
];

export const metricData = [
  {
    id: 1,
    name: "Bitcoin - BTC",
    price: "$40,291",
    change: "+0.25%",
    positive: true,
    bg: "#F5A623",
  },
  {
    id: 2,
    name: "Ethereum - ETH",
    price: "$18,291",
    change: "+0.25%",
    positive: true,
    bg: "#6154F0",
  },
  {
    id: 3,
    name: "Litecoin - ITL",
    price: "$8,291",
    change: "+0.25%",
    positive: true,
    bg: "#4C6FFF",
  },
  {
    id: 4,
    name: "Cardano - ADA",
    price: "$3,291",
    change: "-2.05%",
    positive: false,
    bg: "#2ECC71",
  },
];
