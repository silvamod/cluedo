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

    const [isStar1, setisStar1] = useState(false)  //isstar variables are used for stars icons
    const [isStar2, setisStar2] = useState(false)
    const [isStar3, setisStar3] = useState(false)
    const [isStar4, setisStar4] = useState(false)
    const [isStar5, setisStar5] = useState(false)
    const [isStar6, setisStar6] = useState(false)
    const [isStar7, setisStar7] = useState(false)
    const [isStar8, setisStar8] = useState(false)
    const [isStar9, setisStar9] = useState(false)

    const [isQuestion1, setisQuestion1] = useState(false)  //isquestion variables are used for question marks icons
    const [isQuestion2, setisQuestion2] = useState(false)
    const [isQuestion3, setisQuestion3] = useState(false)
    const [isQuestion4, setisQuestion4] = useState(false)
    const [isQuestion5, setisQuestion5] = useState(false)
    const [isQuestion6, setisQuestion6] = useState(false)
    const [isQuestion7, setisQuestion7] = useState(false)
    const [isQuestion8, setisQuestion8] = useState(false)
    const [isQuestion9, setisQuestion9] = useState(false)



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

     setisStar1(false)
     setisStar2(false)
     setisStar3(false)
     setisStar4(false)
     setisStar5(false)
     setisStar6(false)
     setisStar7(false)
     setisStar8(false)
     setisStar9(false)



     setisQuestion1(false)
     setisQuestion2(false)
     setisQuestion3(false)
     setisQuestion4(false)
     setisQuestion5(false)
     setisQuestion6(false)
     setisQuestion7(false)
     setisQuestion8(false)
     setisQuestion9(false)


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

        <View style={{height:'100%',width:'70%',alignItems:'center'}}>
                
                    <View > 
                        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[0]}</Text> 
                    </View>
            
                    </View>

                    <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

                    <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion1 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion1(!isQuestion1)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>
                            <View style={{height:'100%',width:'33.333333%'}}>
                                    <FontAwesome style={styles.star} name={isStar1 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                        if(!props.locked)
                                        setisStar1(!isStar1)
                                        
                                    }}>
                    
                    </FontAwesome>
                    </View>
                    <View style={{height:'100%',width:'33.333333%'}}>
                            <Checkbox style={styles.checkbox} value={!isPressed1} onValueChange={
                                ()=> {if(!props.locked)
                                    setisPressed1(!isPressed1)
                                }
                            } />
                            </View>

                 
            </View>
        </View>


        <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'  }}>

<View style={{height:'100%',width:'70%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#000000  ',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[1]}</Text> 
            </View>
       
            </View>
                    <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

                    <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion2 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion2(!isQuestion2)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>

                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar2 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar2(!isStar2)
                                    
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed2} onValueChange={
                            ()=> {if(!props.locked)
                                setisPressed2(!isPressed2)
                            }
                        } />
                        </View>
            </View>
    </View>


    <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'}}>

<View style={{height:'100%',width:'70%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[2]}</Text> 
            </View>
       
            </View>

            <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>
                
            <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion3 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion3(!isQuestion3)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>
                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar3 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar3(!isStar3)
                                    
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed3} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed3(!isPressed3)
                            }
                        } />
                        </View>
            </View>
    </View>


    <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'}}>

<View style={{height:'100%',width:'70%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[3]}</Text> 
            </View>
       
            </View>
            <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

            <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion4 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion4(!isQuestion4)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>
                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar4 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar4(!isStar4)
                                   
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed4} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed4(!isPressed4)
                            }
                        } />
                        </View>
            </View>
    </View>


    <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1,borderColor:'grey'}}>

