import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { color } from '../../component/color'



const PaymentSuccesfull = (props) => {

  return (
    <View style={{ flex: 1, backgroundColor:color.white }}>
      <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 15 }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Image source={require('../../Images/back.png')} style={{ height: 25, width: 25 }} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: color.white }}>

        <Image source={require('../../Images/ok.gif')} style={{ height: 150, width: 150, resizeMode: 'contain' }} />

        <TouchableOpacity style={{marginTop:50,paddingHorizontal:20,paddingVertical:5,borderRadius:15,backgroundColor:color.buttonBlue}}  onPress={()=>props.navigation.navigate('PaymentReceipt')}><Text style={{fontWeight:'700',fontSize:16,color:'#FFF',fontSize:14}}>Done</Text></TouchableOpacity>

      </View>
    </View>
  )
}

export default PaymentSuccesfull