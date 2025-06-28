import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Slot, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";

import "./global.css";
import { useEffect } from "react";

// Es como un loading evia que se quite hasta que se cargan las fuentes
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    // Quita como el loading si las fuentes estan cargadas
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && error) return null;

  // return <Slot />;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
};

export default RootLayout;
