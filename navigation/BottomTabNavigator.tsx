import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable } from "react-native";

import { HeaderWithBack } from "../components/headers";
import { TabBar } from "../components/tabbar";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { ProfileScreen, SettingsScreen } from "../screens/root";
import TabOneScreen from "../screens/TabOneScreen";
import { RootTabParamList, RootTabScreenProps } from "../types";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBar={(props) => <TabBar {...props} />}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Tab One",
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
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
