import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from ".";
import { HomeNavigator } from "./HomeNavigator";
import { DetailScreen } from "../views/Facility/Detail";

const RootStack = createStackNavigator<RootStackParamList>();

interface RootStackProps {}

const RootStackNavigator = ({}: RootStackProps) => {
  return (
    <RootStack.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="HomeTabs" component={HomeNavigator} />
      <RootStack.Screen name="FacilityDetail" component={DetailScreen} />
    </RootStack.Navigator>
  );
};

export { RootStackNavigator };
