import Colors from '../constants/Colors'
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import {Svg, Circle} from 'react-native-svg'

export default function CountdownEffect({time, porcentage}) {

    const {width, height} = Dimensions.get("window");
    const circle_length = 1000;
    const radius = circle_length / (2*Math.PI);

    return (
        <View style={styles.container}>
            <View>
                <Svg height={600}> 
                    <Circle
                        cx={width/2}
                        cy={height/3}
                        r={radius}
                        stroke="#A663CC"
                        strokeWidth={20}
                        fill="#17181B"
                    />
                    <Circle
                        fill="#17181B"
                        cx={width/2}
                        cy={height/3}
                        r={radius}
                        stroke="#17181B"
                        strokeWidth={18}
                        strokeDasharray={1000}
                        strokeDashoffset={1000*porcentage}  
                    />
                    <Text style={[styles.hour, {width:width, top:height/3.40}]}>{time.h < 10 ? "0" + time.h: time.h}
                    :{time.m < 10 ? "0" + time.m : time.m}
                    :{time.s < 10 ? "0" + time.s : time.s}</Text>

                </Svg>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 540,
    },
    hour: {
        color: Colors.FloralWhite,
        fontSize: 56,
        fontWeight: '300',
        textAlign: 'center',
        position: 'absolute'
    },
})