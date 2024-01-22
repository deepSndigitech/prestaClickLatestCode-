import { View, Text, Image, TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { color } from '../../component/color'

const Account = (props) => {



    return (
        <View style={{ flex: 1, backgroundColor: color.white, }}>
            <View style={{ marginHorizontal:15,marginVertical:15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={()=>props.navigation.pop()}> 
                    <Image source={require('../../Images/back.png')} style={{ height: 30, width: 28 }} />
                </TouchableOpacity>
                <Text style={{ fontWeight: '700', fontSize: 20, color: color.black }}>
                    Account
                </Text>
                {/* for Empty Space */}
                <Text>     </Text>
            </View>

            <View style={{ marginHorizontal: 15, marginTop: 10, flexDirection: 'row' }}>
                <Image source={require('../../Images/profile.png')} style={{ height: 110, width: 100, }} />

                <Text style={{ alignSelf: 'flex-end', marginLeft: 20, marginBottom: 5, fontSize: 18 }}>Edit Profile  <TouchableOpacity><Image source={require('../../Images/editIcon.png')} style={{ height: 18, width: 16, resizeMode: 'contain', }} /></TouchableOpacity></Text>
            </View>


            <View style={{marginHorizontal:15,marginTop:40,paddingHorizontal:10}}>
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
            </View>





        </View>
    )
}

export default Account