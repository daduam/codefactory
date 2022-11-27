import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import colors from "../../constants/Colors";
import { NotificationIcon } from "../icon";

export const NotificationButton = (props: PressableProps) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.container,
        props.style as ViewStyle,
        pressed && { backgroundColor: colors.light.lightGray },
      ]}
    >
      <NotificationIcon />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.light.gray,
    borderRadius: 24,
  },
});
