import {Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {profileStyle} from './profile.style';

const Description = () => {
  const {colors} = useTheme();
  const styles = profileStyle(colors);
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionText}>
        Lorem ipsum dolor sit amet, consectetur elit. In augue semper arcu enim
        viverra sit ipsum. Lorem ipsum dolor sit amet consectetur elit.
      </Text>
    </View>
  );
};

export default Description;
