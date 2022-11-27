import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { HeaderWithBack } from "../components/headers";
import { TabBar } from "../components/tabbar";
import useColorScheme from "../hooks/useColorScheme";
import { CoursesScreen, ProfileScreen, SettingsScreen } from "../screens/root";
import { RootTabParamList } from "../types";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Courses"
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="Courses"
        component={CoursesScreen}
        options={{
          header: (props) => <HeaderWithBack {...props} />,
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: (props) => <HeaderWithBack {...props} />,
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          header: (props) => <HeaderWithBack {...props} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
