import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SmallButton } from "../../components/button";
import { Avatar, MenuItem } from "../../components/card";
import Colors from "../../constants/Colors";
import { logout } from "../../features/user/user-slice";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export const ProfileScreen = () => {
  const dispatch = useAppDispatch();

  const handleUserLogout = () => dispatch(logout());

  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={styles.container}>
      <View style={styles.profileContainer}>
        <Avatar style={styles.avatar} />

        <MenuItem text="Your Courses" onPress={() => {}} style={styles.mt_16} />

        <MenuItem text="Saved" onPress={() => {}} style={styles.mt_16} />

        <MenuItem text="Payment" onPress={() => {}} style={styles.mt_16} />

        <SmallButton
          text="Log out"
          align="middle"
          onPress={handleUserLogout}
          style={styles.mt_16}
        />
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
