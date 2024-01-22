import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color } from '../../component/color'

const Language = (props) => {


    const [address, setaddress] = useState([{Language:'English' },{Language:'Spanish' },{Language:'Korean' },{Language:'Javanese' },{Language:'Hindi' } ,{Language:'French'},{Language:'Italian'},{Language:'Chinese'},{Language:'Mexican'} ])


    const [currentIndex, setcurrentIndex] = useState(0)

    return (
        <View style={{ flex: 1, backgroundColor: color.white, }}>
            <View style={{ marginHorizontal: 15, marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => props.navigation.pop()}>
                    <Image source={require('../../Images/back.png')} style={{ height: 30, width: 28 }} />
                </TouchableOpacity>
                <Text style={{ fontWeight: '700', fontSize: 20, color: color.black }}>
                    Language
                </Text>
                {/* for Empty Space */}
                <Text>     </Text>
            </View>

           <View style={{marginTop:20,}}>

            {address.map((elemant, index) => (

                <View style={{ backgroundColor: color.white, width: '85%', height: 45, alignSelf: 'center', marginVertical: 5, borderRadius: 10, elevation: 8 }}>
                    <View style={{ paddingVertical:10,paddingHorizontal:15}}>
                        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>setcurrentIndex(index)}>
                            <View style={{alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:color.black,borderRadius:30,padding:4,marginRight:10}}>
                                <View style={{height:15,width:15,borderRadius:30,backgroundColor:
                                    index===currentIndex?color.buttonBlue:color.white,borderWidth:index===currentIndex?0:1}} />
                            </View>
                        <Text style={{ color: color.black,fontWeight:'300',fontSize:16,marginLeft:10 }}>{elemant?.Language}</Text>
                        </TouchableOpacity>
                       
                       
                    </View>
                </View>

            ))}
           
            </View>
            <View style={{flexDirection:'row',width:'60%',alignSelf:'center',marginTop:40,justifyContent:'space-between'}}
            >
                <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:20,borderRadius:10,borderColor:color.buttonYellow,borderWidth:1}}>

                <Text  style={{color:color.black,fontWeight:'600',fontSize:16}}>Edit </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingVertical:10,paddingHorizontal:20,borderRadius:10,backgroundColor:color.buttonYellow}}>

                <Text  style={{color:color.black,fontWeight:'600',fontSize:16}}>Save </Text>
                </TouchableOpacity>
              

            </View>




        </View>
    )
}

export default Language