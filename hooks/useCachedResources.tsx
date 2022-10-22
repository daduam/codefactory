import {
  Rubik_400Regular,
  Rubik_500Medium,
  useFonts,
} from "@expo-google-fonts/rubik";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export const useCachedResources = (): CachedResourcesContextData => {
  const context = useContext(CachedResourcesContext);

  if (!context) {
    throw new Error(
      "useCachedResources must be used within a CachedResourcesProvider"
    );
  }

  return context;
};

export const CachedResourcesContext = createContext<CachedResourcesContextData>(
  {} as CachedResourcesContextData
);

type CachedResourcesContextData = {
  loading: boolean;
  onboarded: boolean;
  setUserOnboarded(): Promise<void>;
  removeUserOnboarded(): Promise<void>;
};

export const CachedResourcesProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [onboarded, setOnboarded] = useState(false);
  const [loading, setLoading] = useState(true);
  useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
  });

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
        });

        const _onboarded = await AsyncStorage.getItem("onboarded");
        if (_onboarded !== null) setOnboarded(true);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoading(false);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  const setUserOnboarded = async () => {
    await AsyncStorage.setItem("onboarded", "true");
    setOnboarded(true);
  };

  const removeUserOnboarded = async () => {
    setOnboarded(false);
    await AsyncStorage.removeItem("onboarded");
  };

  return (
    <CachedResourcesContext.Provider
      value={{ loading, onboarded, removeUserOnboarded, setUserOnboarded }}
    >
      {children}
    </CachedResourcesContext.Provider>
  );
};
