import {Text, View, Pressable} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {customButtonStyle} from './customButton.style';
import {useTheme} from '@react-navigation/native';

const CustomButton = ({
  text,
  linearColor,
  btnContStyle,
  btnTextStyle,
  onPress,
  icon,
  textIcon,
  disabled = false,
}) => {
  const {colors} = useTheme();
  const styles = customButtonStyle(colors);
  const gradientColor = [
    colors.olympicBlue,
    colors.olympicBlue,
    colors.olympicBlue,
  ];
  return (
    <Pressable onPress={onPress} disabled={disabled}>
      <LinearGradient
        colors={linearColor ? linearColor : gradientColor}
        style={[styles.btnContainer, btnContStyle]}>
        {typeof icon === 'object' ? (
          icon
        ) : (
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {textIcon}
            <Text style={[styles.btnText, btnTextStyle]}>{text}</Text>
          </View>
        )}
      </LinearGradient>
    </Pressable>
  );
};

export default CustomButton;
