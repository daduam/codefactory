import { StyleSheet, View, ViewProps } from "react-native";
import { Switch } from "react-native-switch";
import colors from "../../constants/Colors";
import {
  SettingsEmailIcon,
  SettingsNotificationIcon,
  SettingsPasswordIcon,
} from "../icon";
import { SettingsNameIcon } from "../icon/SettingsNameIcon";
import { HeadingH5Text } from "../text";

type SettingsItemProps = {
  icon: "name" | "email" | "password" | "notification";
  text: string;
  toggleValue: boolean;
  onToggleValueChange: (value: boolean) => undefined;
} & ViewProps;

export const SettingsItem = ({
  icon,
  text,
  toggleValue,
  onToggleValueChange,
  style,
  ...props
}: SettingsItemProps) => {
  let iconComponent = null;

  if (icon === "name") iconComponent = <SettingsNameIcon />;
  else if (icon === "email") iconComponent = <SettingsEmailIcon />;
  else if (icon === "password") iconComponent = <SettingsPasswordIcon />;
  else iconComponent = <SettingsNotificationIcon />;

  return (
    <View {...props} style={[styles.container, style]}>
      <View style={styles.name}>
        <View style={styles.icon}>{iconComponent}</View>

        <HeadingH5Text style={styles.header}>{text}</HeadingH5Text>
      </View>

      <View style={styles.button}>
        <Switch
          value={toggleValue}
          onValueChange={onToggleValueChange}
          backgroundActive={colors.light.success}
          backgroundInactive={colors.light.gray}
          barHeight={8}
          circleActiveColor={colors.light.success}
          circleBorderActiveColor={colors.light.lightGray}
          circleBorderInactiveColor={colors.light.lightGray}
          circleBorderWidth={4}
          circleInActiveColor={colors.light.gray}
          circleSize={20}
          renderActiveText={false}
          renderInActiveText={false}
          switchWidthMultiplier={1.6}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 82,
    borderWidth: 1,
    borderColor: colors.light.gray,
    borderRadius: 16,
    backgroundColor: colors.light.white,
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
    backgroundColor: colors.light.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    color: colors.light.dark,
    marginLeft: 12,
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
});
