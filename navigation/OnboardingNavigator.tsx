import { createStackNavigator, TransitionSpecs } from "@react-navigation/stack";

import {
  OnboardingOneScreen,
  OnboardingTwoScreen,
  OnboardingZeroScreen,
} from "../screens/onboarding";
import { OnboardingStackParamList } from "../types";

const Stack = createStackNavigator<OnboardingStackParamList>();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="OnboardingZero" component={OnboardingZeroScreen} />
      <Stack.Screen name="OnboardingOne" component={OnboardingOneScreen} />
      <Stack.Screen name="OnboardingTwo" component={OnboardingTwoScreen} />
    </Stack.Navigator>
  );
}
