import { View, Text, TouchableOpacity, StatusBar, Image, TextInput, ScrollView, Modal, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { color } from '../../component/color';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Toast from 'react-native-toast-message'
// import axios from 'axios';
// import { connect } from 'react-redux';
// import { userActions } from '../../_actions';
const PaymentReceipt = props => {



  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedRatingError, setSelectedRatingError] = useState(null);
  const [message, setmessage] = useState("");
  const [loading, setLoading] = useState(false);





  // useEffect(() => {
  //   getUser()

  // }, [])
  // const getUser = async () => {
  //   try {
  //     const userData = JSON.parse(await AsyncStorage.getItem("LogToken"))
  //     if (userData !== null) {
  //       setToken(userData);
  //       console.log("Cosultation tokoen", userData);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  // const handleRatingPress = (rating) => {
  //   setSelectedRating(rating)
  // }

  // const handletitle = (text) => {
  //   console.log("text", text);
  //   setmessage(text)
  // }


  // const handleRegistration = () => {
  //   setSelectedRatingError("");

  //   let isValid = true;

  //   if (selectedRating === null) {
  //     setSelectedRatingError("Rating is required.")
  //     isValid = false;
  //   }

  //   if (isValid) {

  //     const registrationResult = { success: true };
  //     return registrationResult;
  //   } else {

  //     return { success: false };
  //   }
  // };



  // const feedbackSubmit = () => {
  //   const registrationResult = handleRegistration();
  //   setLoading(true)
  //   setTimeout(() => { setLoading(false) }, 1500)

  //   if (registrationResult.success) {

  //     console.log("feedback", { selectedRating, message });
  //     const FormData = require('form-data');
  //     let data = new FormData();
  //     data.append('number', selectedRating);
  //     data.append('description', message);
  //     // props.dispatch(userActions.sendFeedback(data,props))
  //     props.navigation.navigate('FeedLoading')
  //     props.navigation.reset({
  //       index: 0,
  //       routes: [{ name: 'FeedLoading' }]
  //     });

  //   }

  // }




  return (
    <View style={{ flex: 1, backgroundColor: color.white }}>



      <View style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Image style={{ alignSelf: 'center', height: 22, width: 22, marginRight: 10, tintColor: color.black }} source={require('../../Images/back.png')} />
          </TouchableOpacity>
          <Text style={{ color: color.black, fontSize: 18, fontWeight: '600', marginLeft: 20 }}>Payment Receipt </Text>

        </View>

      </View>

      <ScrollView style={{ flex: 1, marginHorizontal: 15, marginVertical: 20, }} showsVerticalScrollIndicator={false}>
       


          <View style={{ padding:20, borderRadius: 15, backgroundColor: 'white', elevation: 10, borderWidth: 1, marginVertical: 5,borderColor:'lightgrey' }}>
            <Text style={{textAlign:'center'}}>Presta Click</Text>


            <View  style={{padding:5,borderTopWidth:1,borderStyle:'dashed',marginTop:15}} />

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:color.black,fontWeight:'300'}}>Bill Date</Text>
              <Text style={{color:color.black,fontWeight:'300'}}>01/09/2023</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              <Text style={{color:color.black,fontWeight:'300'}}>Bill Time</Text>
              <Text style={{color:color.black,fontWeight:'300'}}>22:31</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              <Text style={{color:color.black,fontWeight:'300',width:'50%'}}>Bill Address</Text>
              <Text style={{color:color.black,fontWeight:'300',width:'40%'}}>Ln 1 Times Square St., California </Text>
            </View>
            <View  style={{padding:5,borderTopWidth:1,borderStyle:'dashed',marginTop:15}} />
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:color.black,fontWeight:'300'}}>Customer Name</Text>
              <Text style={{color:color.black,fontWeight:'300'}}>Mike Ross</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              <Text style={{color:color.black,fontWeight:'300'}}>Customer No.</Text>
              <Text style={{color:color.black,fontWeight:'300'}}>1-212-1234567</Text>
            </View>
            <View  style={{padding:5,borderTopWidth:1,borderStyle:'dashed',marginTop:10}} />
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:color.black,fontWeight:'600'}}>Vendor Details</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              <Text style={{color:color.black,fontWeight:'300'}}>Company Name.</Text>
              <Text style={{color:color.black,fontWeight:'300'}}>XYZ Packers</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              <Text style={{color:color.black,fontWeight:'300'}}>Company No.</Text>
              <Text style={{color:color.black,fontWeight:'300'}}>1-212-1234567</Text>
            </View>
            <View  style={{padding:5,borderTopWidth:1,borderStyle:'dashed',marginTop:10}} />
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{color:color.black,fontWeight:'600'}}>Description</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
              <Text style={{color:color.black,fontWeight:'300'}}>3 BHK House Shifting</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              <Text style={{color:color.black,fontWeight:'300'}}>Quoted Amount</Text>
              <Text style={{color:color.black,fontWeight:'300'}}>$3000.00</Text>
            </View>
            <View  style={{padding:5,borderTopWidth:1,borderStyle:'dashed',marginTop:10}} />

  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              <Text style={{color:color.black,fontWeight:'300'}}>SubTotal Amount</Text>
              <Text style={{color:color.black,fontWeight:'300'}}>$3000.00</Text>
            </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              <Text style={{color:color.black,fontWeight:'300'}}>Discount 10%</Text>
              <Text style={{color:color.black,fontWeight:'300'}}>$300.00</Text>
            </View>
            <View  style={{padding:5,borderTopWidth:1,borderStyle:'dashed',marginTop:10}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              <Text style={{color:color.black,fontWeight:'300'}}>Total Amount</Text>
              <Text style={{color:color.black,fontWeight:'300'}}>$2700.00</Text>
            </View>
  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              <Text style={{color:color.black,fontWeight:'300'}}>25% Payment Received</Text>
              <Text style={{color:color.black,fontWeight:'300'}}>$750.00</Text>
            </View>
            <View  style={{padding:5,borderTopWidth:1,borderStyle:'dashed',marginTop:10}} />
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
              <Text style={{color:color.black,fontWeight:'500'}}>Payable Amount</Text>
              <Text style={{color:color.black,fontWeight:'500'}}>$1950.00</Text>
            </View>






        
           
            <TouchableOpacity style={{marginTop:15,width:'80%',height:40,alignSelf:'center',backgroundColor:color.buttonBlue,borderRadius:15,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:color.white,fontSize:16,fontWeight:'600'}}>Download Receipt  <Image source={require('../../Images/downloard.png')} style={{height:20,width:20,tintColor:color.white}}/></Text>


            </TouchableOpacity>




          

          </View>


       




      </ScrollView>





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
// export default connect(mapStateToProps)(PaymentReceipt);
export default PaymentReceipt;
