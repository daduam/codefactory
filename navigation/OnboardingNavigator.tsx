import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnboardingScreen } from "../screens/onboarding";

import { OnboardingStackParamList } from "../types";

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
