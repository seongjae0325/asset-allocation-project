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

export const StaticAllocOptions = {
  type: "Static",
  assets: [],
  rebalancing: {
    rebalancing_freq: "",
    rebalancing_band: "",
  },
};
