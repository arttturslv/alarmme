import React, { useEffect, useState} from "react";
import {View, Pressable, Text, Image, StyleSheet } from "react-native";

const Calendary = ({date, setDate}) => {


  useEffect(()=> {
    if(date==null) {
      setDate(prev =[{
        name: 'domingo',
        active: true
      },
      {
        name: 'segunda',
        active: false
      },
      {
        name: 'terça',
        active: false
      },
      {
        name: 'quarta',
        active: false
      },
      {
        name: 'quinta',
        active: false
      },
      {
        name: 'sexta',
        active: false
      },
      {
        name: 'sábado',
        active: false
      }])
    }
  
  },[])

  function switchDay(day) {
    var daysSaved = [...date];

    day = {...day, active: !day.active}

    daysSaved = daysSaved.map(savedDay => 
      savedDay.name === day.name ? day : savedDay // Substitui o objeto correspondente
    );
    setDate(daysSaved)
  }

  return (
    <View style={{flex:1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection:"row", gap: 6}}>
            {
              date.map((day) => {
                return (
                  <Pressable style={{paddingHorizontal: 3}} onPress={()=>switchDay(day)} >
                    <Text Text style={day.active?{fontSize: 16, color: Colors.Amethyst}:{fontSize: 16, color: Colors.BattleshipGray}}>{day.name.substring(0,3)}</Text>
                  </Pressable>
                )
              })
            }
          </View>
          <Image style={styles.icon} source={require('../assets/icons/calendar.png')} />        
      </View>
    </View>
  );
};

export default Calendary;

const styles = StyleSheet.create({
  icon: {
      width:24, 
      height:24, 
      tintColor: Colors.BattleshipGray,
      tintColor: '#989898'
  }
})