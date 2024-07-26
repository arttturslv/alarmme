import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import TimePicker from '../components/TimePicker';
import Colors from '../constants/Colors';
import Buttons from '../components/Buttons';
import CountdownEffect from '../components/CountdownEffect';
export default function Timer() {
  const [time, setTime] = useState({s: 0, m: 0, h: 0});
  const [isStarted, setStarted] = useState(false);
  const [timer, setTimer] = useState(null);
  const [porcentage, setPorcentage] = useState(0.5);
  var updateS = time.s;
  var updateM = time.m;
  var updateH = time.h;
  var initialTimeInMinutes=0;

  function Zerar() {
    setTime(prev => prev = {s: 0, m: 0, h: 0});
    setStarted(false);
    clearInterval(timer);
  }

  function Iniciar() {
    setTime({s: updateS, m: updateM, h: updateH })
    setStarted(true);
    initialTimeInMinutes = ((time.s * 60) + time.m + (time.h / 60));

    setTimer(setInterval(
      () => {
        run();
      }, 100));

  }

  function Pausar() {
    console.log('pausar');
  }
  var fullTime=777;
  const run = () => {
    fullTime = updateH+updateM+updateS;

    if(fullTime==0) {
      Zerar();
    }

    if (updateS === 0) {
      updateM--;
      updateS = 59;
    }
    if (updateM === 0 && updateH > 0) {
      updateH--;
      updateM = 59;
    }
    updateS--;
    let porc = totalTimePorcentage(initialTimeInMinutes, ((time.s * 60) + time.m + (time.h / 60)));
    setPorcentage(prev => prev=porc)
    return setTime({s: updateS, m: updateM, h: updateH })
  }

  function totalTimePorcentage(initial, now) {
    return ((now/100)*initial)
  }

  return (
    <View style={styles.container}>
      {
        isStarted?
        <CountdownEffect time={time} porcentage={porcentage}></CountdownEffect>
        :
        <TimePicker setTime={setTime} ></TimePicker>

      }
      <Text>{fullTime}</Text>
      <Buttons
          started={isStarted}
          setStarted={setStarted}
          title1={'Iniciar'}
          title2={'Zerar'}
          title3={'Pausar'} 
          fn1={Iniciar}
          fn2={Zerar}
          fn3={Pausar}
          />
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
