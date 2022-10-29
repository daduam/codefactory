import {
  Animated,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewProps,
} from "react-native";
import Colors from "../../constants/Colors";

export type PaginationProps = {
  data: Array<any>;
  scrollX: Animated.Value;
} & ViewProps;

export const Pagination = ({ data, scrollX, ...props }: PaginationProps) => {
  const { width } = useWindowDimensions();

  return (
    <View {...props} style={[props.style, styles.container]}>
      {data.map((_, idx) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [6, 16, 6],
          extrapolate: "clamp",
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ["#D5D4D4", Colors.light.secondary, "#D5D4D4"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, backgroundColor }]}
            key={idx.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  dot: {
    height: 6,
    borderRadius: 4,
    marginHorizontal: 6,
  },
});
