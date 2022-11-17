import { Image, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsItem } from "../../components/card";
import Colors from "../../constants/Colors";

export const SettingsScreen = () => {
  return (
    <SafeAreaView edges={["left", "right"]} style={styles.container}>
      <ScrollView style={styles.settings}>
        <Image
          source={require("../../assets/images/settings.png")}
          resizeMode="contain"
        />

        <SettingsItem text="Notifications" icon="name" style={styles.mt_16} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
  },
  settings: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  mt_16: {
    marginTop: 16,
  },
});
