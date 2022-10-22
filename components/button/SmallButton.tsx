import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

import { ButtonSmallText } from "../text";

type SmallButtonProps = {
  text: string;
  align: "right" | "middle" | "left";
} & PressableProps;

export const SmallButton = ({ text, align, ...props }: SmallButtonProps) => {
  return (
    <Pressable {...props} style={styles[align]}>
      <ButtonSmallText style={styles.text}>{text}</ButtonSmallText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.light.darkGray,
  },
  right: {
    paddingLeft: 16,
  },
  middle: {
    paddingHorizontal: 16,
  },
  left: {
    paddingRight: 16,
  },
});
