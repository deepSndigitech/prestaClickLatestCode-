import { View, Text, TouchableOpacity, StatusBar, Image, TextInput, ScrollView, ImageBackground, } from 'react-native'
import React, { useState } from 'react'
import Swiper from 'react-native-swiper'
import { color } from '../component/color';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const ProductDetails = (props) => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
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



        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

          <View style={{ height: 350 }}>
            <Swiper


              showsPagination={false}
              loop={false}
              autoplay={false}
            >
              <View style={{ height: 350, width: 350, alignItems: 'center', marginHorizontal: 5 }}>


                <Image style={{ resizeMode: 'stretch', height: '100%', width: '100%' }} source={require('../Images/ProductDetailsImg/1.png')} />
              </View>
              <View style={{ height: 350, width: 350, alignItems: 'center', marginHorizontal: 5 }}>


                <Image style={{ resizeMode: 'contain' }} source={require('../Images/ProductDetailsImg/4.png')} />
              </View>
              <View style={{ height: 350, width: 350, alignItems: 'center', marginHorizontal: 5, justifyContent: 'center' }}>


                <Image style={{ resizeMode: 'stretch', height: 350, width: 350, }} source={require('../Images/ProductDetailsImg/3.png')} />
              </View>
              <View style={{ height: 350, width: 350, alignItems: 'center', marginHorizontal: 5, justifyContent: 'center' }}>


                <Image style={{ resizeMode: 'stretch', height: 350, width: 350, }} source={require('../Images/ProductDetailsImg/2.png')} />
              </View>


            </Swiper>
          </View>

          <View style={{ height: 110, backgroundColor: color.balck2, borderTopLeftRadius: 25, width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 30 }}>
              <Text style={{ fontSize: 30, fontWeight: '900', color: color.white }}>100.61 $</Text>
              <Image style={{ height: 25, width: 25, tintColor: color.white, alignSelf: 'center' }} source={require('../Images/heart.png')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 30 }}>
              <Text style={{ fontSize: 14, fontWeight: '900', color: color.white }}>⭐⭐⭐⭐⭐</Text>
              <Image style={{ height: 20, width: 20, tintColor: color.white, alignSelf: 'center' }} source={require('../Images/share.png')} />
            </View>
            <TouchableOpacity style={{}} onPress={()=>props.navigation.navigate('ServiceDetails')}>
            <Text style={{ marginHorizontal: 30, fontWeight: '600 ', color: color.white, marginTop: 5, fontSize: 16 }}>Green Gardening Services</Text>
            </TouchableOpacity>


          </View>

          <View style={{ marginHorizontal: 10, flexDirection: 'row', marginTop: 10 }}>
            {itemsb.map((ele) => (
              <TouchableOpacity style={{ height: selectedRating === ele ? 33 : 30, width: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: selectedRating === ele ? color.blackBack : color.buttonBlue, marginHorizontal: 5, borderRadius: 5 }} onPress={() => handleRatingPress(ele)}>
                <Text style={{ color: selectedRating === ele ? color.white : color.black, fontWeight: '500' }}>{ele}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {selectedRating === "Gardening" ?
            <>
              <View style={{ marginHorizontal: 10, backgroundColor: color.blackBack, paddingTop: 5, borderRadius: 5 }}>
                <View style={{ padding: 10 }}>
                  <Text style={{ color: color.white, fontWeight: '600' }}>General Information</Text>
                  <Text style={{ color: color.white, fontWeight: '400', marginTop: 5 }}>Product Type : Recliner</Text>
                  <Text style={{ color: color.white, fontWeight: '400', }}>Dimensions : 86 cm x 79 cm x 83 cm</Text>
                  <Text style={{ color: color.white, fontWeight: '400', }}>Seating height : 40 cm</Text>
                  <Text style={{ color: color.white, fontWeight: '400', }}>Backrest height : 33 cm</Text>
                </View>
              </View>

            </>
            : null}
          {selectedRating === "Plantation" ?
            <>
              <View style={{ marginHorizontal: 10, backgroundColor: color.blackBack, paddingTop: 5, borderRadius: 5 }}>
                <View style={{ padding: 10 }}>
                  <Text style={{ color: color.white, fontWeight: '600' }}>General Information</Text>
                  <Text style={{ color: color.white, fontWeight: '400', marginTop: 5 }}>Product Type : Recliner</Text>
                  <Text style={{ color: color.white, fontWeight: '400', }}>Dimensions : 86 cm x 79 cm x 83 cm</Text>
                  <Text style={{ color: color.white, fontWeight: '400', }}>Seating height : 40 cm</Text>
                  <Text style={{ color: color.white, fontWeight: '400', }}>Backrest height : 33 cm</Text>
                </View>
              </View>

            </>
            : null}
          {selectedRating === "Cutting" ?
            <>
              <View style={{ marginHorizontal: 10, backgroundColor: color.blackBack, paddingTop: 5, borderRadius: 5 }}>
                <View style={{ padding: 10 }}>
                  <Text style={{ color: color.white, fontWeight: '600' }}>General Information</Text>
                  <Text style={{ color: color.white, fontWeight: '400', marginTop: 5 }}>Product Type : Recliner</Text>
                  <Text style={{ color: color.white, fontWeight: '400', }}>Dimensions : 86 cm x 79 cm x 83 cm</Text>
                  <Text style={{ color: color.white, fontWeight: '400', }}>Seating height : 40 cm</Text>
                  <Text style={{ color: color.white, fontWeight: '400', }}>Backrest height : 33 cm</Text>
                </View>
              </View>

            </>
            : null}

          <View style={{ marginVertical: 10, marginHorizontal: 10, backgroundColor: color.balck2, paddingVertical: 10, borderRadius: 10 }}>
            <View style={{ marginHorizontal: 10 }}>

              <Text style={{ color: color.white, fontWeight: '500' }}>
                Ask for Appointment
              </Text>
              <Text style={{ color: color.white, fontSize: 14, marginTop: 10 }}>Name</Text>
              <TextInput style={{ height: 40, backgroundColor: color.white, borderRadius: 10, padding: 0, paddingHorizontal: 10, marginTop: 5 }} placeholder='Enter Name' />

              <Text style={{ color: color.white, fontSize: 14, marginTop: 10 }}>Email</Text>
              <TextInput style={{ height: 40, backgroundColor: color.white, borderRadius: 10, padding: 0, paddingHorizontal: 10, marginTop: 5 }} placeholder='Enter Name' />

              <Text style={{ color: color.white, fontSize: 14, marginTop: 10 }}>Date</Text>
              {/* <TextInput style={{height:40,backgroundColor:color.white,borderRadius:10,padding:0,paddingHorizontal:10,marginTop:5}} placeholder='Enter Name'   /> */}
              <TouchableOpacity style={{ height: 40, backgroundColor: color.white, flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderRadius: 10 }} onPress={() => showDatePicker()}>
                <Text>{selectDate}</Text>
                <Image source={require('../Images/calendar.png')} style={{ height: 20, width: 20 }} />
              </TouchableOpacity>


              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <TouchableOpacity style={{ height: 40, width: '70%', alignSelf: 'center', marginTop: 30, padding: 0, backgroundColor: color.buttonBlue, borderRadius: 10, justifyContent: 'center' }} onPress={()=>props.navigation.navigate('ProductCart')}>
                <Text style={{ color: color.white, textAlign: 'center', fontWeight: '600' }}>Ask For appointment   <Image source={require('../Images/calendar.png')} style={{ height: 20, width: 20 }} /></Text>

              </TouchableOpacity>

            </View>


          </View>
          {/* <View style={{ marginHorizontal: 10, marginTop: 10 }}>
            <Text style={{
              fontWeight: '700', fontSize
                : 16, color: '#252460'
            }}>Warranty</Text>
            <Text style={{
              fontWeight: '400', fontSize
                : 14, marginTop: 5, color: '#252460'
            }}>Warranty Summary</Text>
            <Text style={{ fontSize: 14, marginTop: 5, marginHorizontal: 10 }}>⦿  1 Year manufacturer Warranty on the Product.</Text>
            <Text style={{
              fontWeight: '400', fontSize
                : 14, marginTop: 5, color: '#252460'
            }}>Service Type</Text>
            <Text style={{ fontSize: 14, marginTop: 5, marginHorizontal: 10 }}>⦿  1 Year manufacturer warranty</Text>
            <Text style={{
              fontWeight: '400', fontSize
                : 14, marginTop: 5, color: '#252460'
            }}>Covered in Warranty</Text>
            <Text style={{ fontSize: 14, marginTop: 5, marginHorizontal: 10 }}>⦿  The Product will be free from defects in materials and workmanship for a period of 1 year from the date of purchase if the product is used for domestic and / or commercial use.</Text>
            <Text style={{
              fontWeight: '400', fontSize
                : 14, marginTop: 5, color: '#252460'
            }}>Not covered in Warranty</Text>
            <Text style={{ fontSize: 14, marginTop: 5, marginHorizontal: 10 }}>⦿  The Product will be free from defects in materials and workmanship for a period of 1 year from the date of purchase if the product is used for domestic and / or commercial use.</Text>

          </View> */}

          <View style={{ marginHorizontal: 15, marginTop: 5 }}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: color.balck2 }}>About Green Gardening Services</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              {/* <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} /> */}
              <Text>Started germinated in 2014 from a promise to make ‘green and healthy’ a click away for all Indians
                Having plants in our homes or in our offices doesn’t just look good, it also boosts our mood, makes us more productive, and cleans the air around us by absorbing toxins Most of us being urban dwellers spending their days in apartments with limited access to parks and ecological reserves, have no way of feeling close to nature and experiencing the benefits of being around plants. Ordering a pizza is easy but ever heard of ordering a plant to your doorstep? This is where nurserylive comes in. We believe that Green is Good and are here to enable Indians to access plants in the easiest way possible – online! We are here to shape the future of gardening!</Text>
            </View>
            {/* <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>Please check the products dimensions to ensure the product will fit in the desired location. Also, check if the product will fit through the entrances and doors of the premises</Text>
            </View> */}
            {/* <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>Flipkart, or the Seller delivering the product, will not take up any type of civil work, such as drilling holes in the wall to mount the product. The product will only be assembled in case carpentry assembly is required</Text>
            </View> */}
            {/* <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>In case the product appears to lack shine, wiping the surface with a cloth will help clear the surface of dust particles</Text>
            </View> */}

          </View>

          {/* <View style={{ marginHorizontal: 10, marginTop: 5 }}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: '#252460' }}>Terms And Conditions</Text>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>The Durability Certified badge is applied on products which have been tested by independent laboratories certified by the National Accreditation Board for Testing and Calibration Laboratories (NABL).</Text>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>The tests conducted by the laboratory depends on the type of furniture sent for testing. The sellers select the products which are to be sent for testing to the NABL certified laboratory.</Text>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>The tests simulate certain type of usage conditions of the furniture under test conditions. The tests are done using the European Standard (EN) prescribed by the European Committee for Standardisation.</Text>
            </View>


            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>Tests are done on a sample product and individual products sold are not tested. The test results may not be indicative or representative of the quality or characteristics of the lot from which a test sample was taken or any similar or identical product. The responsibility to ensure that the products sold are similar to the test sample is of the respective seller.</Text>
            </View>

            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>Successful test results and the Durability Certified badge does not necessarily imply life as per the durability certified badge. Life of the product depends on the usage, handling, environment and other external factors.</Text>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>The Durability Certified badge does not provide any additional warranty or guarantee over and above the manufacturer/seller warranty. Please refer to the warranty details for the product for more information.</Text>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>Flipkart does not provide any warranty or guarantee on any products. Warranty of any products purchased will be the responsibility of the sellers .</Text>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>Flipkart does not endorse any of the products or brands being offered under the Durability Certified badge and will not accept any liability pertaining to the quality, merchantability, fitness, delivery or after sales service of such products which shall be at the sole liability to sellers on the Platform.</Text>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginTop: 5 }}>
              <View style={{ height: 8, width: 8, borderRadius: 8, backgroundColor: '#252460', marginTop: 8 }} />
              <Text style={{ marginLeft: 10 }}>Durability Certified badge is available on select products by select sellers.</Text>
            </View>


          </View> */}


          <View style={{ marginHorizontal: 12, marginVertical: 5 }}>
            <Text style={{ fontWeight: '700', fontSize: 16, color: color.balck2 }}>Similar Product</Text>

            <ScrollView horizontal={true}>
              {[1, 2, 3, 4].map((el) => (
                <>
                  <View style={{ height: 150, width: 115, borderRadius: 10, margin: 5 }}>
                    <ImageBackground style={{ height: 150, width: 115, flexDirection: 'column', justifyContent: 'flex-end' }} source={require('../Images/gif/hiarcut.gif')} imageStyle={{ borderRadius: 10 }}>
                      <Image style={{ height: 40, width: '90%', alignSelf: 'center', resizeMode: 'contain', }} source={require('../Images/HAIRCUT.png')} />

                    </ImageBackground>

                  </View>
                </>
              ))}

              {/* <View style={{ height: 140, width: 110, backgroundColor: '#252460', borderRadius: 10, margin: 5 }}>
                <ImageBackground style={{ height: 95, width: '100%' }} source={require('../Images/ProductDetailsImg/1.png')}>
                  <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 7 }}>
                    <Image source={require('../Images/heart.png')} style={{ width: 18, height: 18, tintColor: '#FFFF' }} />
                  </TouchableOpacity>
                </ImageBackground>
                <View style={{ marginHorizontal: 8 }}>
                  <Text style={{ color: color.white, fontSize: 12, }}>Recliner Chair</Text>
                  <TouchableOpacity style={{ borderRadius: 10, height: 20, width: '90%', alignSelf: 'center', backgroundColor: '#252', marginTop: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 10, color: color.white, fontWeight: '600' }}>Add to cart</Text>
                  </TouchableOpacity>
                </View>
              </View> */}

              {/* <View style={{ height: 140, width: 110, backgroundColor: '#252460', borderRadius: 10, margin: 5 }}>
                <ImageBackground style={{ height: 95, width: '100%' }} source={require('../Images/ProductDetailsImg/1.png')}>
                  <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 7 }}>
                    <Image source={require('../Images/heart.png')} style={{ width: 18, height: 18, tintColor: '#FFFF' }} />
                  </TouchableOpacity>
                </ImageBackground>
                <View style={{ marginHorizontal: 8 }}>
                  <Text style={{ color: color.white, fontSize: 12, }}>Recliner Chair</Text>
                  <TouchableOpacity style={{ borderRadius: 10, height: 20, width: '90%', alignSelf: 'center', backgroundColor: '#252', marginTop: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 10, color: color.white, fontWeight: '600' }}>Add to cart</Text>
                  </TouchableOpacity>
                </View>
              </View> */}

              {/* <View style={{ height: 140, width: 110, backgroundColor: '#252460', borderRadius: 10, margin: 5 }}>
                <ImageBackground style={{ height: 95, width: '100%' }} source={require('../Images/ProductDetailsImg/1.png')}>
                  <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 7 }}>
                    <Image source={require('../Images/heart.png')} style={{ width: 18, height: 18, tintColor: '#FFFF' }} />
                  </TouchableOpacity>
                </ImageBackground>
                <View style={{ marginHorizontal: 8 }}>
                  <Text style={{ color: color.white, fontSize: 12, }}>Recliner Chair</Text>
                  <TouchableOpacity style={{ borderRadius: 10, height: 20, width: '90%', alignSelf: 'center', backgroundColor: '#252', marginTop: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 10, color: color.white, fontWeight: '600' }}>Add to cart</Text>
                  </TouchableOpacity>
                </View>
              </View> */}


            </ScrollView>




          </View>


          <View style={{ marginHorizontal: 12, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#FFF', elevation: 5, marginBottom: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: '800', color: color.buttonBlue }}>Customer Review</Text>
            <Image source={require('../Images/right-arrow.png')} style={{ height: 25, width: 20, alignSelf: 'center', tintColor: color.buttonBlue }} />



          </View>

          <View style={{ marginHorizontal: 15, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between', }}>
          <Image style={{ height: 150,width:'43%'}} source={require('../Images/ProductDetailsImg/1.png')} />
          <View style={{width:'55%',height:150,justifyContent:'space-between'}}>
          <Image style={{ height: 70,width:'100%' }} source={require('../Images/ProductDetailsImg/1.png')} />
          <Image style={{ height: 70,width:'100%' }} source={require('../Images/ProductDetailsImg/1.png')} />

          </View>
            {/* <View style={{width: '40%'}}> */}
            {/* <Image style={{ height: 150, resizeMode: 'stretch' }} source={require('../Images/ProductDetailsImg/1.png')} />
           
            <View style={{ marginLeft: 5, justifyContent: 'space-between',backgroundColor:'red' }}>

              <Image style={{ height: 70, resizeMode: 'stretch' }} source={require('../Images/ProductDetailsImg/1.png')} />

              <Image style={{ height: 70, resizeMode: 'stretch' }} source={require('../Images/ProductDetailsImg/3.png')} />
            </View> */}

          </View>

          <View style={{ marginHorizontal: 20, marginTop: 10, }}>
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
              <Image source={require('../Images/ProductDetailsImg/1.png')} style={{ height: 25, width: 25,borderRadius:30 }} />
              <Text style={{ marginLeft: 5, alignSelf: 'center' }}>Peter parker</Text>
            </View>
            <Text style={{ color: '#000', marginHorizontal: 5 }}>⭐⭐⭐⭐⭐ Varified Purchased</Text>
            <Text style={{ color: '#000', marginHorizontal: 5, marginTop: 5 }}>So far, I'm quite happy with my Neelkamal recliner (navy blue variant). It was very easy to assemble on my own. It's pretty comfortable, reclining mechanism is decent. However, like some other customers have also pointed out, there are a couple of shortcomings: 1) fabric quality is not very good, it's fading after just a month and 2) it does need strength to fold back. Good exercise for your legs 😉</Text>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Image source={require('../Images/ProductDetailsImg/1.png')} style={{ height: 25, width: 25,borderRadius:30 }} />
              <Text style={{ marginLeft: 5, alignSelf: 'center' }}>Peter parker</Text>
            </View>
            <Text style={{ color: '#000', marginHorizontal: 5 }}>⭐⭐⭐⭐⭐ Varified Purchased</Text>
            <Text style={{ color: '#000', marginHorizontal: 5, marginTop: 5 }}>So far, I'm quite happy with my Neelkamal recliner (navy blue variant). It was very easy to assemble on my own. It's pretty comfortable, reclining mechanism is decent. However, like some other customers have also pointed out, there are a couple of shortcomings: 1) fabric quality is not very good, it's fading after just a month and 2) it does need strength to fold back. Good exercise for your legs 😉</Text>
          </View>






















        </ScrollView>


        {/* <TouchableOpacity style={{bottom:10,backgroundColor:'#252460',alignSelf:'center',borderRadius:30,position:'absolute',}} onPress={()=>props.navigation.navigate('Cart')}>
  <Text style={{color:'#FFF',margin:10,fontSize:18,fontWeight:'800'}}>Add To Card <Image  source={require('../Images/shopping-cart.png')} style={{height:20,width:25,tintColor:'#FFF'}} /></Text>
</TouchableOpacity> */}


      </View>

    </>
  )
}

export default ProductDetails




