import { View, Text, TouchableOpacity, StatusBar, Image, TextInput, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

import Modal from "react-native-modal";
import { color } from '../../component/color';
import LinearGradient from 'react-native-linear-gradient';



const My_Quotation = props => {



  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedRatingError, setSelectedRatingError] = useState(null);
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [reOrder, setreOrder] = useState(false)








  return (
    <View style={{ flex: 1, backgroundColor: color.white }}>



      <View style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>

        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <Image style={{ height: 22, width: 22, tintColor: color.black, marginBottom: 5 }} source={require('../../Images/back.png')} />
        </TouchableOpacity>
        <Text style={{ color: color.black, fontSize: 20, fontWeight: '700', }}>My Quotation </Text>
        <Text></Text>


      </View>

      <ScrollView style={{ flex: 1, marginHorizontal: 20, marginVertical: 10, }} showsVerticalScrollIndicator={false}>
        {/* 

        {[1, 2, 3, 4].map((rating) => (

          <LinearGradient colors={[color.skyblue,color.white,color.skyblue,]} start={{ x: 1, y: 0.5 }} end={{ x: 0, y: 0 }} style={{ padding: 15, borderRadius: 15, backgroundColor: 'white', elevation: 5, marginVertical: 10, borderColor: 'lightgrey' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: color.black, fontWeight: '600' }}>AGB packers and Movers</Text>
              <Text style={{ color: color.buttonYellow, fontWeight: '400', }}>⭐⭐⭐⭐⭐</Text>
            </View>
            <Text style={{ marginTop: 5, fontSize: 10,color:color.black }}>The Original Agarwal Packers and Movers is the most prominent name in the logistics industry that strives to offer high-quality logistics and transport solutions to its diverse client roster. With more than 37 years of expertise, Agarwal Packers and Movers has carved out a niche for itself and is known to be one of the best and most reputed logistics companies in India. <Text style={{ textDecorationLine: 'underline', fontWeight: '500', color: color.black }}>Show More</Text></Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '70%' }}>
              <Text style={{ color: color.black, fontWeight: '300', fontSize: 12 }}>Movement Date</Text>
              <Text style={{ color: color.black, fontWeight: '500', fontSize: 12 }}>:26 Feb, 2023</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '70%' }}>
              <Text style={{ color: color.black, fontWeight: '300', fontSize: 12 }}>Size</Text>
              <Text style={{ color: color.black, fontWeight: '500', fontSize: 12 }}>1 RK</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, width: '70%' }}>
              <Text style={{ color: color.black, fontWeight: '300', fontSize: 12 }}>Vehicle used</Text>
              <Text style={{ color: color.black, fontWeight: '500', fontSize: 12 }}>10000L truck</Text>
            </View>

            <View style={{ padding: 5, borderTopWidth: 1, borderStyle: 'solid', marginTop: 10 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: color.black, fontWeight: '300', fontSize: 13 }}>Total Amount</Text>
              <Text style={{ color: color.black, fontWeight: '500', fontSize: 13 }}>$7,205.00</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ color: color.black, fontWeight: '300', fontSize: 13 }}>Discount</Text>
              <Text style={{ color: color.black, fontWeight: '500', fontSize: 13 }}>-$655.00</Text>
            </View>

            <View style={{ padding: 5, borderTopWidth: 1, borderStyle: 'solid', marginTop: 10 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: color.black, fontWeight: '500', fontSize: 13 }}>Amount Payable</Text>
              <Text style={{ color: color.black, fontWeight: '500', fontSize: 13 }}>$5,895.00</Text>
            </View>








            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15 }}>
              <TouchableOpacity style={{ marginTop: 15, paddingHorizontal: 15, paddingVertical: 5, backgroundColor: color.redApprove, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: color.red, fontSize: 14, fontWeight: '600' }}>Deny  <Image source={require('../../Images/close4.png')} style={{ height: 12, width: 12, tintColor: color.red }} /></Text>


              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 15, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: color.greenApprove, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onPress={() => setreOrder(true)}>
                <Text style={{ color: color.green, fontSize: 14, fontWeight: '600' }}>Approve  <Image source={require('../../Images/check.png')} style={{ height: 12, width: 12, tintColor: color.green }} /></Text>


              </TouchableOpacity></View>






          </LinearGradient>
        ))} */}
        {[1, 2, 3, 4,5,6,7,8,9,10].map((rating) => (
          <TouchableOpacity style={{ marginTop: 20, flexDirection: 'row' }} onPress={() => props.navigation.navigate('Quotation')}>
            <View style={{ paddingHorizontal: 10, paddingVertical: 15, borderTopLeftRadius: 25, borderBottomLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: color.buttonYellow,height:60,width:60,justifyContent:'center',alignItems:'center' }}>
              <Text style={{ fontSize: 12, }} numberOfLines={2}>2 days Ago</Text>
            </View>
            <View style={{ borderBottomWidth: 1.5, flexDirection: 'row', justifyContent: 'space-between', width: '80%', borderColor: color.buttonYellow }}>

              <Text style={{ fontSize: 22, fontWeight: '400', marginLeft: 15, color: color.buttonYellow,marginTop:5 }}>HairCut Request</Text>
              <View style={{ alignSelf: 'center', }}>
                <Text style={{ fontSize: 20, fontWeight: '400', marginLeft: 15, color: color.buttonYellow }}>(2)</Text>
                <Text style={{ textAlign: 'center', color: color.red, fontWeight: '500' }}>
                  New 1
                </Text>
              </View>

            </View>
          </TouchableOpacity>
        ))}








      </ScrollView>


      {/* <Modal isVisible={reOrder} onBackdropPress={() => setreOrder(false)}>
        <View style={{
          width: '90%', backgroundColor: color.white, elevation: 2, borderRadius: 10, alignSelf: 'center', borderWidth: 1.5, borderColor: color.black, padding: 15, marginTop: Dimensions.get('window').height / 1.5
        }}>

          <TouchableOpacity onPress={() => setreOrder(false)} style={{ alignSelf: 'flex-end' }}>

            <Image style={{ height: 16, width: 16, resizeMode: 'contain', tintColor: 'red' }} source={require('../../Images/close4.png')} />
          </TouchableOpacity>




          <View style={{ marginTop: 20, marginHorizontal: 5 }}>
            <Text style={{ color: color.black, fontWeight: '500', textAlign: 'center' }}>Pay 25% of the Quote money in advance for the commencement of work</Text>

          </View>

          <TouchableOpacity style={{ height: 35, width: '70%', alignSelf: 'center', backgroundColor: '#C32015', borderRadius: 20, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }} onPress={() => props.navigation.navigate('PaymentLoading')}>
            <Text style={{ color: 'white', fontSize: 12 }}>Pay $1,500.00 Advance <Image source={require('../../Images/right-arrow.png')} style={{ width: 20, height: 20, resizeMode: 'contain', tintColor: color.white }} /></Text>

          </TouchableOpacity>










        </View>
      </Modal> */}





    </View>
  )
}

// function mapStateToProps(state) {
//   // const { loggingIn } = state.authentication;
//   const { users, } = state;
//   return {
//     // loggingIn,
//     users,
//   };
// }
// export default connect(mapStateToProps)(Quotation);
export default My_Quotation
