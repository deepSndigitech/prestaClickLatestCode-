import { View, Text, ScrollView, Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { color } from '../../component/color'
// import {AntDesign,} from 'react-native-vector-icons/AntDesign'   


const Service = (props) => {

    const [filterdata, setFilterdata] = useState([{ id: 1, place: 'Top Rated' }, { id: 2, place: 'Most Popular ' }, { id: 3, place: 'Low To High' }, { id: 4, place: 'High To Low' }])

    const [filterMenu, setfilterMenu] = useState(["Plantation", "Tree cutting", "Lawn protect and feed", "Pruning", "Start-up and shut-down irrigation system", "Mulching", "Watering", "Animal Fencing"])

    const [curIndex, setcurIndex] = useState(0)
    const [menuIndex, setmenuIndex] = useState(0)

    return (
        <View style={{ flex: 1, backgroundColor: color.white, paddingHorizontal: 10 }}>
            <View style={{}}>
                <ScrollView horizontal style={{}} >
                    {filterdata.map((element, index) => (

                        <TouchableOpacity style={{ marginVertical: 20, marginHorizontal: 8, borderRadius: 20, backgroundColor: 'green', paddingHorizontal: 20, paddingVertical: 12, backgroundColor: index === curIndex ? color.buttonBlue : color.greyBack }} onPress={() => setcurIndex(index)}>
                            <Text style={{ fontSize: 14, color: index === curIndex ? color.white : color.black }}>
                                {element?.place}
                            </Text>
                        </TouchableOpacity>

                    ))}
                </ScrollView>

            </View>

            <View style={{ marginTop: 10, height: 130 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ padding: 6, backgroundColor: color.greyBack, margin: 5, borderRadius: 14, color: color.buttonBlue }}>
                        Plantation
                    </Text>
                    <Text style={{ padding: 6, backgroundColor: color.greyBack, margin: 5, borderRadius: 14, color: color.buttonBlue }}>
                        Tree cutting
                    </Text>
                    <Text style={{ padding: 6, backgroundColor: color.greyBack, margin: 5, borderRadius: 14, color: color.buttonBlue }}>
                        Lawn protect and feed
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ padding: 6, backgroundColor: color.greyBack, margin: 5, borderRadius: 14, color: color.buttonBlue }}>
                        Pruning
                    </Text>
                    <Text style={{ padding: 6, backgroundColor: color.greyBack, margin: 5, borderRadius: 14, color: color.buttonBlue }}>
                        Start-up and shut-down irrigation system
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ padding: 6, backgroundColor: color.greyBack, margin: 5, borderRadius: 14, color: color.buttonBlue }}>
                        Mulching
                    </Text>
                    <Text style={{ padding: 6, backgroundColor: color.greyBack, margin: 5, borderRadius: 14, color: color.buttonBlue }}>
                        Watering
                    </Text>
                    <Text style={{ padding: 6, backgroundColor: color.greyBack, margin: 5, borderRadius: 14, color: color.buttonBlue }}>
                        Animal Fencing
                    </Text>
                </View>



            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            {[1,2,3,4,5].map((ele,) => (
            <TouchableOpacity activeOpacity={0.85} onPress={()=>props.navigation.navigate('ProductDetails')}>
                <View style={{ marginVertical: 5, backgroundColor: color.white, height: 130, flexDirection: 'row', borderRadius: 15, elevation: 5, borderWidth: 0.5, borderColor: color.greyBack }}>
                    <View style={{ width: '30%' }}>
                        <Image source={require('../../Images/gardring.png')} style={{ height: '100%', width: '100%', resizeMode: 'cover', borderTopLeftRadius: 15, borderBottomLeftRadius: 15 }} />

                    </View>
                    <View style={{ width: '70%', padding: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text style={{ fontSize: 18, fontWeight: '700', color: color.black }}>Tree Plantation</Text>
                            <TouchableOpacity >
                                <Image source={require('../../Images/heart.png')} style={{ height: 20, width: 20, tintColor: color.buttonBlue, marginRight: 5 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: 7 }}>

                            <Text style={{ fontSize: 15 }}>⭐4.2</Text>
                        </View>
                        <Text style={{
                            fontSize: 16, fontWeight: '300', color: color.black
                        }}>All of them will be able to give you value for your money.</Text>
                        <Text style={{ textAlign: 'right', fontSize: 13, fontStyle: 'italic', fontWeight: '600', color: color.black }}>From 10 000 F</Text>
                    </View>

                </View>

            </TouchableOpacity>))
            } 
            </ScrollView>


        </View>
    )
}

export default Service