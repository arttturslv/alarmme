
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Alarm from "../screens/Alarm";
import Stopwatch from "../screens/Stopwatch";
import Timer from "../screens/Timer";
import AlarmOptions from "../screens/AlarmOptions";
import { Text } from "react-native";
const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarIcon: ()=>{null},
                tabBarStyle: {
                    backgroundColor: Colors.Jet,
                    borderTopWidth:0,
                    justifyContent: 'center'
                },
                tabBarLabelStyle: {
                    fontSize: 18,
                    bottom: 12
                }
            }}
        >
            <Tab.Screen name = 'Alarm' component={Alarm} />
            <Tab.Screen name = 'Stopwatch' component={Stopwatch} />
            <Tab.Screen name = 'Timer' component={Timer} />

        </Tab.Navigator>
    )
}