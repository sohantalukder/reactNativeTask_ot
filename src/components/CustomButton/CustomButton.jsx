import {Text, View, TouchableOpacity, Pressable} from 'react-native';
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
    <Pressable onPress={onPress}>
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
    </Pressable>
  );
};

export default CustomButton;
