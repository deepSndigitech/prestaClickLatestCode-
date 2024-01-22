import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

const CustomTab = ({ label, isFocused, onPress, icon }) => {
  const color = isFocused ? 'blue' : 'black';

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ alignItems: 'center',flexDirection:'row',backgroundColor: color, borderRadius: 50 }}>
        <Animated.View style={{  }}>
          {icon}
        </Animated.View>
        {isFocused && <Text style={{ color }}>{label}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default CustomTab;