<View style={{height:'100%',width:'70%',alignItems:'center'}}>
      
            <View > 
                  <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[4]}</Text> 
            </View>
       
            </View>
            <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>
            <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion5 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion5(!isQuestion5)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>
                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar5 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar5(!isStar5)
                                    
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed5} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed5(!isPressed5)
                            }
                        } />
                        </View>
            </View>
    </View>



        <View style={{ flex:1,width: '100%', height:'16.666666%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

    <View style={{height:'100%',width:'70%',alignItems:'center'}}>
        
                <View > 
                    <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[5]}</Text> 
                </View>
        
                </View>
                <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

                <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion6 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion6(!isQuestion6)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>

                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar6 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar6(!isStar6)
                                    
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed6} onValueChange={
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

                <View style={{height:'100%',width:'70%',alignItems:'center'}}>
                    
                    <View > 
                        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[0]}</Text> 
                    </View>
            
                    </View>
                    <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

                    <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion1 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion1(!isQuestion1)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>

                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar1 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar1(!isStar1)
                                  
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed1} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed1(!isPressed1)
                            }
                        } />
                        </View>
            </View>
        </View>
        

                <View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

        <View style={{height:'100%',width:'70%',alignItems:'center'}}>
            
            <View > 
                <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[1]}</Text> 
            </View>

            </View>
            <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>
            <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion2 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion2(!isQuestion2)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>
                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar2 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar2(!isStar2)
                                    
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed2} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed2(!isPressed2)
                            }
                        } />
                        </View>
            </View>
        </View>



        <View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'70%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[2]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

    <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion3 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion3(!isQuestion3)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>


                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar3 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar3(!isStar3)
                                    
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed3} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed3(!isPressed3)
                            }
                        } />
                        </View>
            </View>
</View>



<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'70%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[3]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

    <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion4 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion4(!isQuestion4)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>

                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar4 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar4(!isStar4)
                                  
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed4} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed4(!isPressed4)
                            }
                        } />
                        </View>
            </View>
</View>


<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'70%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[4]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

    <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion5 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion5(!isQuestion5)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>

                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar5 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar5(!isStar5)
                                  
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed5} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed5(!isPressed5)
                            }
                        } />
                        </View>
            </View>
</View>


<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'70%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[5]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

    <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion6 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion6(!isQuestion6)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>

                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar6 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar6(!isStar6)
                                
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed6} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed6(!isPressed6)
                            }
                        } />
                        </View>
            </View>
</View>


            
<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'70%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[6]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

    <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion7 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion7(!isQuestion7)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>

                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar7 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar7(!isStar7)
                                 
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed7} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed7(!isPressed7)
                            }
                        } />
                        </View>
            </View>
</View>


<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'70%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[7]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

    <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion8 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion8(!isQuestion8)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>


                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar8 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar8(!isStar8)
                                    
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed8} onValueChange={
                            ()=> {if(!props.locked) 
                                setisPressed8(!isPressed8)
                            }
                        } />
                        </View>
            </View>
</View>


            
<View style={{ flex:1,width: '100%', height:'11.11111111%',flexDirection: 'row',alignItems:'center',borderWidth:1 ,borderColor:'grey'}}>

<View style={{height:'100%',width:'70%',alignItems:'center'}}>
    
    <View > 
        <Text style={{color:'#000000',fontSize:20,fontWeight:'bold',alignItems:'center'}}>{props.weapons[8]}</Text> 
    </View>

    </View>
    <View style={{height:'100%',width:'30%',flexDirection: 'row',alignItems:'center'}}>

    <View  style={{height:'100%',width:'33.333333%'}}>
                        <FontAwesome style={styles.star} name={isQuestion9 ? 'question-circle':'question-circle-o'}  size={24} color='yellow' onPress={ ()=>{
                            if(!props.locked)
                                    setisQuestion9(!isQuestion9)
                                    
                                }}>
                
                        </FontAwesome>
                        
                    </View>


                        <View style={{height:'100%',width:'33.333333%'}}>
                                <FontAwesome style={styles.star} name={isStar9 ? 'star':'star-o'}  size={24} color='red' onPress={ ()=>{
                                    if(!props.locked)
                                    setisStar9(!isStar9)
                                
                                }}>
                
                </FontAwesome>
                </View>
                <View style={{height:'100%',width:'33.333333%'}}>
                        <Checkbox style={styles.checkbox} value={!isPressed9} onValueChange={
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

  star:{
    height:'100%',
    left:10,
    marginTop:5

  },

  checkbox:{
    height:'80%',
    width:'75%',
    left:7,marginTop:3 
    ,borderWidth:1,
    borderColor:'black'  ,
  },
  

});
