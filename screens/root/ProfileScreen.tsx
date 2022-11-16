import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar } from "../../components/card";
import Colors from "../../constants/Colors";

const ProfileScreen = () => {
  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar style={styles.avatar} />
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
});

export default ProfileScreen;
