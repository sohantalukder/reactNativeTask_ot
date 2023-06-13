import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import {loginStyle} from './login.style';
import Header from './Header';
import CustomInput from '../../../components/CustomInput/CustomInput';
import Email from '../../../assets/svg/Email.svg';
import Lock from '../../../assets/svg/Lock.svg';
import Eye from '../../../assets/svg/Eye.svg';
import {rs} from '../../../utils/responsiveSize/responsiveSize';
import CustomButton from '../../../components/CustomButton/CustomButton';
import {BOTTOM_TAB} from '../../../navigation/RouteName/RouteName';

const Login = () => {
  const {colors} = useTheme();
  const styles = loginStyle(colors);
  const navigation = useNavigation();
  const initialState = {
    email: '',
    password: '',
  };
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const linearColor = [
    colors.olympicBlue,
    colors.olympicBlue,
    colors.olympicBlue,
  ];
  const handleChange = (name, value) => {
    setFormData(prevState => ({...prevState, [name]: value}));
  };
  const handleLogin = () => {
    navigation.navigate(BOTTOM_TAB);
  };
  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll_view}
        keyboardShouldPersistTaps={'always'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Header />
            <CustomInput
              style={[styles.input, {marginBottom: rs(16)}]}
              leftIcon={<Email />}
              keyboardType={'email-address'}
              inputMode={'email'}
              autoCapitalize={'none'}
              onChangeText={text => handleChange('email', text)}
              value={formData.email}
              placeholder="Email Address"
            />
            <CustomInput
              style={styles.input}
              leftIcon={<Lock />}
              rightIcon={<Eye />}
              secureTextEntry={true}
              onChangeText={text => handleChange('password', text)}
              value={formData.password}
              placeholder="Password"
            />
            {error && <Text>{error}</Text>}
            <CustomButton
              text={loading ? 'Loading...' : 'Log In'}
              linearColor={linearColor}
              btnContStyle={styles.btnContStyle}
              btnTextStyle={styles.btnTextStyle}
              onPress={handleLogin}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
