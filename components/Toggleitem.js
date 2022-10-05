import { StatusBar } from 'expo-status-bar';
import { ImageBackground,StyleSheet, Text, View,TouchableHighlight } from 'react-native';
import { useState ,useEffect} from 'react';
import Checkbox from 'expo-checkbox';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export  function Toggleitem(props) {
    const [isPressed1, setisPressed1] = useState(true) //ispressed variables are used for checkboxes
    const [isPressed2, setisPressed2] = useState(true)
    const [isPressed3, setisPressed3] = useState(true)
    const [isPressed4, setisPressed4] = useState(true)
    const [isPressed5, setisPressed5] = useState(true)
    const [isPressed6, setisPressed6] = useState(true)
    const [isPressed7, setisPressed7] = useState(true)
    const [isPressed8, setisPressed8] = useState(true)
    const [isPressed9, setisPressed9] = useState(true)

    const [isStar1, setisStar1] = useState(false)  //isstar variables are used for stars
    const [isStar2, setisStar2] = useState(false)
    const [isStar3, setisStar3] = useState(false)
    const [isStar4, setisStar4] = useState(false)
    const [isStar5, setisStar5] = useState(false)
    const [isStar6, setisStar6] = useState(false)
    const [isStar7, setisStar7] = useState(false)
    const [isStar8, setisStar8] = useState(false)
    const [isStar9, setisStar9] = useState(false)



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

        <View style={{height:'100%',width:'80%',alignItems:'center'}}>
                
                    <View > 
                        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[0]}</Text> 
                    </View>
            
                    </View>
                    <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar1 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar1(!isStar1)
                                    setisPressed1(isStar1)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed1} onValueChange={
                            ()=> {if(!props.locked)
                                setisPressed1(!isPressed1)
                            }
                        } />
                        </View>
            </View>
        </View>


        <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'  }}>

<View style={{height:'100%',width:'80%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#000000  ',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[1]}</Text> 
            </View>
       
            </View>
                    <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar2 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar2(!isStar2)
                                    setisPressed2(isStar2)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed2} onValueChange={
                            ()=> {if(!props.locked)
                                setisPressed2(!isPressed2)
                            }
                        } />
                        </View>
            </View>
    </View>


    <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'}}>

<View style={{height:'100%',width:'80%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[2]}</Text> 
            </View>
       
            </View>
            <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar3 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar3(!isStar3)
                                    setisPressed3(isStar3)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed3} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed3(!isPressed3)
                            }
                        } />
                        </View>
            </View>
    </View>


    <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'}}>

<View style={{height:'100%',width:'80%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[3]}</Text> 
            </View>
       
            </View>
            <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar4 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar4(!isStar4)
                                    setisPressed4(isStar4)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed4} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed4(!isPressed4)
                            }
                        } />
                        </View>
            </View>
    </View>


    <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'}}>

<View style={{height:'100%',width:'80%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[4]}</Text> 
            </View>
       
            </View>
            <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar5 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar5(!isStar5)
                                    setisPressed5(isStar5)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed5} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed5(!isPressed5)
                            }
                        } />
                        </View>
            </View>
    </View>



        <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

    <View style={{height:'100%',width:'80%',alignItems:'center'}}>
        
                <View > 
                    <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[5]}</Text> 
                </View>
        
                </View>
                <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar6 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar6(!isStar6)
                                    setisPressed6(isStar6)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed6} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed6(!isPressed6)
                            }
                        } />
                        </View>
            </View>
        </View>


        </View>
      );
      else 
      return(
        
        <View style={styles.container}>
           
            <View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

                <View style={{height:'100%',width:'80%',alignItems:'center'}}>
                    
                    <View > 
                        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[0]}</Text> 
                    </View>
            
                    </View>
                    <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar1 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar1(!isStar1)
                                    setisPressed1(isStar1)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed1} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed1(!isPressed1)
                            }
                        } />
                        </View>
            </View>
        </View>
        

                <View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

        <View style={{height:'100%',width:'80%',alignItems:'center'}}>
            
            <View > 
                <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[1]}</Text> 
            </View>

            </View>
            <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar2 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar2(!isStar2)
                                    setisPressed2(isStar2)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed2} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed2(!isPressed2)
                            }
                        } />
                        </View>
            </View>
        </View>



        <View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'80%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[2]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar3 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar3(!isStar3)
                                    setisPressed3(isStar3)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed3} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed3(!isPressed3)
                            }
                        } />
                        </View>
            </View>
</View>



<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'80%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[3]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar4 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar4(!isStar4)
                                    setisPressed4(isStar4)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed4} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed4(!isPressed4)
                            }
                        } />
                        </View>
            </View>
</View>


<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'80%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[4]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar5 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar5(!isStar5)
                                    setisPressed5(isStar5)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed5} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed5(!isPressed5)
                            }
                        } />
                        </View>
            </View>
</View>


<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'80%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[5]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar6 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar6(!isStar6)
                                    setisPressed6(isStar6)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed6} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed6(!isPressed6)
                            }
                        } />
                        </View>
            </View>
</View>


            
<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'80%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[6]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar7 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar7(!isStar7)
                                    setisPressed7(isStar7)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed7} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed7(!isPressed7)
                            }
                        } />
                        </View>
            </View>
</View>


<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'80%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[7]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar8 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar8(!isStar8)
                                    setisPressed8(isStar8)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed8} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed8(!isPressed8)
                            }
                        } />
                        </View>
            </View>
</View>


            
<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'80%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[8]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'20%',flexDirection: 'row',alignItems:'center'}}>
                        <View style={{height:'100%',width:'50%'}}>
                                <FontAwesome style={{height:'100%',left:10,marginTop:4}} name={isStar9 ? 'star':'star-o'}  size={24} color='black' onPress={ ()=>{
                                    setisStar9(!isStar9)
                                    setisPressed9(isStar9)
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'50%'}}>
                        <Checkbox style={{height:'80%',width:'75%',left:7,marginTop:3 ,borderWidth:1,borderColor:'black'  }} value={!isPressed9} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed9(!isPressed9)
                            }
                        } />
                        </View>
            </View>
</View>

        </View>
      )


}

const styles = StyleSheet.create({
  container: {
    borderWidth:3,
    borderColor:'black',
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
