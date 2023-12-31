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
import Google from '../../../assets/svg/Google.svg';
import FaceBook from '../../../assets/svg/Facebook.svg';
import db from '../../../../demoData/demoData.json';
import {storeData} from '../../../utils/storage/storage';
import useProviderData from '../../../hooks/useProviderData';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const Login = () => {
  const {colors} = useTheme();
  const styles = loginStyle(colors);
  const navigation = useNavigation();
  const initialState = {
    email: '',
    password: '',
  };
  const {setUser} = useProviderData();
  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const linearColorW = [colors.white, colors.white, colors.white];
  const handleChange = (name, value) => {
    setFormData(prevState => ({...prevState, [name]: value}));
  };
  const handleLogin = () => {
    const {email, password} = formData;
    if (!email || !password) return;
    setLoading(true);
    Keyboard.dismiss();
    new Promise(resolve => setTimeout(resolve, 2000))
      .then(async () => {
        const getUser = db.users.find(
          user => user.email === email && user.password === password,
        );
        setLoading(false);
        if (getUser?.email) {
          setError('');
          setUser(getUser);
          setFormData(initialState);
          await storeData('auth', getUser);
          navigation.navigate(BOTTOM_TAB);
        } else {
          setError('Invalid Credentials');
        }
      })
      .catch(error => {
        console.log(error.message);
      });
  };
  GoogleSignin.configure();
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();
      const user = {
        name: userInfo?.user?.name,
        email: userInfo?.user?.email,
        type: 'User',
      };
      setUser(user);
      await storeData('auth', user);
      navigation.navigate(BOTTOM_TAB);
    } catch (error) {
      console.log(error.message);
    }
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
            {error && <Text style={styles.errorText}>{error}</Text>}
            <CustomButton
              text={loading ? 'Loading...' : 'Log In'}
              btnContStyle={styles.btnContStyle}
              btnTextStyle={styles.btnTextStyle}
              onPress={handleLogin}
              disabled={error || loading ? true : false}
            />
            <Text style={styles.forget}>Forget Password?</Text>
            <View style={styles.logInTextCont}>
              <View style={styles.underLine}></View>
              <Text style={styles.loginText}>Or, Log in with</Text>
              <View style={styles.underLine}></View>
            </View>
            <View style={styles.socialCont}>
              <CustomButton
                onPress={signIn}
                linearColor={linearColorW}
                btnContStyle={styles.btnOutLineContStyle}
                icon={<Google />}
              />
              <CustomButton
                linearColor={linearColorW}
                btnContStyle={styles.btnOutLineContStyle}
                icon={<FaceBook />}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
