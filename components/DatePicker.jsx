import { useState } from "react";
import { View, Text, Image } from "react-native";
import Colors from "../constants/Colors";
import Switch from "./Switch";
export default function DatePicker() {

    const [datesSelected, setDateSelected] = useState('s t q q s s d');

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12}}>
            <View>
                <Text style={{fontSize: 18, color: Colors.BattleshipGray}}>{datesSelected}</Text>
            </View>
            <View style={{gap: 8, flexDirection: 'row', alignItems: 'center'}}>
                <Image style={{width: 35, height: 35, tintColor: Colors.BattleshipGray }} source={{uri: 'https://pixsector.com/cache/0266455f/ava13c3ac53812cde1b88.png'}}/>
                <Switch></Switch>
            </View>
        </View>
    )
}