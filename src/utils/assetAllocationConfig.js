export const AlgorithmMenuItems = [
  {
    value: "Static",
    label: "전략배분 (정적자산배분)",
  },
  {
    value: "Dual",
    label: "듀얼모멘텀",
  },
  {
    value: "VAA",
    label: "VAA",
  },
  {
    value: "DAA",
    label: "DAA",
  },
];

export const RebalFrequencyMenuItems = [
  {
    value: "monthly",
    label: "월별",
  },
  {
    value: "quater",
    label: "분기별",
  },
  {
    value: "halfly",
    label: "반기별",
  },
  {
    value: "yearly",
    label: "매년",
  },
  {
    value: "none",
    label: "하지 않음 (Buy-and-Hold)",
  },
];

export const DualOffensiveUniverse = [
  {
    value: "spy",
    label: "SPY",
  },
  {
    value: "efa",
    label: "EFA",
  },
  {
    value: "qqq",
    label: "QQQ",
  },
  {
    value: "kospi",
    label: "KOSPI",
  },
  {
    value: "kosdaq",
    label: "KOSDAQ",
  },
  {
    value: "gld",
    label: "GLD",
  },
  {
    value: "vnq",
    label: "VNQ",
  },
  {
    value: "tlt",
    label: "TLT",
  },
  {
    value: "agg",
    label: "AGG",
  },
  {
    value: "vea",
    label: "VEA",
  },
];

export const DualDefensiveUniverse = [
  {
    value: "agg",
    label: "AGG",
  },
  {
    value: "lqd",
    label: "LQD",
  },
  {
    value: "shy",
    label: "SHY",
  },
  {
    value: "ief",
    label: "IEF",
  },
];

export const StaticAllocOptions = {
  type: "Static",
  assets: [],
  rebalancing: {
    rebalancing_freq: "",
    rebalancing_band: "",
  },
};

export const DualAllocOptions = {
  type: "Dual",
  assets: {
    offensive1: "spy",
    offensive2: "efa",
    defensive: "agg",
  },
  momentum: "12",
};
