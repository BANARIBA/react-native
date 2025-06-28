import { CustomDrawer } from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer
    drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0, 0, 0, 0.7)", // This is the color of the overlay when the drawer is open
        drawerActiveTintColor: "indigo", // This is the color of the text when the drawer is open
        headerShadowVisible: false,
        headerShown: false,
        sceneStyle: {
          backgroundColor: "white",
        }
      }}
    >
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "User",
          drawerIcon: ({color, size}) => <Ionicons name="person" size={size} color={color} />
        }}
      />

      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Tabs + Stack",
          title: "Tabs + Stack",
          drawerIcon: ({color, size}) => <Ionicons name="albums-outline" size={size} color={color} />
        }}
      />

      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Schedule",
          title: "Schedules",
          drawerIcon: ({color, size}) => <Ionicons name="calendar-outline" size={size} color={color} />
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
