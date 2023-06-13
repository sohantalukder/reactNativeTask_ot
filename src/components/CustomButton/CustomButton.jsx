import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {customButtonStyle} from './customButton.style';

const CustomButton = ({
  text,
  linearColor,
  btnContStyle,
  btnTextStyle,
  onPress,
}) => {
  const styles = customButtonStyle();
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={linearColor}
        style={[styles.btnContainer, btnContStyle]}>
        <Text style={[styles.btnText, btnTextStyle]}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
