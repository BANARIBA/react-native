import React from "react";
import { Link, useNavigation } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButtom } from "@/components/shared/CustomButtom";
import { router } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const HomeScreen = () => {

  const navigation = useNavigation();

  const onToggleDrawerMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  }

  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButtom
          color="primary"
          classname="mb-10"
          onPress={() => router.push("/products")}
        >
          Products
        </CustomButtom>

        <Link className="mb-5" href={"/profile"} asChild>
          <CustomButtom classname="mb-10"color="primary" variant="text-only">Profile</CustomButtom>
        </Link>


        <CustomButtom classname="mb-10" color="tertiary" onPress={() => router.push("/settings")}>
          Settings
        </CustomButtom>

        <CustomButtom color="primary" onPress={onToggleDrawerMenu}>
          Open Menu
        </CustomButtom>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
