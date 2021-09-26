import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./lib/hooks/useCachedResources";
import useColorScheme from "./lib/hooks/useColorScheme";
import Navigation from "./navigation";
import AppContextProvider from "./lib/contexts/AppContext";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Colors } from "constants/Colors";
import { shadows } from "constants/Shadow";
import { ThemedComponents } from "constants/Components";

export default function App() {
  const theme = extendTheme({
    colors: Colors,
    components: ThemedComponents,
    shadows,
    config: {
      initialColorMode: "dark",
    },
  });

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AppContextProvider>
        <NativeBaseProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </AppContextProvider>
    );
  }
}
