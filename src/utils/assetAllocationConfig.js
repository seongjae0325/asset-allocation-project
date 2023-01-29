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

export const DualVaaOffensiveUniverse = [
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

export const DaaOffensiveUniverse = [
  {
    value: "spy",
    label: "SPY",
  },
  {
    value: "iwm",
    label: "IWM",
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
    value: "vea",
    label: "VEA",
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
    value: "lqd",
    label: "LQD",
  },
  {
    value: "vgk",
    label: "VGK",
  },
  {
    value: "vnq",
    label: "VNQ",
  },
  {
    value: "ewj",
    label: "EWJ",
  },
  {
    value: "vwo",
    label: "VWO",
  },
  {
    value: "gsg",
    label: "GSG",
  },
  {
    value: "hyg",
    label: "HYG",
  },
];

export const DaaCanaryUniverse = [
  ...DaaOffensiveUniverse,
  {
    value: "shy",
    label: "SHY",
  },
  {
    value: "ief",
    label: "IEF",
  },
  {
    value: "ust",
    label: "UST",
  },
  {
    value: "bnd",
    label: "BND",
  },
];

export const DefensiveUniverse = [
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

export const VaaAllocOptions = {
  type: "VAA",
  assets: {
    offensive1: "spy",
    offensive2: "efa",
    offensive3: "agg",
    offensive4: "vea",
    defensive1: "lqd",
    defensive2: "shy",
    defensive3: "ief",
  },
};

export const DaaAllocOptions = {
  type: "DAA",
  assets: {
    offensive1: "spy",
    offensive2: "iwm",
    offensive3: "qqq",
    offensive4: "vgk",
    offensive5: "ewj",
    offensive6: "vwo",
    offensive7: "vnq",
    offensive8: "gsg",
    offensive9: "gld",
    offensive10: "tlt",
    offensive11: "hyg",
    offensive12: "lqd",
    defensive1: "shy",
    defensive2: "ief",
    defensive3: "lqd",
    canary1: "vwo",
    canary2: "bnd",
  },
};
