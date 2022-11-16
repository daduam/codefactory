import { Image, StyleSheet, View, ViewProps } from "react-native";
import Colors from "../../constants/Colors";

export const Avatar = ({ style, ...props }: ViewProps) => {
  return (
    <View {...props} style={[styles.container, style]}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/images/default_avatar.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 172,
    height: 172,
    padding: 16,
  },
  imageWrapper: {
    flex: 1,
    backgroundColor: Colors.light.lightGray,
    margin: -4,
    borderRadius: Math.ceil((172 - 12 * 2) / 2),
    borderWidth: 4,
    borderColor: Colors.light.secondary,
    overflow: "hidden",
  },
});
