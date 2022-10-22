import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button, SmallButton } from "../../components/button";
import { OnboardingContent } from "../../components/onboarding";
import Colors from "../../constants/Colors";
import { useCachedResources } from "../../hooks/useCachedResources";

export const OnboardingTwoScreen = () => {
  const { setUserOnboarded } = useCachedResources();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.skipButton}>
        <SmallButton
          text="Skip"
          align="right"
          onPress={() => setUserOnboarded()}
        />
      </View>

      <OnboardingContent
        image={require("../../assets/images/onboarding-2.png")}
        title="Improve your skills"
        text={
          "Quarantine is the perfect time to spend your\nday learning something new, from anywhere!"
        }
        current="right"
      />

      <View style={styles.nextButton}>
        <Button
          text="Let's Start"
          level="primary"
          onPress={() => setUserOnboarded()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: Colors.light.white,
  },
  skipButton: {
    alignItems: "flex-end",
    padding: 16,
  },
  nextButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
