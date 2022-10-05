import React from 'react'
import { ImageBackground,StyleSheet, Text, View } from 'react-native';
import {Toggleitem} from './Toggleitem'
export  function Weapons(props) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/cluedoWeapons.jpg')} style={styles.image}>
        <View></View>
        </ImageBackground> 
            
            <View style={{opacity:0.7 ,height:'100%',width:'100%'}}>
        <Toggleitem weapons={['פמוט','פגיון','מוט ברזל','אקדח','חבל','מפתח צינורות']} reset={props.reset} setreset={props.setreset} locked={props.locked} ><Text style={{color:'white'}}>1</Text></Toggleitem> 
        </View>
    </View>
  )

  
}


const styles = StyleSheet.create({
    container: {
        borderWidth:1,
      height:'100%',
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      position:'absolute',
      justifyContent: "center",
      opacity:0.5,
      width:'100%',
      height:'100%',
      shadowColor:'#000',
      shadowOffset: {
          width: 0,
          height: 5, 
      },
    shadowOpacity: 0.80,
    shadowRadius: 4,  
    elevation: 5,
    overflow:'hidden',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
      
    },
  
  });