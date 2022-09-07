import { atom } from "recoil";

export const flavorsSelected = atom({
    key: "flavorsSelected", // unique ID (with respect to other atoms/selectors)
    default: [""], // default value (aka initial value)
  });