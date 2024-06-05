import { FlatList, View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import {dataHour, dataMinute} from '../constants/Time';
import Colors from '../constants/Colors';

export default function TimePicker() {

    const Hours= dataHour; // vai ser preenchido de 00 ate 23
    const Minutes= dataMinute; // vai ser preenchido de 00 ate 59
    const [viewableHour, setViewbleHour] = useState('');
    const [viewableMinutes, setViewbleMinutes] = useState('');

    return (
        <View style={styles.container}>

            <View style={styles.time}>
                <FlatList
                    data={Hours}
                    windowSize={3}
                    scrollEnabled={true}
                    snapToInterval={1}
                    horizontal={false}
                    style={{height:250, width:'auto'}}
                    onViewableItemsChanged={({viewableItems, changed}) => {
                        let h = viewableItems[2]?.item?.value;
                        setViewbleHour(h?h:'');
                    }}
                    renderItem={({item}) => (
                        <Pressable onPress={()=> setViewbleHour(item.value)}>
                            <Text style={[styles.hour, viewableHour==item?.value?{color: '#fff'}:{}]}>{item.value}</Text>
                        </Pressable>
                    )}
                />
                <Text style={styles.hour}>:</Text>
                <FlatList
                    w
                    data={Minutes}
                    windowSize={3}
                    scrollEnabled={true}
                    snapToInterval={1}
                    horizontal={false}
                    style={{height:250}}
                    onViewableItemsChanged={({viewableItems, changed}) => {
                        let min = viewableItems[2]?.item?.value;
                        setViewbleMinutes(min?min:'');
                    }}
                    renderItem={({item}) => (
                        <Pressable onPress={()=> setViewbleMinutes(item.value)}>
                            <Text style={[styles.hour, viewableMinutes==item?.value?{color: '#fff'}:{}]}>{item.value}</Text>
                        </Pressable>
                    )}
                />
            </View>

            <Text style={{color: Colors.BattleshipGray}}>{viewableHour}:{viewableMinutes}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    time: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 8
    },
    hour: {
        color: Colors.DavysGray,
        fontSize: 62,
        fontWeight: '300',
        textAlign: 'center'
    },
})