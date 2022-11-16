import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import Colors from "../../constants/Colors";
import { HeadingH4Text } from "../text";

type MenuItemProps = {
  text: string;
} & PressableProps;

export const MenuItem = ({ text, style, ...props }: MenuItemProps) => {
  return (
    <Pressable {...props} style={[styles.container, style as ViewStyle]}>
      <HeadingH4Text style={styles.text}>{text}</HeadingH4Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.white,
    borderWidth: 1,
    borderColor: Colors.light.gray,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  text: {
    color: Colors.light.dark,
    alignSelf: "center",
  },
});
