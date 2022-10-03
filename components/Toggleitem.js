import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { useState ,useEffect} from 'react';
import Checkbox from 'expo-checkbox';
//qwodjqwodj
export  function Toggleitem(props) {
    const [isPressed1, setisPressed1] = useState(true)
    const [isPressed2, setisPressed2] = useState(true)
    const [isPressed3, setisPressed3] = useState(true)
    const [isPressed4, setisPressed4] = useState(true)
    const [isPressed5, setisPressed5] = useState(true)
    const [isPressed6, setisPressed6] = useState(true)
    const [isPressed7, setisPressed7] = useState(true)
    const [isPressed8, setisPressed8] = useState(true)
    const [isPressed9, setisPressed9] = useState(true)
    const pressedarray = {isPressed1,isPressed2,isPressed3,isPressed4,isPressed5,isPressed6,isPressed7,isPressed8,isPressed9}

    useEffect(() => {
      reset()
      props.setreset(false)
    }, [props.reset])
    

    function reset(){
     setisPressed1(true)
     setisPressed2(true)
     setisPressed3(true)
     setisPressed4(true)
     setisPressed5(true)
     setisPressed6(true)
     setisPressed7(true)
     setisPressed8(true)
     setisPressed9(true)

    }


    if(props.weapons.length == 6)
    return (
      
        <View style={styles.container}>

   {/* <TouchableHighlight onPress = { ()=>{
                if(!props.locked)
                    setisPressed1(!isPressed1)
               

            
            } } style={{    borderWidth:1,
                    height:'100%',
                    
                    alignItems: 'center',
                    justifyContent: 'center',
                  
                    }}>
                   
                <View > 
                      <Text style={{color:'yellow',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[0]}</Text> 
                </View>
              
            </TouchableHighlight> */}





    <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'}}>

        <View style={{height:'100%',width:'90%',alignItems:'center'}}>
            
                    <View > 
                        <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[0]}</Text> 
                    </View>
            
                    </View>
                            <View style={{height:'100%',width:'10%' }}>
                    <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed1} onValueChange={
                        ()=> {if(!props.locked)
                            setisPressed1(!isPressed1)
                        }
                    } />
                    </View>
        </View>


        <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'  }}>

<View style={{height:'100%',width:'90%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[1]}</Text> 
            </View>
       
            </View>
                    <View style={{height:'100%',width:'10%' }}>
            <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed2} onValueChange={
                ()=> {if(!props.locked)
                    setisPressed2(!isPressed2)
                }
            } />
            </View>
    </View>


    <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'}}>

<View style={{height:'100%',width:'90%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[2]}</Text> 
            </View>
       
            </View>
                    <View style={{height:'100%',width:'10%' }}>
            <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed3} onValueChange={
                ()=> {if(!props.locked)
                    setisPressed3(!isPressed3)
                }
            } />
            </View>
    </View>


    <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'}}>

<View style={{height:'100%',width:'90%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[3]}</Text> 
            </View>
       
            </View>
                    <View style={{height:'100%',width:'10%' }}>
            <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed4} onValueChange={
                ()=> {if(!props.locked)
                    setisPressed4(!isPressed4)
                }
            } />
            </View>
    </View>


    <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'}}>

<View style={{height:'100%',width:'90%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[4]}</Text> 
            </View>
       
            </View>
                    <View style={{height:'100%',width:'10%' }}>
            <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed5} onValueChange={
                ()=> {if(!props.locked)
                    setisPressed5(!isPressed5)
                }
            } />
            </View>
    </View>



        <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

    <View style={{height:'100%',width:'90%',alignItems:'center'}}>
        
                <View > 
                    <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[5]}</Text> 
                </View>
        
                </View>
                        <View style={{height:'100%',width:'10%' }}>
                <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed6} onValueChange={
                    ()=> {if(!props.locked)
                        setisPressed6(!isPressed6)
                    }
                } />
                </View>
        </View>


        </View>
      );
      else 
      return(
        
        <View style={styles.container}>
           
            <View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

                <View style={{height:'100%',width:'90%',alignItems:'center'}}>
                    
                    <View > 
                        <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[0]}</Text> 
                    </View>
            
                    </View>
                            <View style={{height:'100%',width:'10%' }}>
                    <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed1} onValueChange={
                        ()=> {if(!props.locked)
                            setisPressed1(!isPressed1)
                        }
                    } />
                </View>
        </View>
        

                <View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

        <View style={{height:'100%',width:'90%',alignItems:'center'}}>
            
            <View > 
                <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[1]}</Text> 
            </View>

            </View>
                    <View style={{height:'100%',width:'10%' }}>
            <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed2} onValueChange={
                ()=> {if(!props.locked)
                    setisPressed2(!isPressed2)
                }
            } />
        </View>
        </View>



        <View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'90%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[2]}</Text> 
    </View>

    </View>
            <View style={{height:'100%',width:'10%' }}>
    <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed3} onValueChange={
        ()=> {if(!props.locked)
            setisPressed3(!isPressed3)
        }
    } />
</View>
</View>



<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'90%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[3]}</Text> 
    </View>

    </View>
            <View style={{height:'100%',width:'10%' }}>
    <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed4} onValueChange={
        ()=> {if(!props.locked)
            setisPressed4(!isPressed4)
        }
    } />
</View>
</View>


<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'90%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[4]}</Text> 
    </View>

    </View>
            <View style={{height:'100%',width:'10%' }}>
    <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed5} onValueChange={
        ()=> {if(!props.locked)
            setisPressed5(!isPressed5)
        }
    } />
</View>
</View>


<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'90%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[5]}</Text> 
    </View>

    </View>
            <View style={{height:'100%',width:'10%' }}>
    <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed6} onValueChange={
        ()=> {if(!props.locked)
            setisPressed6(!isPressed6)
        }
    } />
</View>
</View>


            
<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'90%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[6]}</Text> 
    </View>

    </View>
            <View style={{height:'100%',width:'10%' }}>
    <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed7} onValueChange={
        ()=> {if(!props.locked)
            setisPressed7(!isPressed7)
        }
    } />
</View>
</View>


<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'90%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[7]}</Text> 
    </View>

    </View>
            <View style={{height:'100%',width:'10%' }}>
    <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed8} onValueChange={
        ()=> {if(!props.locked)
            setisPressed8(!isPressed8)
        }
    } />
</View>
</View>


            
<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'90%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#7FFF00',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[8]}</Text> 
    </View>

    </View>
            <View style={{height:'100%',width:'10%' }}>
    <Checkbox style={{height:'80%',width:'50%',left:7,marginTop:3   }} value={!isPressed9} onValueChange={
        ()=> {if(!props.locked)
            setisPressed9(!isPressed9)
        }
    } />
</View>
</View>

        </View>
      )


}

const styles = StyleSheet.create({
  container: {
    borderWidth:3,
    borderColor:'red',
    height:'100%',
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  item:{
    borderWidth:1,
    width: '100%',
    height:'16.666666%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  itemPressed:{
    backgroundColor:'grey',
    borderWidth:1,
    width: '100%',
    height:'16.666666%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex:1,
    height:'100%',
    width:'100%',
    justifyContent: 'center',
  },

});
