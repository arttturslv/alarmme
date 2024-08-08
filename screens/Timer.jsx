import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
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
    console.log("Zerando");
    setTime({ s: 0, m: 0, h: 0 });
    updateS = 0;
    updateM = 0;
    updateH = 0;
    setStarted(false);
    clearInterval(timer);
  }
  

  function Iniciar() {
    setTime({s: updateS, m: updateM, h: updateH })
    setStarted(true);
    initialTimeInMinutes = (updateH * 60) + updateM + (updateS / 60);
    console.log("Initial time in minutes:", initialTimeInMinutes);

    setTimer(setInterval(
      () => {
        run();
        console.log(".")
      }, 1000));

  }

  function Pausar() {
    console.log('pausar');
  }
  var fullTime=777;
  const run = () => {
    fullTime = updateH+updateM+updateS;

    if(fullTime==0) {
      console.log("PAREEEEE")
      Zerar();
    }

    if (updateS === 0) {
      if (updateM === 0 && updateH > 0) {
          updateH--;
          updateM = 59;
      } else {
          updateM--;
      }
      updateS = 59;
  } else {
      updateS--;
  }

    let remainingTimeInMinutes = (updateH * 60) + updateM + (updateS / 60);
    console.log("Remaining time in minutes:", remainingTimeInMinutes);
    let porc = totalTimePorcentage(initialTimeInMinutes, remainingTimeInMinutes);
    setPorcentage(porc)
    return setTime({s: updateS, m: updateM, h: updateH })
  }
  

  function totalTimePorcentage(initial, now) {
    if (initial === 0) return 0; // Evitar divisão por zero
    let percentage = (now / initial) * 1000;
    console.log("now - ", now);
    console.log("initial - ", initial);
    console.log("porc - ", percentage);
    return Math.max(0, percentage); // Garante que a porcentagem não seja negativa
  }
  
  return (
    <View style={styles.container}>
      <Pressable onPress={()=> navigation.navigate('Settings')} style={{position: 'absolute', top: 65, right: 25}}>
        <Image style={{width:25, height: 25}}  source={require('../assets/icons/setting.svg')}></Image>
      </Pressable>
      {
        isStarted?
        <CountdownEffect time={time} porcentage={porcentage}></CountdownEffect>
        :
        <TimePicker setTime={setTime} ></TimePicker>

      }
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
