import React from "react";
import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import Colors from "../../constants/Colors";
import { useAutoHitSlop } from "../../hooks/useAutoHitSlop";

import { ButtonSmallText } from "../text";

type SmallButtonProps = {
  text: string;
  align: "right" | "middle" | "left";
} & PressableProps;

export const SmallButton = ({ text, align, ...props }: SmallButtonProps) => {
  const { hitSlop, onLayout } = useAutoHitSlop();

  return (
    <Pressable
      hitSlop={hitSlop}
      onLayout={onLayout}
      {...props}
      style={({ pressed }) => [
        styles[align],
        props.style as ViewStyle,
        { opacity: pressed ? 0.75 : 1 },
      ]}
    >
      <ButtonSmallText style={styles.text}>{text}</ButtonSmallText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.light.darkGray,
  },
  right: {
    alignSelf: "flex-end",
  },
  middle: {
    alignSelf: "center",
  },
  left: {
    alignSelf: "flex-start",
  },
});
