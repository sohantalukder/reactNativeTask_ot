import {View, Text} from 'react-native';
import React from 'react';
import Logo from '../../../assets/svg/Logo.svg';
import {useTheme} from '@react-navigation/native';
import {loginStyle} from './login.style';
const Header = () => {
  const {colors} = useTheme();
  const styles = loginStyle(colors);
  return (
    <View style={styles.headerCont}>
      <Logo />
      <Text style={styles.welcomeText}>Welcome Back!</Text>
    </View>
  );
};

export default Header;
