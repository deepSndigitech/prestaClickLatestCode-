import { View, Text, TouchableOpacity, StatusBar, FlatList, Image, TextInput, ScrollView, ImageBackground, } from 'react-native'
import React, { useState } from 'react'
import Swiper from 'react-native-swiper'
import { color } from '../component/color';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ServiceDetails = (props) => {

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


  const renderItemComponent = ({ item, index, }) =>
    <View style={{ flex: 1, maxWidth: '50%', marginHorizontal: 8 }}>
      <TouchableOpacity style={{ flex: 1, height: 200, }}
      // onPress={}
      >

        <ImageBackground style={{
          height: 180,
          flexDirection: 'column', justifyContent: 'flex-end'
        }} source={require('../Images/gif/hiarcut.gif')} imageStyle={{ borderRadius: 10 }}>

          <View style={{ backgroundColor: color.black, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, paddingHorizontal: 10, paddingVertical: 4 }}>
            <Text style={{ color: color.white, fontSize: 16, fontWeight: '600' }}>Garening</Text>
            <Text style={{ color: color.white, fontSize: 12, fontWeight: '400', textDecorationLine: 'underline' }}>50+ Professionals  ➝</Text>

          </View>

        </ImageBackground>

      </TouchableOpacity>
    </View>


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



        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

          <View style={{ height: 350 }}>
            <View style={{ height: 350, width: "100%", alignItems: 'center', marginHorizontal: 5 }}>


              <Image style={{ resizeMode: 'stretch', height: '100%', width: '100%' }} source={require('../Images/gif/gardning.gif')} />
            </View>

          </View>

          <View style={{ height: 110, backgroundColor: color.balck2, borderTopLeftRadius: 25, width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 30 }}>
              <Text style={{ fontSize: 25, fontWeight: '900', color: color.white }}>Green Garden Service</Text>
              <Image style={{ height: 25, width: 25, tintColor: color.white, alignSelf: 'center' }} source={require('../Images/heart.png')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 30 }}>
              <Text style={{ fontSize: 14, fontWeight: '700', color: color.white }}>⭐⭐ 4.2</Text>
              <Image style={{ height: 20, width: 20, tintColor: color.white, alignSelf: 'center' }} source={require('../Images/share.png')} />
            </View>



          </View>


          <View style={{ marginHorizontal: 15, marginTop: 5 }}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: color.balck2 }}>About Green Gardening Services</Text>
            <View style={{ marginTop: 5 }}>


              {moreread ?
                <Text>Started germinated in 2014 from a promise to make ‘green and healthy’ a click away for all Indians
                  Having plants in our homes or in our offices doesn’t just look good, it also boosts our mood, makes us more productive, and cleans the air around us by absorbing toxins Most of us being urban dwellers spending their days in apartments with limited access to parks and ecological reserves,  <TouchableOpacity style={{ marginTop: 10 }} onPress={() => setMoreread(false)}><Text style={{ color: color.black, fontSize: 18, fontWeight: '600', textDecorationLine: 'underline' }}>Read More</Text></TouchableOpacity></Text>
                :
                <Text>Started germinated in 2014 from a promise to make ‘green and healthy’ a click away for all Indians
                  Having plants in our homes or in our offices doesn’t just look good, it also boosts our mood, makes us more productive, and cleans the air around us by absorbing toxins Most of us being urban dwellers spending their days in apartments with limited access to parks and ecological reserves, have no way of feeling close to nature and experiencing the benefits of being around plants. Ordering a pizza is easy but ever heard of ordering a plant to your doorstep? This is where nurserylive comes in. We believe that Green is Good and are here to enable Indians to access plants in the easiest way possible – online! We are here to shape the future of gardening! <TouchableOpacity style={{ marginTop: 10 }} onPress={() => setMoreread(true)}><Text style={{ color: color.black, fontSize: 18, fontWeight: '600', textDecorationLine: 'underline' }}>Read Less</Text></TouchableOpacity></Text>
              }


            </View>


          </View>



          <View style={{ backgroundColor: 'white', marginVertical: 20, marginHorizontal: 10 }}>
            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8]}
              renderItem={item => renderItemComponent(item)}
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              navigation={props.navigation}
            />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
            <View>
              <Text style={{ fontSize: 16, fontWeight: '700',color:color.black }}>Customer Feedback</Text>
            </View>
            <TouchableOpacity onPress={()=>props.navigation.navigate('CustomerReview')}>
              <Text style={{ textDecorationLine: 'underline', fontSize: 16,color:color.black }}>See all</Text>
            </TouchableOpacity>

          </View>

          <View style={{ marginHorizontal: 15 }}>

            {/* customer Review */}
            <View style={{ marginVertical: 10, backgroundColor: color.white, height: 130, flexDirection: 'row', borderRadius: 15, elevation: 5, borderWidth: 0.5, borderColor: color.greyBack }}>

              <View style={{ width: '65%', padding:10 }}>
                <View style={{ flexDirection: 'row', }}>
                  <View style={{padding:7}}>
                    <Image source={require('../Images/gardring.png')} style={{ height: 40, width: 40, resizeMode: 'cover', borderRadius: 40 }} />
                  </View>

                  <View>

                    <Text style={{ fontSize: 18, fontWeight: '700', color: color.black }}>Alex Albon</Text>
                    <Text style={{ fontSize: 15 }}>⭐⭐⭐⭐</Text>
                  </View>

                </View>
                {/* <View style={{ marginTop: 7 }}>

                  <Text style={{ fontSize: 15 }}>⭐4.2</Text>
                </View> */}
                <Text style={{
                  fontSize: 14, fontWeight: '300', color: color.black
                }}>Exceptional service and skilled stylists; my go-to salon for a fabulous hair transformation!</Text>

              </View>

              <View style={{ width: '35%', justifyContent: 'center' }}>
                <Image source={require('../Images/gardring.png')} style={{ height: 80, width: 80, resizeMode: 'cover', }} />
                <Image source={require('../Images/gardring.png')} style={{ height: 80, width: 80, marginTop: -65, marginLeft: 15, resizeMode: 'cover', }} />

              </View>

            </View>

          </View>










          {/* <View style={{ marginHorizontal: 12, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#FFF', elevation: 5, marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: '800', color: color.buttonBlue }}>Customer Review</Text>
            <Image source={require('../Images/right-arrow.png')} style={{ height: 25, width: 20, alignSelf: 'center', tintColor: color.buttonBlue }} />



          </View> */}



          {/* <View style={{ marginHorizontal: 20, marginTop: 10, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ fontSize: 15, color: '#000' }}>Comfort</Text>
              <Text style={{ fontSize: 15, color: '#000' }}>⭐⭐⭐⭐ 4.8</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ fontSize: 15, color: '#000' }}>Comfort</Text>
              <Text style={{ fontSize: 15, color: '#000' }}>⭐⭐⭐⭐ 4.8</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ fontSize: 15, color: '#000' }}>Comfort</Text>
              <Text style={{ fontSize: 15, color: '#000' }}>⭐⭐⭐⭐ 4.8</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
              <Text style={{ fontSize: 15, color: '#000' }}>Comfort</Text>
              <Text style={{ fontSize: 15, color: '#000' }}>⭐⭐⭐⭐ 4.8</Text>
            </View>

          </View>


          <View style={{ marginHorizontal: 15, marginTop: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: '700', color: '#252460' }}>Top Reviews</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Image source={require('../Images/ProductDetailsImg/1.png')} style={{ height: 25, width: 25, borderRadius: 30 }} />
              <Text style={{ marginLeft: 5, alignSelf: 'center' }}>Peter parker</Text>
            </View>
            <Text style={{ color: '#000', marginHorizontal: 5 }}>⭐⭐⭐⭐⭐ Varified Purchased</Text>
            <Text style={{ color: '#000', marginHorizontal: 5, marginTop: 5 }}>So far, I'm quite happy with my Neelkamal recliner (navy blue variant). It was very easy to assemble on my own. It's pretty comfortable, reclining mechanism is decent. However, like some other customers have also pointed out, there are a couple of shortcomings: 1) fabric quality is not very good, it's fading after just a month and 2) it does need strength to fold back. Good exercise for your legs 😉</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Image source={require('../Images/ProductDetailsImg/1.png')} style={{ height: 25, width: 25, borderRadius: 30 }} />
              <Text style={{ marginLeft: 5, alignSelf: 'center' }}>Peter parker</Text>
            </View>
            <Text style={{ color: '#000', marginHorizontal: 5 }}>⭐⭐⭐⭐⭐ Varified Purchased</Text>
            <Text style={{ color: '#000', marginHorizontal: 5, marginTop: 5 }}>So far, I'm quite happy with my Neelkamal recliner (navy blue variant). It was very easy to assemble on my own. It's pretty comfortable, reclining mechanism is decent. However, like some other customers have also pointed out, there are a couple of shortcomings: 1) fabric quality is not very good, it's fading after just a month and 2) it does need strength to fold back. Good exercise for your legs 😉</Text>
          </View> */}






















        </ScrollView>





      </View>

    </>
  )
}

export default ServiceDetails




