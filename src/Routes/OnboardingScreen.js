import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { color } from '../component/color';

const slides = [
  {
    key: 1,
    title: 'Welcome to',
    text: 'Expense Tracker',
    textone: 'Customise your wellness journey, explore curated treatments, and elevate relaxation on demand.',
    image:  require('../Images/bro.png'),
  },
  {
    key: 2,
    title: 'Capture',
    text: 'Receipts Easily',
    textone: 'Tailor your service, schedule hassle-free appointments, and experience a spotless home at your convenience.',
    image: require('../Images/sweping.png'),
  },
  {
    key: 3,
    title: 'Stay',
    text: 'in Control',
    textone: 'Customize your green oasis, schedule expert services, and watch your outdoor space bloom with vitality and charm.',
    image: require('../Images/gardner.png'),
  },
];

const OnboardingScreen = (props ) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSlide = slides[currentIndex];

  const [activeColor, setActiveColor] = useState('red');

  const onSkipPress = () => {
    props.navigation.navigate('Welcome');
  };

  const onExplorePress = () => {
    if (currentIndex === slides.length - 1) {
      props.navigation.navigate('Welcome');
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };



  return (
    <View style={{ flex: 1,backgroundColor: color.white,  }}>
        <ImageBackground style={{height:'100%',width:'100%'}} source={require('../Images/OnboardImage.png')}> 
        <View style={{alignSelf:'center',flexDirection:'row',justifyContent:'space-between',width:'60%',marginTop:20}}>
            {slides.map((ele)=>(
                <View  style={{height:10,width:60,borderRadius:30,backgroundColor: (ele.key-1)===currentIndex?color.buttonYellow:color.white,borderWidth:(ele.key-1)===currentIndex?0:1,borderColor:color.buttonYellow}} >
                
</View>
            ))}
          

        </View>
    
      {/* ... (other code) */}
      <View style={{  flex: 1,    justifyContent: 'center',alignItems: 'center',paddingHorizontal: 10,}}>
        <Image source={currentSlide.image} style={{ width: '100%',height: '35%',resizeMode: 'contain',}}  />
       
        <Text style={{ fontSize: 18, color:color.textGrey,fontWeight:'400',color:'#000',letterSpacing:2 }}>{currentSlide.textone}</Text>

        <View style={{  width:'90%',marginTop:50 }}>
        {/* ... (pagination dots or buttons) */}
        <TouchableOpacity
          onPress={onExplorePress}
          style={[styles.button, { backgroundColor: color.buttonYellow }]}>
          <Text style={{ color: color.white, fontSize: 15,fontWeight: '500', textAlign: 'center',}}>Next</Text>
        </TouchableOpacity>
      </View>

      <View style={{  width:'90%',marginTop:30 }}>
        {/* ... (pagination dots or buttons) */}
        <TouchableOpacity
          onPress={onSkipPress}
          style={[styles.button, { backgroundColor: color.white,borderWidth:1,borderColor: color.buttonYellow}]}>
          <Text style={{ color:  color.buttonYellow, fontSize: 15,fontWeight: '700', textAlign: 'center',}}>Skip</Text>
        </TouchableOpacity>
      </View>
        
      </View>
      </ImageBackground>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  slideContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: '80%',
    height: '40%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 27,
    color: color.black,
    fontWeight: '300',
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: color.black,
    fontWeight: '400',
    textAlign: 'center',
    marginVertical: 5,
  },
  textone: {
    fontSize: 16,
    color:color.textGrey,
    textAlign: 'center',
    marginVertical: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color:color.white,
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default OnboardingScreen;
