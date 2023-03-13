import { createStackNavigator } from "@react-navigation/stack";

import { RootStackParamList } from ".";
import { HomeNavigator } from "./HomeNavigator";
import { DetailScreen } from "../views/Facility/Detail";
import { BookingFormScreen } from "../views/Booking/Form";

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
      <RootStack.Screen name="BookingForm" component={BookingFormScreen} />
    </RootStack.Navigator>
  );
};

export { RootStackNavigator };
