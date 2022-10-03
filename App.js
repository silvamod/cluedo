import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View ,Button,Alert} from 'react-native';
import {Toggleitem} from './components/Toggleitem'
import {Weapons} from './components/Weapons'
import {Characters} from './components/Characters'
import {Rooms} from './components/Rooms'
import { useState ,useEffect} from 'react';

//this is Beta V0.5


export default function App() {
  const [reset1, setreset1] = useState(false)
  const [reset2, setreset2] = useState(false)
  const [reset3, setreset3] = useState(false)
  const [locked, setlocked] = useState(false)

  function Reset(){
    return Alert.alert(
      "Confirm Reset",
      "Are you sure you want to reset?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            setreset1(true)
            setreset2(true)
            setreset3(true) 
            setlocked(false)
          },
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );

  }

  function lock(){
    setlocked(!locked)
  }

  return (
    <>
    <View style={styles.container}> 
       
      <View style={styles.weapons}>
      <Weapons reset={reset1} setreset={setreset1} locked={locked}></Weapons>
      </View>
      
      <View style={styles.characters}>
      <Characters reset={reset2} setreset={setreset2} locked={locked}></Characters>
      </View>
      
      <View style={styles.rooms}>
      <Rooms reset={reset3} setreset={setreset3} locked={locked}></Rooms>
      </View>

      <StatusBar style="auto" /> 
    </View>
          <View style={{  flexDirection: 'row',alignItems:'center',width:'100%'}}>

            <View style={{width:'50%'}}>
              <Button
                  style={{flex:1}}
                  onPress={Reset}
                  title= 'Reset'
                  color="#841584"
                
                />
            </View>

            <View style={{width:'50%'}}>
                  <Button
                      style={{flex:1}}
                      onPress={lock}
                      title={ locked? 'Locked':'unlocked'}
                      color="#841584"
                    
                    />
            </View>


      </View>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.999,
    marginTop:'7%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  weapons:{
   
    height:'30%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  characters:{
    height:'30%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rooms:{
    height:'39.99999%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
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
