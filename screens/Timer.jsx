import { StyleSheet, Text, View } from 'react-native';
import TimePicker from '../components/TimePicker';
import Colors from '../constants/Colors';
import Buttons from '../components/Buttons';
export default function Timer() {
  return (
    <View style={styles.container}>
      <TimePicker></TimePicker>
      <Buttons title={'Iniciar'}></Buttons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.EerieBlack,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
