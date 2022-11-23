import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsInformationItem, SettingsItem } from "../../components/card";
import { HeadingH5Text } from "../../components/text";
import colors from "../../constants/Colors";
import { setHasNotifications } from "../../features/user/user-slice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

export const SettingsScreen = () => {
  const {
    data: { name, email, hasNotifications },
  } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const noop = () => {};

  const setShowNotifications = (value: boolean) =>
    dispatch(setHasNotifications(value));

  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={styles.container}>
      <ScrollView style={styles.settings}>
        <Image
          source={require("../../assets/images/settings.png")}
          resizeMode="contain"
        />

        <SettingsItem
          text="Notifications"
          icon="notification"
          style={styles.mt_16}
          toggleValue={hasNotifications ?? false}
          onToggleValueChange={setShowNotifications as any}
        />

        <View style={styles.accountInfo}>
          <HeadingH5Text style={styles.accountInfoTitle}>
            Account information
          </HeadingH5Text>

          <SettingsInformationItem
            label="Name"
            value={name || "add your name"}
            icon="name"
            onPress={noop}
            style={styles.mt_16}
          />

          <SettingsInformationItem
            label="Email"
            value={email || "add your email"}
            icon="email"
            onPress={noop}
            style={styles.mt_16}
          />

          <SettingsInformationItem
            label="Password"
            value="changed 2 weeks ago"
            icon="password"
            onPress={noop}
            style={styles.mt_16}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.white,
  },
  settings: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  mt_16: {
    marginTop: 16,
  },
  accountInfo: {
    marginTop: 16,
    marginBottom: 64,
  },
  accountInfoTitle: {
    color: colors.light.dark,
  },
});
