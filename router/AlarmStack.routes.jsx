const Stack = createStackNavigator();

import Alarm from "../screens/Alarm";
import Stopwatch from "../screens/Stopwatch";
import Timer from "../screens/Timer";
import AlarmOptions from "../screens/AlarmOptions";
import Settings from "../screens/Settings";
import { createStackNavigator } from "@react-navigation/stack";


import Tabs from './Tabs.routes'

export default function StackRoutes () {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Tabs">
        <Stack.Screen options={{presentation: 'modal'}} name="AlarmOptions" component={AlarmOptions} />
        <Stack.Screen options={{presentation: 'modal'}} name = 'Settings' component={Settings} />
        <Stack.Screen name = 'Tabs' component={Tabs} />
      </Stack.Navigator>
    )
}