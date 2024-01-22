import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../component/color'

const Welcome = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: color.white, }}>
            <ImageBackground style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }} source={require('../Images/OnboardImage.png')}>
                <Text style={{ fontSize: 25, fontWeight: '700', color:color.textGrey2 }}>Seamless Solutions,</Text>
                <Text style={{
                    fontSize: 25, fontWeight: '700', color: color.textGrey2, marginTop: 10
                }}>Daily Revolutions </Text>
                <Image source={require('../Images/Trusted2.png')} style={{ marginTop: 20, width: '55%', height: 50, marginTop: 40,resizeMode:'contain' }} />
                <Text style={{
                    fontSize: 25, fontWeight: '700', color: color.textGrey2, marginTop: 25
                }}>Service Partner</Text>

                <View style={{ width: '70%', marginTop: 50 }}>
                    {/* ... (pagination dots or buttons) */}
                    <TouchableOpacity
                    onPress={()=>props.navigation.navigate('Login')}
                        //   onPress={onExplorePress}
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 12,
                            borderRadius: 25,
                            backgroundColor: color.buttonYellow
                        }}>
                        <Text style={{ color: '#FFF', fontSize: 15, fontWeight: '500', textAlign: 'center', }}>Login</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{marginVertical:20,color: color.textblue,fontWeight:'500',fontSize:16}}>OR</Text>
                <View style={{ width: '70%', }}>
                    {/* ... (pagination dots or buttons) */}
                    <TouchableOpacity
                          onPress={()=>props.navigation.navigate('SignUp')}
                        style={{
                            paddingHorizontal: 20,
                            paddingVertical: 12,
                            borderRadius: 25,
                            backgroundColor: color.white,
                            borderWidth:2,
                            borderColor:color.buttonYellow
                        }}>
                        <Text style={{ color: color.buttonYellow, fontSize: 16, fontWeight: '500', textAlign: 'center', }}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )   
}

export default Welcome