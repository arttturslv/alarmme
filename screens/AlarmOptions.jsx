import { View, StyleSheet, Text, TextInput, Image, Pressable, ScrollView } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Colors from "../constants/Colors";
import TimePicker from "../components/TimePicker";
import { useState } from "react";
import Switch from "../components/Switch";
import Calendary from '../components/Calendary'
import * as DocumentPicker from 'expo-document-picker';
import { Audio } from 'expo-av';

export default function AlarmOptions({navigation, route}) {

    const {item} = route.params;

    const [name, setName] = useState(item?.name || "Nome do alarme");
    const [isActive, setIsActive] = useState(item?.active || true);
    const [time, setTime] = useState(formataData(item?.time) || {s: 0, m: 0, h: 0});
    const [type, setType] = useState(item?.type || "Normal");
    const [music, setMusic] = useState(
        item?.music ? { name: item.music.name, soundPath: item.music.soundPath } : { name: "Night Detective", soundPath: "../assets/music/Night Detective - Amaksi.mp3" }
      );
    const [isVibration, setIsVibration] = useState(item?.name || true);
    const [date, setDate] = useState(item?.date);
    
    function formataData(itemDate) {
        //15:54:22
        if(itemDate==null)
            return null;
        let splittedTime = itemDate.split(':');
        return {s:parseInt(splittedTime[2]), m:parseInt(splittedTime[1]), h:parseInt(splittedTime[0])}
    }

    const [selected, setSelected] = useState('Normal');
    const [audioName, setAudioName] = useState('Musica padrão');
    const [audioFile, setAudioFile] = useState(null);

    const data = [
        {key:'1', value: 'Normal'},
        {key:'2', value: 'Persistente'}
    ];

    async function getAudioFile() {
        try {
            const audioSeleted = await DocumentPicker.getDocumentAsync({
                type: 'audio/*',
            });
            
            if(!audioSeleted.canceled) {
                console.log(audioSeleted.assets[0].uri)
                setAudioName(audioSeleted.assets[0].name);
                setAudioFile(audioSeleted.assets[0].uri);

                const { sound } = await Audio.Sound.createAsync({ uri: audioSeleted.assets[0].uri });
                // Toca o áudio

            } else {
                throw new Error('Pesquisa cancelada.')
            }
    
        } catch (error) {
            console.log('Error: ', error)
        }
    }


    return (
        <View style={{backgroundColor: Colors.Jet , flex: 1, padding: 30, gap: 12}}>

        <View style={{flex: 1, justifyContent: 'center'}}>
            <TimePicker setTime={setTime}></TimePicker>
        </View>


            <View 
                style={{
                    borderColor: Colors.Gunmetal, borderWidth:2, height: 50, borderRadius:8, alignContent: 'center'
                }}
            >
                <TextInput
                   placeholder={item?.name || "Nome do alarme"} 
                   placeholderTextColor={Colors.BattleshipGray}
                   style={{fontSize:24, fontWeight: '300', paddingHorizontal: 14,paddingTop:6, textAlign: 'center', color:'#fff'}}
                 ></TextInput>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12, gap: 16}}>
                <Calendary date={date} setDate={setDate}/>
            </View>

            <View>
                <Text
                style={styles.subtitle}
                >Tipo</Text>
                <SelectList 
                data={data} 
                setSelected={setType} 
                defaultOption={{key:1, value: type}}
                boxStyles={{borderColor: Colors.Gunmetal, color: Colors.BattleshipGray, borderWidth:2,borderRadius:8}}
                inputStyles={{fontSize:22, color: Colors.BattleshipGray, fontWeight: '300' }}
                dropdownTextStyles={{fontSize:22, color: Colors.BattleshipGray, fontWeight: '300'}}
                dropdownStyles={{color: Colors.BattleshipGray, borderColor: Colors.Gunmetal, borderWidth:2}}
                search={false}
                arrowicon={<Image style={[styles.icon, {rotation: 60}]} source={require('../assets/icons/chevron.png')} />}
                closeicon={<Image style={styles.icon} source={require('../assets/icons/chevron.png')} />}
                />
            </View>

            <Pressable onPress={()=> getAudioFile()}>
                <Text
                    style={styles.subtitle}
                    >Som</Text>

                <View style={{
                    flexDirection: 'row', justifyContent:'space-between', paddingHorizontal:8, alignItems: 'center' , borderColor: Colors.Gunmetal, borderWidth:2, height: 50, borderRadius:8, alignContent: 'center'
                }}>
                <Text style={styles.placeholder}
                >{item?.music.name  || audioName}</Text>
                    <Image style={styles.icon} source={require('../assets/icons/folder.png')} />    
                </View>

            </Pressable>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                <Text style={styles.subtitle}>Vibração</Text>
                <Switch/>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around', alignItems: 'center', flex: 0.2}}>
                <Pressable onPress={()=> navigation.goBack()} style={{flexDirection:'row'}}>
                    <Image style={styles.icon} source={require('../assets/icons/back.png')} />    
                    <Text style={[styles.subtitle, {fontSize:18}]}>Voltar</Text>
                </Pressable>
                <Pressable style={{flexDirection:'row'}}>
                    <Text style={[styles.subtitle, {fontSize:18}]}>Salvar</Text>
                    <Image style={styles.icon} source={require('../assets/icons/saved.png')} />    
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    icon: {
        width:24, 
        height:24, 
        tintColor: Colors.BattleshipGray,
        tintColor: '#989898',
        transform: [{rotateX: '90deg'}, {rotateZ: '0.48rad'}]
    },
    subtitle: {
        fontSize:20,
        paddingBottom:4, 
        fontWeight: '200', 
        paddingHorizontal: 14, 
        color:'#fff'
    },
    placeholder: {
        fontSize:20,
        fontWeight: '300',
        paddingHorizontal: 14,
        color:Colors.BattleshipGray,
        overflow: 'hidden',
    }
})