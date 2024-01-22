import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image,View,Text } from 'react-native';
import { connect } from 'react-redux';

import Home from '../pages/Home/Home';
import Quotation from '../pages/Quotation/Quotation';
import { color } from '../component/color';
import My_Quotation from '../pages/Quotation/My_Quotation';
import My_Profile from '../pages/My_Profile/My_Profile';

const Tab = createBottomTabNavigator();

const BottomTab = (props) => {

   



    return (
        <Tab.Navigator
        tabBarOptions={{ showLabel: false }}
            screenOptions={({ route }) => ({
                // tabBarActiveTintColor: '#f88d04',
                // tabBarInactiveTintColor: '#fff',
                
                tabBarStyle: [{ backgroundColor:color.textGrey2,borderTopRightRadius:15,borderTopLeftRadius:15,height:50 }],


                tabBarIcon: ({ focused }) => {
                    if (route.name === 'Home') {
                        return (
                          
                          <View style={{justifyContent:'center',alignItems:'center'}}>
                          <Image source={require('../Images/home.png')} style={{ tintColor: focused ? color.buttonYellow : '#FFF', height:28, width:28 }} />
                          {focused && <Text style={{ color:color.buttonYellow,alignSelf:'center',marginLeft:5,fontSize:12,fontWeight:'700' }}>{"Home"}</Text>}
                          </View>

                        );

                    } else if (route.name === 'Planner') {
                      return (
                          
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../Images/calendar.png')} style={{ tintColor: focused ? color.buttonYellow : '#FFF', height:28, width:28 }} />
                        {focused && <Text style={{ color:color.buttonYellow,alignSelf:'center',marginLeft:5,fontSize:12,fontWeight:'700' }}>{"Planner"}</Text>}
                        </View>

                      );

                    }  else if (route.name === 'Post') {
                      return (
                          <View style={{height:70,width:70,justifyContent:'center',alignItems:'center',borderRadius:35,backgroundColor:'#FFF',marginTop:-50}}>
                        <View style={{backgroundColor:focused?'#FFF':null,padding:focused ?6:0,backgroundColor:'#FFF',height:60,width:60,borderRadius:30,justifyContent:'center',alignItems:'center',borderWidth:3,borderCurve:'continuous',borderColor:color.buttonYellow}}>
                        <Image source={require('../Images/plus.png')} style={{ tintColor: focused ? '#000' : '#FFF', height:25, width:25,resizeMode:'contain',tintColor:color.buttonYellow }} />
                         <Text style={{ color:color.buttonYellow,alignSelf:'center',marginLeft:5,fontSize:12,fontWeight:'700' }}>{"Post"}</Text>
                        </View>
                        </View>

                      );

                    } else if (route.name === 'MyQuote') {
                      return (
                          
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../Images/quote.png')} style={{ tintColor: focused ? color.buttonYellow : '#FFF', height:28, width:28 }} />
                        {focused && <Text style={{ color:color.buttonYellow,alignSelf:'center',marginLeft:5,fontSize:12,fontWeight:'700' }}>{"My Quote"}</Text>}
                        </View>

                      );

                    } 
                 
                    else if (route.name === 'Profile') {
                      return (
                          
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../Images/user.png')} style={{ tintColor: focused ? color.buttonYellow : '#FFF', height:28, width:28 }} />
                        {focused && <Text style={{ color:color.buttonYellow,alignSelf:'center',marginLeft:5,fontSize:12,fontWeight:'700' }}>{"My Quote"}</Text>}
                        </View>

                      );
                    }
                },
            })}

        >

            <Tab.Screen name="Home" component={Home} options={{ headerShown: false,  }} />
            <Tab.Screen name="Planner" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Post" component={Quotation} options={{ headerShown: false }} />
            <Tab.Screen name="MyQuote" component={My_Quotation} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={My_Profile} options={{ headerShown: false }} />
      

        </Tab.Navigator>
    );
};


function mapStateToProps(state) {
    return {
   
    };
}
export default connect(mapStateToProps)(BottomTab);