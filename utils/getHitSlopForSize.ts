import { Insets } from "react-native";

const getExtra = (num: number, min = 44) =>
  num >= min ? undefined : (min - num) / 2;

export const getHitSlopForSize = ({
  x,
  y,
}: {
  x: number;
  y: number;
}): Insets => {
  return {
    top: getExtra(y),
    left: getExtra(x),
    bottom: getExtra(y),
    right: getExtra(x),
  };
};
