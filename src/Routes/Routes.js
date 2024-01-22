import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux';
import BottomTab from './BottomTab';



import Splash from './Splash';
import Home from '../pages/Home/Home';
// import Sidebar from './Sidebar';
// import Furniture from '../pages/Furniture/Furniture';
// import FeedLoading from '../pages/Feedback/FeedLoading';
// import Feedback from '../pages/Feedback/Feedback';
// import Notification from '../pages/Notification/Notification';
// import Profile from '../pages/Profile/Profile';
// import MyOrder from '../pages/MyOrder/MyOrder';
// import PaymentReceipt from '../pages/PaymentReceipt/PaymentReceipt';
// import Quotation from '../pages/Quotation/Quotation';
// import PaymentLoading from '../pages/PaymentReceipt/PaymentLoading';
// import PaymentSuccesfull from '../pages/PaymentReceipt/PaymentSuccesfull';
// import PackersMoversType from '../pages/PackersMoversType/PackersMoversType';
// import JunkHouler from '../pages/PackersMoversType/JunkHouler';
// import AirFreight from '../pages/PackersMoversType/AirFreight';
// import SeaFrieght from '../pages/PackersMoversType/SeaFrieght';
// import ToWareHouse from '../pages/PackersMoversType/ToWareHouse';
// import FromWareHouse from '../pages/PackersMoversType/FromWareHouse';
// import Language from '../pages/Language/Language';
// import WePackers from '../pages/PackersMoversType/WePackers';
// import Storage from '../pages/PackersMoversType/Storage';
// import StorageHome from '../pages/PackersMoversType/StorageHome';
// import HomeMoving from '../pages/PackersMoversType/HomeMoving';
// import MovingHomeDetails from '../pages/PackersMoversType/MovingHomeDetails';
// import MovingOfficeDetails from '../pages/PackersMoversType/MovingOfficeDetails';
// import TruckRental from '../pages/PackersMoversType/TruckRental';
// import TruckRentalDetails from '../pages/PackersMoversType/TruckRentalDetails';
// import ContainerRental from '../pages/PackersMoversType/ContainerRental';
// import ContainerRentalDetails from '../pages/PackersMoversType/ContainerRentalDetails';
// import Appliances from '../pages/Appliances/Appliances';
// import Deals from '../pages/Furniture/Deals';
// import Products from '../pages/Furniture/Products';
// import ProductDetails from '../pages/Furniture/ProductDetails';
// import Cart from '../pages/Furniture/Cart';
// import ApplianceDeals from '../pages/Appliances/ApplianceDeals';
// import ApplianceProducts from '../pages/Appliances/ApplianceProducts';
import OnboardingScreen from './OnboardingScreen';
import Welcome from './Welcome';
import SignUp from '../pages/SignUp/SignUp';
// import LogIn from '../pages/LogIn/LogIn';
import Login from '../pages/LogIn/LogIn';
import My_Profile from '../pages/My_Profile/My_Profile';
import Account from '../pages/Account/Account';
import History from '../pages/History/History';
import Saved_Address from '../pages/Saved_Address/Saved_Address';
import Language from '../pages/Language/Language';
import Favourite from '../pages/Favourite/Favourite';
import ProductDetails from '../pages/ProductDetails';
import ProductCart from '../pages/ProductCart';
import PaymentLoading from '../pages/PaymentReceipt/PaymentLoading';
import PaymentReceipt from '../pages/PaymentReceipt/PaymentReceipt';
import PaymentSuccesfull from '../pages/PaymentReceipt/PaymentSuccesfull';
import ServiceDetails from '../pages/ServiceDetails';
import CustomerReview from '../pages/CustomerReview';
import Quotation from '../pages/Quotation/Quotation';
import My_Quotation from '../pages/Quotation/My_Quotation';

const Stack = createNativeStackNavigator();

const Route = props => {

    const [isLogIn, setisLogIn] = useState(false)
    const [loarding, setloarding] = useState(true)



    console.log("asdsdsad");

    useEffect(() => {
        setTimeout(() => {
            setloarding(false)
        }, 2000);

    }, [])


    return (

        <>
            {loarding ?
                <>
                    <Splash />
                </> :

                <NavigationContainer>
                    <Stack.Navigator initialRouteName='OnboardingScreen'>

                    
                        <Stack.Screen name="Home" component={BottomTab}  options={{ headerShown: false }}/>
                        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}  options={{ headerShown: false }}/>
                        <Stack.Screen name="Welcome" component={Welcome}  options={{ headerShown: false }}/>
                        <Stack.Screen name='BottomTab' component={BottomTab} options={{ headerShown: false }} />
                        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
                        <Stack.Screen name="SignUp" component={SignUp}  options={{ headerShown: false }}/>
                        <Stack.Screen name="My_Profile" component={My_Profile}  options={{ headerShown: false }}/>
                        <Stack.Screen name="Account" component={Account}  options={{ headerShown: false }}/>
                        <Stack.Screen name="History" component={History}  options={{ headerShown: false }}/>
                        <Stack.Screen name="Saved_Address" component={Saved_Address}  options={{ headerShown: false }}/>
                        <Stack.Screen name="Language" component={Language}  options={{ headerShown: false }}/>
                        <Stack.Screen name="Favourite" component={Favourite}  options={{ headerShown: false }}/>
                        <Stack.Screen name="ProductDetails" component={ProductDetails}  options={{ headerShown: false }}/>
                        <Stack.Screen name="ProductCart" component={ProductCart}  options={{ headerShown: false }}/>
                        <Stack.Screen name="PaymentLoading" component={PaymentLoading}  options={{ headerShown: false }}/>
                        <Stack.Screen name="PaymentReceipt" component={PaymentReceipt}  options={{ headerShown: false }}/>
                        <Stack.Screen name="PaymentSuccesfull" component={PaymentSuccesfull}  options={{ headerShown: false }}/>
                        <Stack.Screen name="ServiceDetails" component={ServiceDetails}  options={{ headerShown: false }}/>
                        <Stack.Screen name="CustomerReview" component={CustomerReview}  options={{ headerShown: false }}/>
                        <Stack.Screen name="Quotation" component={Quotation}  options={{ headerShown: false }}/>
                        <Stack.Screen name="My_Quotation" component={My_Quotation}  options={{ headerShown: false }}/>










                    </Stack.Navigator>


                </NavigationContainer>
            }

            <Toast ref={(ref) => Toast.setRef(ref)} />
        </>
    )
}
function mapStateToProps(state) {
    const { users, } = state;
    return {
        users
    };
}
export default connect(mapStateToProps)(Route);
