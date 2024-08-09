import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Switch from "./Switch";
import Calendary from "../components/Calendary";

export default function DatePicker() {

    const [datesSelected, setDateSelected] = useState( [{
        name: 'domingo',
        active: false
      },
      {
        name: 'segunda',
        active: false
      },
      {
        name: 'terça',
        active: false
      },
      {
        name: 'quarta',
        active: false
      },
      {
        name: 'quinta',
        active: false
      },
      {
        name: 'sexta',
        active: false
      },
      {
        name: 'sábado',
        active: false
      }]);

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, gap: 16}}>
            <Calendary datesSelected={datesSelected} setDateSelected={setDateSelected}/>
        </View>
    )
}


const styles = StyleSheet.create({
    icon: {
        width:24, 
        height:24, 
        tintColor: Colors.BattleshipGray,
        tintColor: '#989898'
    }
})