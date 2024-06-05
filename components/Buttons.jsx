import { TouchableHighlight, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';
export default function Buttons({title}) {
  return (
      <TouchableHighlight 
      style={{backgroundColor: Colors.Jet, width: 300,paddingVertical: 6}}>
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: Colors.Amethyst,
    textAlign: 'center'
  }
});
