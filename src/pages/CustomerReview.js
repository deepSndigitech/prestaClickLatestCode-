import { View, Text, TouchableOpacity, StatusBar, FlatList, Image, TextInput, ScrollView, ImageBackground, } from 'react-native'
import React, { useState } from 'react'
import Swiper from 'react-native-swiper'
import { color } from '../component/color';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CustomerReview = (props) => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [moreread, setMoreread] = useState(false);
  const [selectDate, setSelectDate] = useState("Select Date");

  const [itemsb, setItemsb] = useState(["Gardening", "Plantation", "Cutting"]);

  const [selectedRating, setSelectedRating] = useState("Gardening");

  const handleRatingPress = (rating) => {
    setSelectedRating(rating)
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    const dt = new Date(data);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');

    console.log("data:::::::::::", dt);
    // console.log(x1[2]+'/'+x1[1]+'/'+x1[0]);
    setSelectDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    // setdate(dat);
    hideDatePicker();
  };




  return (

    <>
      <View style={{ flex: 1, backgroundColor: color.white }}>


        <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', marginVertical: 10 }}>
          <View style={{ flexDirection: 'row', }}>
            <TouchableOpacity onPress={() => props.navigation.pop()}>
              <Image source={require('../Images/back.png')} style={{ height: 25, width: 25, resizeMode: 'contain' }} />
            </TouchableOpacity>
            <View style={{ marginLeft: 20 }}>
              <Text style={{ color: color.blackBack, fontSize: 16, fontWeight: '700', }}>Gardening</Text>
            </View>
          </View>
          <TouchableOpacity style={{ alignSelf: 'center' }}>
            <Image style={{ height: 25, width: 25 }} source={require('../Images/search.png')} />
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: '800' }}>Customer Review</Text>
        </View>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={{ marginHorizontal: 15, marginTop: 20 }}>

            {/* customer Review */}
            {[1, 2, 3, 4, 5, 6].map((ele, index) => (
              <View style={{ marginVertical: 5, backgroundColor: color.white, borderRadius: 15, elevation: 5, borderWidth: 0.5, borderColor: color.greyBack }}>

                <View style={{ width: '95%', padding: 10 }}>
                  <View style={{ flexDirection: 'row', }}>
                    <View style={{ padding: 7 }}>
                      <Image source={require('../Images/gardring.png')} style={{ height: 45, width: 45, resizeMode: 'cover', borderRadius: 40 }} />
                    </View>

                    <View>

                      <Text style={{ fontSize: 18, fontWeight: '700', color: color.black }}>Alex Albon</Text>
                      <Text style={{ fontSize: 15 }}>⭐⭐⭐⭐</Text>
                    </View>

                  </View>

                  <Text style={{
                    fontSize: 14, fontWeight: '300', color: color.black,
                  }}>Exceptional service and skilled stylists; my go-to salon for a fabulous hair transformation!</Text>
                  <View style={{ flexDirection: 'row', }}>

                    <Image source={require('../Images/gardring.png')} style={{ height: 70, width: 70, resizeMode: 'cover', margin: 5 }} />
                    <Image source={require('../Images/gardring.png')} style={{ height: 70, width: 70, resizeMode: 'cover', margin: 5 }} />
                  </View>

                </View>




              </View>
            ))}


          </View>
        </ScrollView>
      </View>

    </>
  )
}

export default CustomerReview




