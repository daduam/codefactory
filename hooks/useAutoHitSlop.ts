import { useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";

import { getHitSlopForSize } from "../utils";

// https://zubko.io/blog/auto-hitslop-hook
export const useAutoHitSlop = () => {
  const [frameSize, setFrameSize] = useState({ x: 0, y: 0 });

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const {
        nativeEvent: { layout },
      } = event;

      if (layout.width !== frameSize.x && layout.height !== frameSize.y) {
        setFrameSize({ x: layout.width, y: layout.height });
      }
    },
    [frameSize]
  );

  return { hitSlop: getHitSlopForSize(frameSize), onLayout };
};
