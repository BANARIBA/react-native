import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";
import React from "react";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeft = (canGoBack: boolean | undefined) => {
    if (canGoBack) return router.back();
    return navigation.dispatch(DrawerActions.toggleDrawer);
  }

  return (
    <Stack screenOptions={{ 
        headerShown: true, // Oculta el header 
        headerShadowVisible: false, // Oculta la sombra del header
        contentStyle: {
          backgroundColor: 'white', // Cambia el color de fondo
        },
        headerLeft: ({tintColor, canGoBack}) => <Ionicons name={canGoBack ? 'chevron-back-circle-outline' : 'grid-outline'} size={20} className="mr-5" onPress={() => onHeaderLeft(canGoBack)}/>,        
    }}>
      <Stack.Screen name="home/index" options={{ title: "Home Screen" }} />
      <Stack.Screen name="products/index" options={{ title: "Product Screen", animation: 'ios_from_left' }} />
      <Stack.Screen name="profile/index" options={{ title: "Profile Screen" }} />
      <Stack.Screen name="settings/index" options={{ title: "Settings Screen" }} />
    </Stack>
  );
};

export default StackLayout;
