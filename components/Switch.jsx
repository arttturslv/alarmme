import Colors from '../constants/Colors'
import {View, StyleSheet, Pressable} from 'react-native';
import { useState } from 'react';
export default function Switch() {

    const [isActive, setActivity] = useState(true)

    return (
        <Pressable onPress={()=>setActivity(!isActive)}>
            <View style={[styles.container, isActive?styles.active:styles.notActive ]}>
                <View style={styles.ball}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Amethyst, 
        width: 55, 
        height: 25 , 
        borderRadius: 100, 
        paddingHorizontal: 4,
        justifyContent: 'center'
    },
    active: {
        backgroundColor: Colors.Amethyst,
        alignItems: 'flex-end'
    },
    notActive: {
        backgroundColor: Colors.Gunmetal, 
    },
    ball: {
        backgroundColor:'#fff',
        width:22,
        height: 22,
        borderRadius: 100
    }
})