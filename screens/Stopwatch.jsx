import { StyleSheet, Text, View } from 'react-native';
import Buttons from '../components/Buttons';
import { useEffect, useState } from 'react';

export default function Stopwatch() {
  const [isStarted, setStarted] = useState(false);
  const [stopWatch, setStopWatch] = useState(null);
  const [marked, setMarked] = useState([]);
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  var updateMs = time.ms;
  var updateS = time.s;
  var updateM = time.m;
  var updateH = time.h;

  const run = () => {
    if (updateM === 60) {
      updateH++;
      updateM = 0;
    }
    if (updateS === 60) {
      updateM++;
      updateS = 0;
    }
    if (updateMs === 1000) {
      updateS++;
      updateMs = 0;
    }
    updateMs += 10;
    return setTime({ ms: updateMs, s: updateS, m: updateM, h: updateH })
  }

  function start() {
    setStopWatch(setInterval(
      () => {
        run();
      }, 10));
  }

  function stop() {
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setMarked([]);
    clearInterval(stopWatch);
  }

  function addMarker() {
    console.log(marked);

    for (const key in marked) {
      console.log(key.toString())
    }
    if(marked.length>10) {
      setMarked(prev => prev.slice(1));
    }
    setMarked(prev => ([...prev, time]))
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.7, justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          {
            time.h > 0 &&
            <Text style={{ fontSize: 64, fontWeight: '300', color: '#fff' }}>{time.h < 10 ? "0" + time.h : time.h}:</Text>
          }
          <Text style={{ fontSize: 64, fontWeight: '300', color: '#fff' }}>{time.m < 10 ? "0" + time.m : time.m}:</Text>
          <Text style={{ fontSize: 64, fontWeight: '300', color: '#fff' }}>{time.s < 10 ? "0" + time.s : time.s}.</Text>
          <Text style={{ fontSize: 64, fontWeight: '300', color: '#fff' }}>{(time.ms).toString().substring(0,2)}</Text>
        </View>

        <View style={{ alignSelf: "flex-end" }}>
          {
            marked ?
              marked.map((item, i) => (
                <Text key={i} style={{ fontSize: 12, fontWeight: '300', color: '#fff' }}>
                  {item.h!=0?(item.h < 10 ? ("0" + item.h +":") : (item.h+":")):''}
                  {item.m < 10 ? "0" + item.m : item.m}
                  :{item.s < 10 ? "0" + item.s : item.s}
                  .{item.ms}</Text>
              ))
              :
              <></>
          }
        </View>
      </View>

      <View>
        <Buttons
          started={isStarted}
          setStarted={setStarted}
          title1={'Iniciar'}
          fn1={start}
          fn2={() => stop(stopWatch)}
          fn3={addMarker}
          title2={'Zerar'}
          title3={'Marcar'} />
      </View>
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