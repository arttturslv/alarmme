import Colors from '../constants/Colors'
import Switch from '../components/Switch';
import {Text, View, Pressable } from 'react-native';
import { useState } from 'react';

export default function AlarmItem({navigation, item}) {

    const [name, setName] = useState(item.name);
    const [active, setActive] = useState(item.active);
    const [time, setTime] = useState(item.time);
    const [type, setType] = useState(item.type);
    const [soundPath, setSoundPath] = useState(item.soundPath);
    const [vibration, setVibration] = useState(item.vibration);
    const [date, setDate] = useState(item.date);

    return (
        <Pressable onPress={() => navigation.navigate('AlarmOptions', {item: item})} 
        style={{width: '90%'}}>
            <View style={{backgroundColor:Colors.Jet ,flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 16, paddingVertical: 24, borderRadius:8}}>
                <View>
                    <Text style={{color:'#fff', fontSize: 34, fontWeight:100}}>{time}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                    <View>
                        {
                            date.map(item=> {
                                return (
                                    item.active&&
                                    <Text style={{color: '#fff'}}>{item.name.substring(0,3)}</Text>
                                )
                            })
                        }
                    </View>
                    <Switch status={item.active}/>
                </View>
            </View>
        </Pressable>

    )
}