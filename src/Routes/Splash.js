import { View, Text,Image,ImageBackground } from 'react-native'
import React,{useState,useEffect} from 'react'




const Splash = props => {




  return (

    <View style={{flex:1,}}>
    <ImageBackground style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}} source={require('../Images/Splash.png')}>      
        <Image  style={{height:280,width:'80%',resizeMode:'contain'}} source={require('../Images/presta.png')}/>
    </ImageBackground>

</View>
  )
}

export default Splash