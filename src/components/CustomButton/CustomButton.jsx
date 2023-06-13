import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {customButtonStyle} from './customButton.style';

const CustomButton = ({
  text,
  linearColor,
  btnContStyle,
  btnTextStyle,
  onPress,
  icon,
  textIcon,
}) => {
  const styles = customButtonStyle();
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={linearColor}
        style={[styles.btnContainer, btnContStyle]}>
        {typeof icon === 'object' ? (
          icon
        ) : (
          <View>
            {textIcon}
            <Text style={[styles.btnText, btnTextStyle]}>{text}</Text>
          </View>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
