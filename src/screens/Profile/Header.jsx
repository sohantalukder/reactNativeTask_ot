import {Image, Text, View} from 'react-native';
import React from 'react';
import profilePicture from '../../assets/image/Avatar.png';
import {profileStyle} from './profile.style';
import {useTheme} from '@react-navigation/native';

const Header = () => {
  const {colors} = useTheme();
  const styles = profileStyle(colors);
  const user = {name: 'Test User', userType: 'user'};
  return (
    <View style={styles.headerCont}>
      <Image source={profilePicture} style={styles.image} />
      <Text style={styles.name}>{user?.name}</Text>
      <View style={styles.typeCont}>
        <Text style={styles.type}>{user?.userType}</Text>
      </View>
    </View>
  );
};

export default Header;
