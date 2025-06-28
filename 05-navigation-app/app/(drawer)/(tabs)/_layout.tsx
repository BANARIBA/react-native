import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo", // Active tab color
        tabBarShowLabel: true, // Show tab labels
        // headerShown: false, // Hide header
        // tabBarStyle: {
        //   backgroundColor: "black", // Tab bar background color
        // },
        // tabBarActiveBackgroundColor: "red", // Active tab background color
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="person-outline" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="star-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
