import React from 'react'
import { Toggleitem } from './Toggleitem'
import { ImageBackground,StyleSheet, Text, View,TouchableHighlight } from 'react-native';

export  function Characters(props) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/cluedoCharacters.jpeg')} style={styles.image}>
        <View></View>
        </ImageBackground> 

            <View style={{opacity:0.8,height:'100%',width:'100%'}}>
        <Toggleitem weapons={['שני','חרדל','גרין','שזיפי','רקיע','אורכידאה']} reset={props.reset} setreset={props.setreset} locked={props.locked}><Text style={{color:'white'}}>1</Text></Toggleitem>
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