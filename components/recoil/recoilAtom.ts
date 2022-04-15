import { atom, selector } from "recoil";
export type IceCreamObject = {
  name: string;
  location: string;
  flavours: string;
};

export const iceCreamAtom = atom<IceCreamObject>({
  key: "iceCream-atoms",
  default: { name: "", location: "", flavours: "" },
});

export const icreamObjectState = selector({
  key: "length-State", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const iceCreamData = get(iceCreamAtom);
    return iceCreamData;
  },
});

export const getIceCreamAtom = atom<IceCreamObject[]>({
  key: "iceCreams",
  default: [],
});

export const icreamsData = selector({
  key: "iceCreamsArray", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const iceCreamData = get(getIceCreamAtom);
    return iceCreamData;
  },
});
