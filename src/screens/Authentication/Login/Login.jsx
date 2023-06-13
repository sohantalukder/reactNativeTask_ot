import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {loginStyle} from './login.style';
import Header from './Header';

const Login = () => {
  const {colors} = useTheme();
  const styles = loginStyle(colors);
  return (
    <View style={styles.container}>
      <Header />
      <Text style={{color: '#000'}}>Login</Text>
      <Text style={{color: '#000'}}>Login</Text>
    </View>
  );
};

export default Login;
