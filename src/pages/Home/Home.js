import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { color } from '../../component/color'

const Home = (props) => {


  
  return (
    <View style={{ flex: 1, backgroundColor: color.white }}>
      {/* header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginTop: 6, height: 32, width: 32, borderTopLeftRadius: 18, borderTopRightRadius: 18, borderBottomLeftRadius: 18, backgroundColor:color.buttonYellow, justifyContent: 'center', alignItems: 'center' }} >
            <Image style={{ height: 20, width: 20, tintColor: color.white }} source={require('../../Images/location.png')} />
          </View>
          <View style={{ borderBottomWidth: 2, borderColor: color.buttonYellow, paddingHorizontal: 10 }}>
            <TouchableOpacity style={{ alignSelf: 'center', marginTop: 8, flexDirection: 'row' }}>
              <Text style={{ marginHorizontal: 10, fontWeight: '500' }}>Florida City </Text>
              <Image source={require('../../Images/down.png')} style={{ height: 10, width: 15, alignSelf: 'center', marginLeft: 10 }} />
            </TouchableOpacity>

          </View>




        </View>
        <TouchableOpacity onPress={()=>props.navigation.navigate('My_Profile')}>
          <Text style={{ fontWeight: '500', textAlign: 'right',color:color.black }}>Hello3</Text>
          <Text style={{ fontWeight: '500', textAlign: 'right',color:color.black }}>Sopia James</Text>
        </TouchableOpacity>
      </View>

      {/* Search bar */}
      <View style={{ padding: 10, borderRadius: 20, backgroundColor: color.inputGrey, flexDirection: 'row', marginVertical: 10, marginHorizontal: 15, elevation: 10 }}>
        <Image source={require('../../Images/search.png')} style={{ height: 22, width: 22, tintColor: color.buttonYellow, }} />

        <TextInput style={{ height: 20, width: '80%', marginHorizontal: 10, padding: 0, fontSize: 15 }}
          placeholder='Search' />
      </View>

      <ScrollView>
        {/* most popular services */}

        <View style={{ margin: 10, }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: color.black, marginHorizontal: 5 }}>10 Most Popular Services</Text>
          <ScrollView horizontal={true} style={{ marginVertical: 5 }}>

            {[1, 2, 3, 4].map((el) => (
              <>
                <View style={{ height: 150, width: 115, borderRadius: 10, margin: 5 }}>
                  <ImageBackground style={{ height: 150, width: 115, flexDirection: 'column', justifyContent: 'flex-end' }} source={require('../../Images/gif/hiarcut.gif')} imageStyle={{ borderRadius: 10 }}>
                    <Image style={{ height: 40, width: '90%', alignSelf: 'center', resizeMode: 'contain', }} source={require('../../Images/HAIRCUT.png')} />

                  </ImageBackground>

                </View>

              </>
            ))}



           

          </ScrollView>

        </View>

        {/* Hpusing and mantance */}
        <View style={{ marginHorizontal: 10, }}>
          <View style={{ marginHorizontal: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color:color.black, }}>Housing & Maintenance</Text>
            <Text style={{ fontWeight: '500', color:color.black }}>See all</Text>
          </View>
          <ScrollView horizontal={true} style={{ marginVertical: 5 }}>

            {[1, 2, 3, 4].map((el) => (
              <>
                <View style={{ height: 180, width: 220, borderRadius: 10, margin: 5 }}>
                  <ImageBackground style={{ height: 180, width: 220, flexDirection: 'column', justifyContent: 'flex-end' }} source={require('../../Images/gif/hiarcut.gif')} imageStyle={{ borderRadius: 10 }}>

                    <View style={{ backgroundColor:color.black, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, paddingHorizontal: 10, paddingVertical: 4 }}>
                      <Text style={{ color: color.white, fontSize: 16, fontWeight: '600' }}>Garening</Text>
                      <Text style={{ color: color.white, fontSize: 12, fontWeight: '400', textDecorationLine: 'underline' }}>50+ Professionals  ➝</Text>

                    </View>
                    
                  </ImageBackground>

                </View>

              </>
            ))}





          </ScrollView>

        </View>

        {/* Offer For You  */}

        <View style={{ margin: 10, }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: color.black, marginHorizontal: 5 }}>Offers for you</Text>
          <ScrollView horizontal={true} style={{ marginVertical: 5 }}>

            {[1, 2, 3, 4].map((el) => (
              <>
                <View style={{ height: 150, width: 115, borderRadius: 10, margin: 5 }}>
                  <ImageBackground style={{ height: 150, width: 115, flexDirection: 'column', justifyContent: 'flex-end' }} source={require('../../Images/gif/hiarcut.gif')} imageStyle={{ borderRadius: 10 }}>
                    <Image style={{ height: 40, width: '90%', alignSelf: 'center', resizeMode: 'contain', }} source={require('../../Images/HAIRCUT.png')} />

                  </ImageBackground>

                </View>

              </>
            ))}





          </ScrollView>

        </View>


          {/* Hpusing and mantance */}
          <View style={{ marginHorizontal: 10, }}>
          <View style={{ marginHorizontal: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: color.black, }}>Housing & Maintenance</Text>
            <Text style={{ fontWeight: '500', color: color.black }}>See all</Text>
          </View>
          <ScrollView horizontal={true} style={{ marginVertical: 5 }}>

            {[1, 2, 3, 4].map((el) => (
              <>
                <View style={{ height: 180, width: 220, borderRadius: 10, margin: 5 }}>
                  <ImageBackground style={{ height: 180, width: 220, flexDirection: 'column', justifyContent: 'flex-end' }} source={require('../../Images/gif/hiarcut.gif')} imageStyle={{ borderRadius: 10 }}>

                    <View style={{ backgroundColor: color.black, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, paddingHorizontal: 10, paddingVertical: 4 }}>
                      <Text style={{ color:color.white, fontSize: 16, fontWeight: '600' }}>Garening</Text>
                      <Text style={{ color:color.white, fontSize: 12, fontWeight: '400', textDecorationLine: 'underline' }}>50+ Professionals  ➝</Text>

                    </View>
                 

                  </ImageBackground>

                </View>

              </>
            ))}





          </ScrollView>

        </View>

          {/* Hpusing and mantance */}
          <View style={{ marginHorizontal: 10, }}>
          <View style={{ marginHorizontal: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: color.black, }}>Housing & Maintenance</Text>
            <Text style={{ fontWeight: '500', color: color.black }}>See all</Text>
          </View>
          <ScrollView horizontal={true} style={{ marginVertical: 5 }}>

            {[1, 2, 3, 4].map((el) => (
              <>
                <View style={{ height: 180, width: 220, borderRadius: 10, margin: 5 }}>
                  <ImageBackground style={{ height: 180, width: 220, flexDirection: 'column', justifyContent: 'flex-end' }} source={require('../../Images/gif/hiarcut.gif')} imageStyle={{ borderRadius: 10 }}>

                    <View style={{ backgroundColor: color.black, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, paddingHorizontal: 10, paddingVertical: 4 }}>
                      <Text style={{ color: color.white, fontSize: 16, fontWeight: '600' }}>Garening</Text>
                      <Text style={{ color: color.white, fontSize: 12, fontWeight: '400', textDecorationLine: 'underline' }}>50+ Professionals  ➝</Text>

                    </View>
                 
                  </ImageBackground>

                </View>

              </>
            ))}





          </ScrollView>

        </View>
          {/* Hpusing and mantance */}
          <View style={{ marginHorizontal: 10, }}>
          <View style={{ marginHorizontal: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: '700', color: color.black, }}>Housing & Maintenance</Text>
            <Text style={{ fontWeight: '500', color:color.black }}>See all</Text>
          </View>
          <ScrollView horizontal={true} style={{ marginVertical: 5 }}>

            {[1, 2, 3, 4].map((el) => (
              <>
                <View style={{ height: 180, width: 220, borderRadius: 10, margin: 5 }}>
                  <ImageBackground style={{ height: 180, width: 220, flexDirection: 'column', justifyContent: 'flex-end' }} source={require('../../Images/gif/hiarcut.gif')} imageStyle={{ borderRadius: 10 }}>

                    <View style={{ backgroundColor:color.black, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, paddingHorizontal: 10, paddingVertical: 4 }}>
                      <Text style={{ color:color.white, fontSize: 16, fontWeight: '600' }}>Garening</Text>
                      <Text style={{ color:color.white, fontSize: 12, fontWeight: '400', textDecorationLine: 'underline' }}>50+ Professionals  ➝</Text>

                    </View>
                   

                  </ImageBackground>

                </View>

              </>
            ))}





          </ScrollView>

        </View>

        <View style={{ margin: 10, }}>
          <Text style={{ fontSize: 20, fontWeight: '700', color: color.black, marginHorizontal: 5 }}>Offers for you</Text>
          <ScrollView horizontal={true} style={{ marginVertical: 5 }}>

            {[1, 2, 3, 4].map((el) => (
              <>
                <View style={{ height: 150, width: 115, borderRadius: 10, margin: 5 }}>
                  <ImageBackground style={{ height: 150, width: 115, flexDirection: 'column', justifyContent: 'flex-end' }} source={require('../../Images/gif/hiarcut.gif')} imageStyle={{ borderRadius: 10 }}>
                    <Image style={{ height: 40, width: '90%', alignSelf: 'center', resizeMode: 'contain', }} source={require('../../Images/HAIRCUT.png')} />

                  </ImageBackground>

                </View>

              </>
            ))}





          </ScrollView>

        </View>



      </ScrollView>


    </View>

  )
}

export default Home


