import { View, StyleSheet, Text, TextInput, Image, Pressable } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Colors from "../constants/Colors";
import { useState } from "react";
import Switch from "../components/Switch";


export default function Settings({navigation}) {
    const data = [
        { key: '1', value: 'Português' },
        { key: '2', value: 'Inglês' }
    ];
    const [selected, setSelected] = useState('');

    return (
        <View style={{ backgroundColor: Colors.Jet, flex: 1, padding: 30, gap: 16, paddingTop: 80 }}>
                <Text style={{ fontSize: 28, fontWeight: '400', textAlign: 'left', color: '#fff' }}>Configurações</Text>

            <View style={{gap:8, flex: 1}}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '300' }}>Modo noturno</Text>
                    </View>
                    <Switch />
                </View>


                <View style={{ gap: 6 }}>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '300' }}>Idioma</Text>
                    </View>
                    <SelectList
                        data={data}
                        setSelected={setSelected}
                        defaultOption={{ key: 1, value: 'Português' }}
                        boxStyles={{ borderColor: Colors.Gunmetal, color: Colors.BattleshipGray, borderWidth: 2, borderRadius: 8, alignItems: 'center' }}
                        inputStyles={{ fontSize: 20, color: Colors.BattleshipGray, }}
                        dropdownTextStyles={{ fontSize: 20, color: Colors.BattleshipGray }}
                        dropdownStyles={{ color: Colors.BattleshipGray, borderColor: Colors.Gunmetal, borderWidth: 2 }}
                        search={false}
                        arrowicon={<Text style={{ fontSize: 20, color: Colors.BattleshipGray }}>v</Text>}
                    />
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                    <View>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '300' }}>Volume sempre no máximo</Text>
                    </View>
                    <Switch />
                </View>
            </View>

            <View style={{ gap: 16 }}>
                <Text style={{ fontSize: 24, fontWeight: '400', textAlign: 'left', color: '#fff' }}>Sobre</Text>

                <Text style={{ fontSize: 18, fontWeight: '200', textAlign: 'left', color: '#fff', paddingBottom: 8, borderBottomColor: Colors.DavysGray, borderBottomWidth: 1 }}>O projeto foi criado para ser um meio de aprendizado sobre animações, hooks, modo noturno, uso de arquivos, idioma e criação de apk</Text>

                <View style={{ gap: 4 }}>
                    <Text style={{ fontSize: 18, fontWeight: '200', textAlign: 'left', color: '#fff' }}>Desenvolvido por Artur</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, fontWeight: '200', textAlign: 'left', color: '#fff' }}>Visite o repósitorio: </Text>
                        <Text style={{ fontSize: 18, fontWeight: '200', textAlign: 'left', color: Colors.Amethyst }}>github/alarm-app</Text>
                    </View>

                    <Text style={{ fontSize: 14, fontWeight: '200', textAlign: 'left', color: '#fff' }}>Versão: 0.8.2</Text>
                </View>
            </View>

            <Pressable onPress={()=> navigation.goBack()} style={{flexDirection:'row', justifyContent: 'center', paddingVertical: 16}}>
                <Text style={[styles.subtitle, {fontSize:18}]}>Voltar</Text>
                <Image style={styles.icon} source={{uri: 'https://cdn-icons-png.freepik.com/256/84/84339.png?semt=ais_hybrid'}} />    
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({

    icon: {
        width: 24,
        height: 24,
        tintColor: Colors.BattleshipGray
    },
    subtitle: {
        fontSize: 20,
        paddingBottom: 4,
        fontWeight: '200',
        paddingHorizontal: 14,
        color: '#fff'
    },
    placeholder: {
        fontSize: 20,
        fontWeight: '300',
        paddingHorizontal: 14,
        color: Colors.BattleshipGray,
        overflow: 'hidden',
    }
})