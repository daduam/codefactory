import { StyleSheet, View, ViewProps } from "react-native";
import Colors from "../../constants/Colors";

export type PaginationProps = {
  current: "left" | "middle" | "right";
} & ViewProps;

export const Pagination = ({ current, ...props }: PaginationProps) => {
  return (
    <View {...props} style={[props.style, styles.container]}>
      <View style={[styles.inactive, current === "left" && styles.current]} />
      <View style={[styles.inactive, current === "middle" && styles.current]} />
      <View style={[styles.inactive, current === "right" && styles.current]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 52,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inactive: {
    width: 6,
    height: 6,
    backgroundColor: "#D5D4D4",
    borderRadius: 9999,
  },
  current: {
    width: 16,
    backgroundColor: Colors.light.secondary,
    borderRadius: 4,
  },
});
