import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from ".";
import { HomeNavigator } from "./HomeNavigator";

const RootStack = createStackNavigator<RootStackParamList>();

interface RootStackProps {}

const RootStackNavigator = ({}: RootStackProps) => {
  return (
    <RootStack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="HomeTabs" component={HomeNavigator} />
    </RootStack.Navigator>
  );
};

export { RootStackNavigator };
