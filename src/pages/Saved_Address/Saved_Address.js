import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color } from '../../component/color'

const Saved_Address = (props) => {


    const [address, setaddress] = useState([{ id: 1, place: 'Home' }, { id: 2, place: 'Office' }, { id: 3, place: 'Address1' }])


    const [currentIndex, setcurrentIndex] = useState(0)

    return (
        <View style={{ flex: 1, backgroundColor: color.white, }}>
            <View style={{ marginHorizontal: 15, marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => props.navigation.pop()}>
                    <Image source={require('../../Images/back.png')} style={{ height: 30, width: 28 }} />
                </TouchableOpacity>
                <Text style={{ fontWeight: '700', fontSize: 20, color: color.black }}>
                    Saved Address
                </Text>
                {/* for Empty Space */}
                <Text>     </Text>
            </View>

            <TouchableOpacity style={{ marginVertical: 10, width: '80%', padding: 10, backgroundColor: color.buttonYellow, alignSelf: 'center', borderRadius: 10, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Image style={{ height: 20, width: 20, marginTop: 4 }} source={require('../../Images/plus.png')} />
                    <Text style={{ fontSize: 20, textAlign: 'center', marginLeft: 10, fontWeight: '600', color: color.black }}>Add New Address</Text>


                </View>
            </TouchableOpacity>

            {address.map((elemant, index) => (

                <View style={{ backgroundColor: color.white, width: '90%', height: 150, alignSelf: 'center', marginVertical: 10, borderRadius: 10, elevation: 8 }}>
                    <View style={{ padding: 15 }}>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>setcurrentIndex(index)}>
                            <View style={{alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:color.black,borderRadius:30,padding:4,marginRight:10}}>
                                <View style={{height:15,width:15,borderRadius:30,backgroundColor:
                                    index===currentIndex?color.buttonBlue:color.white}} />
                            </View>
                        <Text style={{ color: color.black,fontWeight:'700',fontSize:18 }}>{elemant?.place}</Text>
                        </TouchableOpacity>
                        {/* <Text style={{ marginTop: 15, fontSize: 17, fontWeight: '500', color: color.black }}>Move-In Bathroom cleaning</Text> */}
                        <Text style={{ marginTop: 25, fontSize: 14, fontWeight: '400', color: color.black }}>Ground Floor, Eros Plaza, Eros Corporate Centre, Nehru Place, New Delhi-110019 Delhi South Delhi DL IN 110019</Text>

                        <Image  source={require('../../Images/more.png')} style={{height:25,width:25,marginTop:5}} />
                       
                    </View>
                </View>

            ))}




        </View>
    )
}

export default Saved_Address