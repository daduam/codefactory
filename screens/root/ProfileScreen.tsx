import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

const ProfileScreen = () => {
  return (
    <SafeAreaView edges={["left", "right"]} style={styles.container}>
      <Text>some text</Text>
      <Text>some text</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
});

export default ProfileScreen;
