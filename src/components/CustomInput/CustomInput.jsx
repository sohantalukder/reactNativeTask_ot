import {TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {customInputStyle} from './customInputStyle';
import {useTheme} from '@react-navigation/native';
import {rs} from '../../utils/responsiveSize/responsiveSize';

const CustomInput = ({
  style = {},
  keyboardType = 'default',
  placeholder = '',
  multiline = false,
  numberOfLines = 1,
  textAlignVertical = 'center',
  maxLength = 10000,
  secureTextEntry = false,
  value,
  leftIcon,
  rightIcon,
  onChangeText,
  inputMode = 'text',
  autoCapitalize = 'sentences',
}) => {
  const styles = Array.isArray(style) ? style : [style];
  const {colors} = useTheme();
  const [layout, setLayout] = useState(null);

  let inputWidth;
  if (typeof leftIcon === 'object' && typeof rightIcon === 'object') {
    inputWidth = layout?.width - rs(20 * 5) || undefined;
  } else if (typeof leftIcon === 'object') {
    inputWidth = layout?.width - rs(20 * 4) || undefined;
  } else if (typeof rightIcon === 'object') {
    inputWidth = layout?.width - rs(20 * 3) || undefined;
  } else if (
    typeof leftIcon === 'undefined' &&
    typeof rightIcon === 'undefined'
  ) {
    inputWidth = layout?.width - rs(20 * 2) || undefined;
  }

  const inputStyle = customInputStyle(colors, layout, inputWidth);
  return (
    <>
      <View
        onLayout={event => setLayout(event.nativeEvent.layout)}
        style={[inputStyle.inputCont, ...styles]}>
        {typeof leftIcon === 'object' && (
          <View style={inputStyle.icon}>{leftIcon}</View>
        )}
        <TextInput
          style={{
            ...inputStyle.input,
            ...inputStyle.inputWidth,
          }}
          cursorColor={colors.textSecondary}
          placeholderTextColor={colors.distantThunder}
          inputMode={inputMode}
          autoCapitalize={autoCapitalize}
          placeholder={value ? '' : placeholder}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={textAlignVertical}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          value={value?.toString()}
          onChangeText={onChangeText}
        />
        {typeof rightIcon === 'object' && (
          <View style={inputStyle.rightIconMargin}>{rightIcon}</View>
        )}
      </View>
    </>
  );
};

export default CustomInput;
