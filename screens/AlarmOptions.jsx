import { View, StyleSheet, Text, TextInput, Image, Pressable } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Colors from "../constants/Colors";
import TimePicker from "../components/TimePicker";
import DatePicker from "../components/DatePicker";
import { useState } from "react";
import Switch from "../components/Switch";
import * as DocumentPicker from 'expo-document-picker';
import { Audio } from 'expo-av';


export default function AlarmOptions() {

    const [selected, setSelected] = useState('');
    
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
                await sound.playAsync();

            } else {
                throw new Error('Pesquisa cancelada.')
            }
    
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    return (
        <View style={{backgroundColor: Colors.Jet , flex: 1, padding: 30, gap: 12}}>

            <TimePicker></TimePicker>

            <View 
                style={{
                    borderColor: Colors.Gunmetal, borderWidth:2, height: 50, borderRadius:8, alignContent: 'center'
                }}
            >
                <TextInput
                   placeholder="Nome do alarme" 
                   placeholderTextColor={Colors.BattleshipGray}
                   style={{fontSize:24, fontWeight: '300', paddingHorizontal: 14,paddingTop:6, textAlign: 'center', color:'#fff'}}
                 ></TextInput>
            </View>

            <DatePicker/>

            <View>
                <Text
                style={styles.subtitle}
                >Tipo</Text>
                <SelectList 
                data={data} 
                setSelected={setSelected} 
                defaultOption={{key:1, value: 'Normal'}}
                boxStyles={{borderColor: Colors.Gunmetal, color: Colors.BattleshipGray, borderWidth:2,borderRadius:8}}
                inputStyles={{fontSize:22, color: Colors.BattleshipGray, }}
                dropdownTextStyles={{fontSize:22, color: Colors.BattleshipGray}}
                dropdownStyles={{color: Colors.BattleshipGray, borderColor: Colors.Gunmetal, borderWidth:2}}
                search={false}
                arrowicon={<Text style={{fontSize:24, color: Colors.BattleshipGray}}>✏</Text>}
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
                >{audioName.length>27?audioName.substring(0,27)+"...":audioName}</Text>
                <Image style={styles.icon} source={{uri:'https://cdn4.iconfinder.com/data/icons/basic-flat-ui-extra-set-200-item/76/ui_ux_minimalist_button_upload_file_data-512.png'}} />

                </View>

            </Pressable>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between'}}>
                <Text style={styles.subtitle}>Vibração</Text>
                <Switch/>
            </View>

            <View style={{flexDirection:'row', justifyContent:'space-around', bottom: 0}}>
                <Pressable style={{flexDirection:'row'}}>
                    <Text style={[styles.subtitle, {fontSize:18}]}>Voltar</Text>
                    <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.freepik.com/256/84/84339.png?semt=ais_hybrid'}} />    
                </Pressable>
                <Pressable style={{flexDirection:'row'}}>
                    <Text style={[styles.subtitle, {fontSize:18}]}>Salvar</Text>
                    <Image style={styles.icon} source={{uri: 'https://static.thenounproject.com/png/3810268-200.png'}} />    
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    icon: {
        width:24, 
        height:24, 
        tintColor: Colors.BattleshipGray
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