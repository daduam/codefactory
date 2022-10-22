/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { OnboardingStackParamList, RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList | OnboardingStackParamList> = {
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
        },
      },
      Modal: "modal",
      NotFound: "*",
      OnboardingZero: "onboarding/0",
      OnboardingOne: "onboarding/1",
      OnboardingTwo: "onboarding/2",
    },
  },
};

export default linking;
