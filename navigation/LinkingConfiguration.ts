/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import {
  AuthStackParamList,
  OnboardingStackParamList,
  RootStackParamList,
} from "../types";

const linking: LinkingOptions<
  RootStackParamList | OnboardingStackParamList | AuthStackParamList
> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Courses: {
            screens: {
              CoursesScreen: "courses",
            },
          },
          Profile: {
            screens: {
              ProfileScreen: "profile",
            },
          },
          Settings: {
            screens: {
              SettingsScreen: "settings",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
      Onboarding: "onboarding",
      Login: "login",
      Signup: "signup",
    },
  },
};

export default linking;
