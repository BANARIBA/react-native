import React from "react";

import { View } from "react-native";

import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { globalStyles } from "@/shared/styles/global.style";
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [loaded] = useFonts({});

  if (!loaded) return null;

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  );
};

export default RootLayout;
