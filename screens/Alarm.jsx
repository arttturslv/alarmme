import { StyleSheet, Image, View, ScrollView, Pressable } from 'react-native';
import AlarmItem from '../components/AlarmItem';
import AlarmOption from './AlarmOptions'
import Colors from '../constants/Colors';
import { useState } from 'react';

import Web from '../assets/icons/web.png'
export default function Alarm({ navigation }) {


  /*
    daysWeek - seg, ter, qua, qui, sex, sab, dom
    daysMonth - 24, 02, 03, 12


  */
  const [alarmList, setAlarmList] = useState(
    [
      {
        name: "Corrida",
        active: true,
        time: "15:54:22",
        type: "Persistente",
        music: {
          name: 'Radiohead',
          soundPath: "file:///data/user/0/host.exp.exponent/cache/DocumentPicker/e5552e58-4ae3-4594-99be-31db3dfa961e.mp3",
        },
        vibration: true,
        date: [{
          name: 'domingo',
          active: true
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
        }]
      },
    ]
  )
  
  const [showOptions, setShowOptions] = useState(null);

  function updateAlarm() {
    console.log("updanting alarm")
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Pressable onPress={() => navigation.navigate('Settings')} style={{ position: 'absolute', top: 65, right: 25 }}>
        <Image style={{ width: 25, height: 25, tintColor: '#989898' }} source={require('../assets/icons/setting.png')}></Image>
      </Pressable>

      <View style={styles.alarmItems}>

        <Pressable onPress={() => navigation.navigate('AlarmOptions', {item: null})}>
          <Image style={styles.addButton} source={require('../assets/icons/plus.png')}></Image>
        </Pressable>
          
          {
            alarmList.map((item, index) => {
              return (
                <Pressable key={index} style={{ width: '100%'}}>
                  <AlarmItem item={item} navigation={navigation}></AlarmItem>
                </Pressable>
              )
            })
          }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.EerieBlack,
  },
  alarmItems: {
    gap: 14,
  },
  addButton: {
    display: 'flex',
    alignSelf: 'flex-end',
    width: 26,
    height: 26,
    margin: 10,
    tintColor: '#989898'

  }
});
