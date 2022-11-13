import React from "react";
import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";

import Colors from "../../constants/Colors";
import { ChevronLeftIcon } from "../icon";

export const PreviousButton = ({ ...props }: PressableProps) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) =>
        [
          styles.container,
          props.style,
          { opacity: pressed ? 0.75 : 1 },
        ] as ViewStyle[]
      }
    >
      <ChevronLeftIcon />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderColor: Colors.light.gray,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
