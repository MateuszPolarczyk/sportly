import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../views/Home/Home";
import { BookingsScreen } from "../views/Home/Bookings";
import { SearchScreen } from "../views/Home/Search";
import { MapScreen } from "../views/Home/Map";
import { SettingsScreen } from "../views/Home/Settings";

import { IconComponentProp } from "../types";
import { Icon } from "../components/atoms/Icon/Icon";
import { theme } from "../config/theme";

const { dark } = theme.colors;

const HomeStack = createBottomTabNavigator();

interface HomeNavigatorProps {
  icon: IconComponentProp;
}

const HomeNavigator = ({ icon }: HomeNavigatorProps) => {
  return (
    <HomeStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "Home":
              icon = focused ? "home" : "home-outline";
              break;
            case "Bookings":
              icon = focused ? "bookmarks" : "bookmarks-outline";
              break;
            case "Search":
              icon = focused ? "search" : "search-outline";
              break;
            case "Map":
              icon = focused ? "map" : "map-outline";
              break;
            case "Settings":
              icon = focused ? "cog" : "cog-outline";
              break;
          }

          return <Icon name={icon} size={size} color={color} />;
        },
        tabBarActiveTintColor: dark,
        tabBarInactiveTintColor: dark,
      })}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Bookings" component={BookingsScreen} />
      <HomeStack.Screen name="Search" component={SearchScreen} />
      <HomeStack.Screen name="Map" component={MapScreen} />
      <HomeStack.Screen name="Settings" component={SettingsScreen} />
    </HomeStack.Navigator>
  );
};

export { HomeNavigator };
