import { StyleSheet, Text, View } from 'react-native';
import Buttons from '../components/Buttons';

export default function Stopwatch() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:64, fontWeight: '300', color: '#fff'}}>00:00.00</Text>
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