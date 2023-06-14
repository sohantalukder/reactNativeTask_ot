import {Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {profileStyle} from './profile.style';

const Follow = () => {
  const {colors} = useTheme();
  const styles = profileStyle(colors);
  return (
    <View style={styles.socialContainer}>
      <Info count={48} text={'Followers'} />
      <Info count={572} text={'Following'} />
      <Info count={35} text={'Saves'} />
    </View>
  );
};

export default Follow;

const Info = ({count, text}) => {
  const {colors} = useTheme();
  const styles = profileStyle(colors);
  return (
    <View style={styles.infoCont}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
