import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeStack = createBottomTabNavigator();
import { HomeScreen } from "../views/Home/Home";

interface HomeNavigatorProps {}

const HomeNavigator = ({}: HomeNavigatorProps) => {
  return (
    <HomeStack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export { HomeNavigator };
