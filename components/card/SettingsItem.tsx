import { StyleSheet, View, ViewProps } from "react-native";
import Colors from "../../constants/Colors";
import { SettingsNameIcon } from "../icon/SettingsNameIcon";
import { HeadingH5Text } from "../text";

type SettingsItemProps = {
  icon: "name";
  text: string;
} & ViewProps;

export const SettingsItem = ({
  icon,
  text,
  style,
  ...props
}: SettingsItemProps) => {
  let iconComponent = null;

  if (icon === "name") iconComponent = <SettingsNameIcon />;

  return (
    <View {...props} style={[styles.container, style]}>
      <View style={styles.name}>
        <View style={styles.icon}>{iconComponent}</View>

        <HeadingH5Text style={styles.header}>{text}</HeadingH5Text>
      </View>

      <View style={styles.button}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 82,
    borderWidth: 1,
    borderColor: Colors.light.gray,
    borderRadius: 16,
    backgroundColor: Colors.light.white,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    backgroundColor: Colors.light.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: Colors.light.dark,
    marginLeft: 12,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: "orange",
    marginLeft: 8,
  },
});
