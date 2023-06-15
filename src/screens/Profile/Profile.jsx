import {View} from 'react-native';
import React from 'react';
import {useNavigation, useTheme} from '@react-navigation/native';
import Header from './Header';
import Follow from './Follow';
import Description from './Description';
import {profileStyle} from './profile.style';
import CustomButton from '../../components/CustomButton/CustomButton';
import {LOGIN} from '../../navigation/RouteName/RouteName';
import useProviderData from '../../hooks/useProviderData';
import {deleteData} from '../../utils/storage/storage';

const Profile = () => {
  const {colors} = useTheme();
  const styles = profileStyle(colors);
  const gradientColor = [colors.dark, colors.dark, colors.dark];
  const navigation = useNavigation();
  const {user, setUser} = useProviderData();
  const handleLogout = () => {
    setUser({});
    navigation.navigate(LOGIN);
    deleteData('auth');
  };
  return (
    <View style={styles.container}>
      <Header user={user} />
      <Follow />
      <Description />
      <CustomButton
        text={'Logout'}
        linearColor={gradientColor}
        onPress={handleLogout}
        btnContStyle={styles.btnContStyle}
      />
    </View>
  );
};

export default Profile;
