import { View, Text, ImageBackground, TouchableOpacity, TextInput,Image } from 'react-native'
import React from 'react'
import { color } from '../../component/color'

const Login = (props) => {
    return (

        <View style={{ flex: 1, backgroundColor: color.white, }}>
            <ImageBackground style={{ height: '100%', width: '100%', }} source={require('../../Images/ImageBack.png')}>
                <TouchableOpacity style={{ alignSelf: 'flex-end', paddingVertical: 6, paddingHorizontal: 16, borderRadius: 20, backgroundColor: '#FFF', borderWidth: 1, borderColor: color.buttonYellow , margin: 15 }}>
                    <Text style={{ fontWeight: '500', color: color.buttonYellow }}>Skip</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <Text style={{ fontSize: 20, color: color.buttonYellow , fontWeight: '500' }}>Login to your Account</Text>
                    <View style={{ marginVertical: 30, width: '80%', }}>
                        <TextInput style={{ alignSelf: 'center', width: '100%', backgroundColor: color.inputGrey, height: 40, paddingHorizontal: 10, borderRadius: 10, elevation: 4 }}
                            placeholder='Enter Mobile Number' />
                        <TextInput style={{ alignSelf: 'center', width: '100%', backgroundColor: color.inputGrey, height: 40, paddingHorizontal: 10, borderRadius: 10, elevation: 4, marginTop: 15 }}
                            placeholder='Enter Password' />

                        <View style={{
                            width: '70%', marginTop: 30, alignSelf: 'center'
                        }}>
                            {/* ... (pagination dots or buttons) */}
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('Login')}
                                //   onPress={onExplorePress}
                                style={{
                                    paddingHorizontal: 20,
                                    paddingVertical: 12,
                                    borderRadius: 25,
                                    backgroundColor: color.buttonYellow
                                }}>
                                <Text style={{ color: color.white, fontSize: 15, fontWeight: '500', textAlign: 'center', }}>Login</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 60 }}>

                            <View style={{ height: 2, marginTop: 9, backgroundColor:color.buttonYellow, width: 70, marginLeft: 7 }} />
                            <Text style={{ marginLeft: 7, fontWeight: '400', color:color.buttonYellow }}>OR Signup With</Text>
                            <View style={{ height: 2, marginTop: 9, backgroundColor:color.buttonYellow, width: 70, marginLeft: 7 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
                                <Image source={require('../../Images/google.png')} style={{height:40,width:40,resizeMode:'contain',marginHorizontal:15}} />
                                <Image source={require('../../Images/facebook.png')} style={{height:40,width:40,resizeMode:'contain',marginHorizontal:15}} />
                                <Image source={require('../../Images/twitter.png')} style={{height:40,width:40,resizeMode:'contain',marginHorizontal:15}} />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>

    )
}

export default Login