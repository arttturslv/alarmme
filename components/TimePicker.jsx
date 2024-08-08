import { FlatList, View, StyleSheet, Text, Pressable } from "react-native";
import { useEffect, useState } from "react";
import {dataHour, dataMinute} from '../constants/Time';
import Colors from '../constants/Colors';

export default function TimePicker({setTime}) {

    const Hours= dataHour; // vai ser preenchido de 00 ate 23
    const Minutes= dataMinute; // vai ser preenchido de 00 ate 59
    const Seconds= dataMinute; // vai ser preenchido de 00 ate 59
    const [viewableHour, setViewbleHour] = useState('');
    const [viewableMinutes, setViewbleMinutes] = useState('');
    const [viewableSeconds, setViewbleSeconds] = useState('');

    useEffect(() => {
        setTime({s: viewableSeconds, m: viewableMinutes, h: viewableHour })
    },[viewableHour, viewableSeconds, viewableMinutes])

    return (
        <View style={styles.container}>

            <View style={styles.time}>
                <View>
                    <FlatList
                        data={Hours}
                        windowSize={3}
                        scrollEnabled={true}
                        snapToInterval={1}
                        horizontal={false}
                        style={{height:250}}
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
                </View>
                <Text style={[styles.hour, {width:'auto'}]}>:</Text>
                <View>
                    <FlatList
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
                <Text style={[styles.hour, {width:'auto'}]}>:</Text>
                <View>
                    <FlatList
                        data={Seconds}
                        windowSize={3}
                        scrollEnabled={true}
                        snapToInterval={1}
                        horizontal={false}
                        style={{height:250}}
                        onViewableItemsChanged={({viewableItems, changed}) => {
                            let sec = viewableItems[2]?.item?.value;
                            setViewbleSeconds(sec?sec:'');
                        }}
                        renderItem={({item}) => (
                            <Pressable onPress={()=> setViewbleSeconds(item.value)}>
                                <Text style={[styles.hour, viewableSeconds==item?.value?{color: '#fff'}:{}]}>{item.value}</Text>
                            </Pressable>
                        )}
                    />
                </View>
            </View>

            <Text style={{color: Colors.BattleshipGray}}>{viewableHour}:{viewableMinutes}:{viewableSeconds}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        height: 320
    },
    time: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    hour: {
        color: Colors.DavysGray,
        fontSize: 56,
        fontWeight: '300',
        textAlign: 'center',
        width:86
    },
})