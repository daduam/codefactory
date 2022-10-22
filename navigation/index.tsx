/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { useCachedResources } from "../hooks/useCachedResources";

import LinkingConfiguration from "./LinkingConfiguration";
import OnboardingNavigator from "./OnboardingNavigator";
import RootNavigator from "./RootNavigator";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const { onboarded } = useCachedResources();

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {onboarded ? <RootNavigator /> : <OnboardingNavigator />}
    </NavigationContainer>
  );
}
