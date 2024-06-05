import Colors from '../constants/Colors'
import Switch from '../components/Switch';
import {Text, View } from 'react-native';

export default function AlarmItem() {
    return (
        <View style={{backgroundColor:Colors.Jet ,flexDirection: 'row', justifyContent: 'space-between', width: '80%', paddingHorizontal: 16, paddingVertical: 24, borderRadius:8}}>
            <View>
                <Text style={{color:'#fff', fontSize: 34, fontWeight:100}}>00:00</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
                <View>
                    <Text style={{color: '#fff'}}>ter - 27/06</Text>
                </View>
            
                <Switch/>
            </View>
        </View>
    )
}