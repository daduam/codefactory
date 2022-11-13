import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import Colors from "../../constants/Colors";

import { ButtonMediumText } from "../text";

type ButtonProps = {
  text: string;
  level: "primary" | "secondary";
} & PressableProps;

export const Button = ({ text, level, ...props }: ButtonProps) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.container,
        styles[`${level}Container`],
        props.style as ViewStyle,
        { opacity: pressed ? 0.75 : 1 },
      ]}
    >
      <ButtonMediumText style={styles[`${level}Text`]}>{text}</ButtonMediumText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.light.primary,
    borderRadius: 16,
  },
  primaryContainer: {
    backgroundColor: Colors.light.primary,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  secondaryContainer: {
    backgroundColor: Colors.light.white,
    paddingHorizontal: 30,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: Colors.light.primary,
  },
  primaryText: {
    color: Colors.light.white,
  },
  secondaryText: {
    color: Colors.light.dark,
  },
});
