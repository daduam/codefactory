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
import { ColorSchemeName } from "react-native";
import { useAppSelector } from "../hooks/useAppSelector";

import { AuthNavigator } from "./AuthNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import OnboardingNavigator from "./OnboardingNavigator";
import RootNavigator from "./RootNavigator";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  const {
    data: { token },
    isOnboarded,
  } = useAppSelector((state) => state.user);

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      {isOnboarded ? (
        token ? (
          <RootNavigator />
        ) : (
          <AuthNavigator />
        )
      ) : (
        <OnboardingNavigator />
      )}
    </NavigationContainer>
  );
}
