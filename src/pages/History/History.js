import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { color } from '../../component/color'

const History = (props) => {



    return (
        <View style={{ flex: 1, backgroundColor: color.white, }}>
            <View style={{ marginHorizontal: 15, marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => props.navigation.pop()}>
                    <Image source={require('../../Images/back.png')} style={{ height: 30, width: 28 }} />
                </TouchableOpacity>
                <Text style={{ fontWeight: '700', fontSize: 20, color: color.black }}>
                    History
                </Text>
                {/* for Empty Space */}
                <Text>     </Text>
            </View>


            <View style={{ backgroundColor:color.white, width: '90%', height: 170, alignSelf: 'center', marginVertical: 10, borderRadius: 10, elevation: 8 }}>
                <View style={{ padding: 15 }}>
                    <Text style={{ color: color.Green }}>Job Completed</Text>
                    <Text style={{ marginTop: 15, fontSize: 17, fontWeight: '500', color: color.black }}>Move-In Bathroom cleaning</Text>
                    <Text style={{ marginTop: 10, fontSize: 13, fontWeight: '300', color: color.black }}>Wed, Sep 14, 2023 at 11:00 AM</Text>
                    <View style={{ padding: 0.5, backgroundColor: color.textGrey, marginTop: 10 }} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{flexDirection:'row',marginVertical:20 }}>
                            <Image style={{ height: 20, width: 20 }} source={require('../../Images/OkIcon.png')} />
                            <Text style={{marginLeft:10}}>Amount Paid $50.89</Text>
                        </View>
                        <TouchableOpacity style={{width:'35%',backgroundColor:color.buttonYellow,height:30,alignSelf:'center',justifyContent:'center',alignItems:'center',borderRadius:10}}>
                            <Text style={{fontWeight:'900',color:color.black}}>Book Again</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* 
            <View style={{ marginHorizontal: 15, marginTop: 10, flexDirection: 'row' }}>
                <Image source={require('../../Images/profile.png')} style={{ height: 110, width: 100, }} />

                <Text style={{ alignSelf: 'flex-end', marginLeft: 20, marginBottom: 5, fontSize: 18 }}>Edit Profile  <TouchableOpacity><Image source={require('../../Images/editIcon.png')} style={{ height: 18, width: 16, resizeMode: 'contain', }} /></TouchableOpacity></Text>
            </View> */}


            {/* <View style={{marginHorizontal:15,marginTop:40,paddingHorizontal:10}}>
                <View>
                <Text style={{fontSize:18,color:color.black,fontWeight:'500'}}>Name</Text>
                <TextInput style={{marginLeft:20,padding:0,height:40,fontSize:18,marginVertical:10,fontWeight:'300'}}
                placeholder='Mr. Tony Stark'
                placeholderTextColor={color.black}
                 />
                </View>
                <View>
                <Text style={{fontSize:18,color:color.black,fontWeight:'500'}}>Mobile</Text>
                <TextInput style={{marginLeft:20,padding:0,height:40,fontSize:18,marginVertical:10,fontWeight:'300'}}
                placeholder='(+91) 123123123'
                placeholderTextColor={color.black}
                 />
                </View>
                <View>
                <Text style={{fontSize:18,color:color.black,fontWeight:'500'}}>Email</Text>
                <TextInput style={{marginLeft:20,padding:0,height:40,fontSize:18,marginVertical:10,fontWeight:'300'}}
                placeholder='Tonystark@mail.com'
                placeholderTextColor={color.black}
                 />
                </View>
                <View>
                <Text style={{fontSize:18,color:color.black,fontWeight:'500'}}>Address</Text>
                <TextInput style={{marginLeft:20,padding:0,height:40,fontSize:18,marginVertical:10,fontWeight:'300'}}
                placeholder='247, Park Street, NY, 110048'
                placeholderTextColor={color.black}
                 />
                </View>

            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:50,width:'60%',alignSelf:'center'}}>
                <TouchableOpacity style={{paddingVertical:7,paddingHorizontal:25,borderRadius:10,borderWidth:2,borderColor:color.buttonYellow}}>
                    <Text style={{fontSize:16,fontWeight:'500',color:color.black}}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical:7,paddingHorizontal:25,backgroundColor:color.buttonYellow,borderRadius:10}}>
                    
                    <Text style={{fontSize:16,fontWeight:'500',color:color.black}}>Save</Text>
                </TouchableOpacity>
            </View> */}





        </View>
    )
}

export default History