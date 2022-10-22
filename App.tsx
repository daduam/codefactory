import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  CachedResourcesProvider,
  useCachedResources,
} from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const { loading } = useCachedResources();
  const colorScheme = useColorScheme();

  if (loading) {
    return null;
  } else {
    return (
      <CachedResourcesProvider>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </CachedResourcesProvider>
    );
  }
}
