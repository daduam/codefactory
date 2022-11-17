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
          TabOne: {
            screens: {
              TabOneScreen: "one",
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: "two",
            },
          },
          Profile: {
            screens: {
              ProfileScreen: "profile",
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
