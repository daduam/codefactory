import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../../constants/Colors";
import { useAppSelector } from "../../hooks/useAppSelector";
import { NotificationButton } from "../button";
import { HeadingH3Text, ParagraphLargeText } from "../text";

export const HomePageHeader = ({}: BottomTabHeaderProps) => {
  const user = useAppSelector((state) => state.user);

  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      <View>
        <ParagraphLargeText style={styles.helloText}>Hello,</ParagraphLargeText>

        <HeadingH3Text style={styles.nameText}>{user.data.name}</HeadingH3Text>
      </View>

      <NotificationButton style={styles.notificationButton} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.light.white,
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  helloText: {
    color: colors.light.dark,
  },
  nameText: {
    color: "#333333",
    marginTop: 4,
  },
  notificationButton: {
    marginLeft: 24,
    marginVertical: 12,
  },
});
