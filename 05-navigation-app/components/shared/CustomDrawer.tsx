import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

export const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView 
        scrollEnabled={true}
        {...props}
    >
      <View className="flex justify-center mx-3 items-center mb-10 p-10 rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24 ">
          <Text className="text-primary font-work-black">GokuPerez</Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
