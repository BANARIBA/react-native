import { globalStyles } from "@/shared/styles/global-styles";
import { useFonts } from "expo-font";
import { NavigationBar } from "expo-navigation-bar";
import { Slot } from "expo-router";
import { Platform, StatusBar, View } from "react-native";

const isAdroid = Platform.OS === "android";

const RootLayout = () => {
  const [loaded] = useFonts({
    PoppinsLight: require("../shared/fonts/Poppins-Light.ttf"),
    PoppinsBlack: require("../shared/fonts/Poppins-Black.ttf"),
    PoppinsBold: require("../shared/fonts/Poppins-Bold.ttf"),
    PoppinsItalic: require("../shared/fonts/Poppins-Italic.ttf"),
  });

  if (!loaded) return null;

  return (
    <View style={globalStyles.background}>
      {/* <NavigationBar style="dark" /> */}
      <Slot />
      {isAdroid && <NavigationBar style="light" />}
      <StatusBar barStyle={"light-content"} />
    </View>
  );
};

export default RootLayout;
