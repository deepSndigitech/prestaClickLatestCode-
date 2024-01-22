import { View, Text,Image } from 'react-native'
import React,{useEffect} from 'react'



const PaymentLoading = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('PaymentSuccesfull')
    }, 1500);
    }, []);

    
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#FFF'}}>

    <Text style={{fontWeight:'800',textAlign:'center',marginVertical:20,color:'#000'}}>Redirect to Payment Gateway</Text>
    <Image   source={require('../../Images/loarding.gif')}  style={{height:80,width:80, resizeMode:'center'}}/>
 

      
    </View>
  )
}

export default PaymentLoading