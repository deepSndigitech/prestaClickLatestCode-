import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { color } from '../../component/color'

const My_Profile = (props) => {



    return (
        <View style={{ flex: 1, backgroundColor:color.white }}>
            <View style={{ marginHorizontal: 15, marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={()=>props.navigation.pop()}>
                    <Image source={require('../../Images/back.png')} style={{ height: 30, width: 28 }} />
                </TouchableOpacity>
                <Text style={{ fontWeight: '700', fontSize: 20, color: color.black }}>
                    Profile
                </Text>
                {/* for Empty Space */}
                <Text>     </Text>
            </View>

            {/* Person Profiles  */}
            <View style={{width:'90%',height:100,backgroundColor:color.buttonYellow,marginTop:10,flexDirection:'row',justifyContent:'space-between',borderTopRightRadius:40,borderBottomRightRadius:40}}>
                <View style={{padding:10,marginHorizontal:15,justifyContent:'center'}}>
                    <Text style={{fontSize:26,fontWeight:'700',color:color.white}}>Tony Stark</Text>
                    <Text style={{fontSize:12,color:color.white}}> +91-987654321</Text>
                </View>

                <Image   source={require('../../Images/profile.png')} style={{height:110,width:100,marginTop:-2}}/>

            </View>



            {/* menu Starts */}
            <TouchableOpacity  style={{marginHorizontal:20,marginTop:20,flexDirection:'row'}} onPress={()=>props.navigation.navigate('Account')}>
                <View style={{padding:10,borderTopLeftRadius:25,borderBottomLeftRadius:25,borderTopRightRadius:25,backgroundColor:color.buttonYellow}}>
                    <Image style={{height:25,width:25,}}  source={require('../../Images/profleIcon.png')} />
                </View>
                <Text style={{fontSize:22,fontWeight:'400',marginLeft:15,alignSelf:'center',color:color.black}}>Account</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={{marginHorizontal:20,marginTop:20,flexDirection:'row'}} onPress={()=>props.navigation.navigate('History')}>
                <View style={{padding:10,borderTopLeftRadius:25,borderBottomLeftRadius:25,borderTopRightRadius:25,backgroundColor:color.buttonYellow}}>
                    <Image style={{height:25,width:25,}}  source={require('../../Images/histryIcon.png')} />
                </View>
                <Text style={{fontSize:22,fontWeight:'400',marginLeft:15,alignSelf:'center',color:color.black}}>History</Text>

            </TouchableOpacity>
            <TouchableOpacity  style={{marginHorizontal:20,marginTop:20,flexDirection:'row'}} onPress={()=>props.navigation.navigate('Saved_Address')}>
                <View style={{padding:10,borderTopLeftRadius:25,borderBottomLeftRadius:25,borderTopRightRadius:25,backgroundColor:color.buttonYellow}}>
                    <Image style={{height:25,width:25,resizeMode:'contain'}}  source={require('../../Images/locationIcon.png')} />
                </View>
                <Text style={{fontSize:22,fontWeight:'400',marginLeft:15,alignSelf:'center',color:color.black}}>Saved Address</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{marginHorizontal:20,marginTop:20,flexDirection:'row'}} onPress={()=>props.navigation.navigate('Language')}>
                <View style={{padding:10,borderTopLeftRadius:25,borderBottomLeftRadius:25,borderTopRightRadius:25,backgroundColor:color.buttonYellow}}>
                    <Image style={{height:25,width:25,resizeMode:'contain'}}  source={require('../../Images/langIcon.png')} />
                </View>
                <Text style={{fontSize:22,fontWeight:'400',marginLeft:15,alignSelf:'center',color:color.black}}>Language</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{marginHorizontal:20,marginTop:20,flexDirection:'row'}} onPress={()=>props.navigation.navigate('Favourite')}>
                <View style={{padding:10,borderTopLeftRadius:25,borderBottomLeftRadius:25,borderTopRightRadius:25,backgroundColor:color.buttonYellow}}>
                    <Image style={{height:25,width:25,resizeMode:'contain'}}  source={require('../../Images/mesgIcon.png')} />
                </View>
                <Text style={{fontSize:22,fontWeight:'400',marginLeft:15,alignSelf:'center',color:color.black}}>My Favourite</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{marginHorizontal:20,marginTop:20,flexDirection:'row'}} onPress={()=>props.navigation.navigate('Quotation')}>
                <View style={{padding:10,borderTopLeftRadius:25,borderBottomLeftRadius:25,borderTopRightRadius:25,backgroundColor:color.buttonYellow}}>
                    <Image style={{height:25,width:25,resizeMode:'contain'}}  source={require('../../Images/mesgIcon.png')} />
                </View>
                <Text style={{fontSize:22,fontWeight:'400',marginLeft:15,alignSelf:'center',color:color.black}}>My Quotation</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={{marginHorizontal:20,marginTop:20,flexDirection:'row'}}>
                <View style={{padding:10,borderTopLeftRadius:25,borderBottomLeftRadius:25,borderTopRightRadius:25,backgroundColor:color.buttonYellow}}>
                    <Image style={{height:25,width:25,resizeMode:'contain'}}  source={require('../../Images/logoutIcon.png')} />
                </View>
                <Text style={{fontSize:22,fontWeight:'400',marginLeft:15,alignSelf:'center',color:color.black}}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default My_Profile