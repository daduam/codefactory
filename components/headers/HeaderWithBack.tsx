import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

import { PreviousButton } from "../button";
import { HeadingH4Text } from "../text";

export const HeaderWithBack = ({
  navigation,
  options,
  route,
}: BottomTabHeaderProps) => {
  const showBackButton = navigation.canGoBack();

  return (
    <SafeAreaView
      edges={["top", "left", "right"]}
      style={[styles.container, { paddingLeft: showBackButton ? 16 : 56 }]}
    >
      {showBackButton && (
        <PreviousButton
          onPress={() => navigation.goBack()}
          style={styles.previousButton}
        />
      )}

      <View style={styles.titleWrapper}>
        <HeadingH4Text style={styles.titleText}>
          {options.title || route.name}
        </HeadingH4Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 56,
    backgroundColor: Colors.light.white,
  },
  previousButton: {
    width: 40,
    height: 40,
  },
  titleWrapper: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 4,
  },
  titleText: {
    color: Colors.light.dark,
  },
});
