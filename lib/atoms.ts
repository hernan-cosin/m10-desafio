import { atom } from "recoil";

export const flavorsSelected = atom({
    key: "flavorsSelected", // unique ID (with respect to other atoms/selectors)
    default: [""], // default value (aka initial value)
  });

  export const redirectTo = atom({
    key: "redirectTo", // unique ID (with respect to other atoms/selectors)
    default: {asPath: ""}, // default value (aka initial value)
  });