import { TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { useState } from 'react';
export default function Buttons({title1, title2, title3, fn1, fn2, fn3}) {
  
  const [started, setStarted] = useState(false);

  function startTimer() {
    setStarted(!started);
    fn1();
    console.log("iniciou");
  }
  function markTimer() {
    fn3();
    console.log("marcando");
  }
  function stopTimer() {
    setStarted(!started);
    fn2();
    console.log("terminou");
  }

  return (
    <>
      {
        !started?
          <TouchableHighlight 
            onPress={startTimer}
            style={styles.button}>
            <Text style={styles.text1}>{title1}</Text>
          </TouchableHighlight>
        :
        <View style={{flexDirection: "row", gap: 12}}>
        <TouchableHighlight 
            onPress={stopTimer}
            style={[styles.button, {width:150}]}>
            <Text style={styles.text2}>{title2}</Text>
          </TouchableHighlight>
          <TouchableHighlight 
            onPress={markTimer}
            style={[styles.button, {width:150}]}>
            <Text style={styles.text3}>{title3}</Text>
          </TouchableHighlight>
        
        </View>
      }
     
    
    
    </>
   
  );
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 24,
    color: Colors.Amethyst,
    textAlign: 'center'
  },
  text2: {
    fontSize: 24,
    color: Colors.Auburn,
    textAlign: 'center'
  },
  text3: {
    fontSize: 24,
    color: Colors.Pumpkin,
    textAlign: 'center'
  },
  button: {
    backgroundColor: Colors.Jet, 
    width: 300,
    paddingVertical: 12
  },
});
