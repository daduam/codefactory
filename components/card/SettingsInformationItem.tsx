import {
  Pressable,
  PressableProps,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import colors from "../../constants/Colors";
import {
  NextIcon,
  SettingsEmailIcon,
  SettingsNameIcon,
  SettingsNotificationIcon,
  SettingsPasswordIcon,
} from "../icon";
import { HeadingH5Text, ParagraphMediumText } from "../text";

type SettingsInformationItemProps = {
  label: string;
  value: string;
  icon: "name" | "email" | "password" | "notification";
} & PressableProps;

export const SettingsInformationItem = ({
  label,
  value,
  icon,
  style,
  ...props
}: SettingsInformationItemProps) => {
  let iconComponent = null;

  if (icon === "name") iconComponent = <SettingsNameIcon />;
  else if (icon === "email") iconComponent = <SettingsEmailIcon />;
  else if (icon === "password") iconComponent = <SettingsPasswordIcon />;
  else iconComponent = <SettingsNotificationIcon />;

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.container,
        style as ViewStyle,
        pressed && { backgroundColor: colors.light.lightGray },
      ]}
    >
      <View style={styles.wrapper}>
        <View style={styles.icon}>{iconComponent}</View>

        <View style={styles.body}>
          <HeadingH5Text style={styles.label}>{label}</HeadingH5Text>

          <ParagraphMediumText style={styles.value}>
            {value}
          </ParagraphMediumText>
        </View>
      </View>

      <View style={styles.nextIcon}>
        <NextIcon color={colors.light.gray} />
      </View>
    </Pressable>
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
  wrapper: {
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
  body: {
    marginLeft: 12,
  },
  label: {
    color: colors.light.dark,
  },
  value: {
    color: colors.light.darkGray,
  },
  nextIcon: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
