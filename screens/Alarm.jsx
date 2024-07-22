import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import AlarmItem from '../components/AlarmItem';
import Colors from '../constants/Colors';

export default function Alarm({navigation}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems: 'center', justifyContent: 'center', flex:1}}>

      <View style={styles.alarmItems}>
        <Pressable onPress={() => navigation.navigate('AlarmOptions')}>
          <Text style={styles.addButton}>+</Text>
        </Pressable>
        <AlarmItem navigation={navigation}></AlarmItem>
        <AlarmItem></AlarmItem>
        <AlarmItem></AlarmItem>
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
    gap: 14
  },
  addButton: {
    color: Colors.BattleshipGray, fontSize: 36, fontWeight:'100', textAlign: 'right', paddingHorizontal:12
  }
});
