import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, MenuItem } from "../../components/card";
import Colors from "../../constants/Colors";

const ProfileScreen = () => {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar style={styles.avatar} />

        <MenuItem text="Your Courses" onPress={() => {}} style={styles.mt_16} />

        <MenuItem text="Saved" onPress={() => {}} style={styles.mt_16} />

        <MenuItem text="Payment" onPress={() => {}} style={styles.mt_16} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
  },
  profileContainer: {
    marginTop: 32,
    paddingHorizontal: 16,
  },
  avatar: {
    alignSelf: "center",
  },
  mt_16: {
    marginTop: 16,
  },
});

export default ProfileScreen;
