import { atom } from "recoil";
import { dateStringConverter } from "../utils/formatDate";
import { StaticAllocOptions, DualAllocOptions, VaaAllocOptions } from "../utils/assetAllocationConfig";

export const strategyNameState = atom({
  key: "strategyNameState",
  default: "",
});

export const selectedAlgorithmState = atom({
  key: "selectedAlgorithmState",
  default: "Static",
});

export const dateRangeBeginState = atom({
  key: "dateRangeBeginState",
  default: "2003-01-01",
});

export const dateRangeEndState = atom({
  key: "dateRangeEndState",
  default: dateStringConverter(new Date()),
});

export const staticAllocOptionState = atom({
  key: "staticAllocOptionState",
  default: StaticAllocOptions,
});

export const dualAllocOptionState = atom({
  key: "dualAllocOptionState",
  default: DualAllocOptions,
});

export const vaaAllocOptionState = atom({
  key: "vaaAllocOptionState",
  default: VaaAllocOptions,
});