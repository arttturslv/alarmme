
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text } from "react-native";

import Alarm from "../screens/Alarm";
import Stopwatch from "../screens/Stopwatch";
import Timer from "../screens/Timer";

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
        tabBarPosition="bottom" 
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarItemStyle: {
                    backgroundColor: Colors.Jet,
                },
                tabBarIcon: ()=>{null},
                tabBarLabel:({focused}) => {
                    const label = route.name;
                    return (   
                        <Text style={{fontSize: 18, bottom: 12, color: Colors.FloralWhite, textDecorationLine: focused ? 'underline' : 'none' }}>
                            {label}
                        </Text>
                    )
                }
            })}
        >
            <Tab.Screen name = 'Alarm' component={Alarm} />
            <Tab.Screen name = 'Stopwatch' component={Stopwatch} />
            <Tab.Screen name = 'Timer' component={Timer} />

        </Tab.Navigator>
    )
}