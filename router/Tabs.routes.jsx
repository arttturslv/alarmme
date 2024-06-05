
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Alarm from "../screens/Alarm";
import Stopwatch from "../screens/Stopwatch";
import Timer from "../screens/Timer";
import AlarmOptions from "../screens/AlarmOptions";

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name = 'Alarm' component={Alarm} />
            <Tab.Screen name = 'Stopwatch' component={Stopwatch} />
            <Tab.Screen name = 'Timer' component={Timer} />

            <Tab.Screen name = 'AlarmOptions' component={AlarmOptions} />

        </Tab.Navigator>
    )
}