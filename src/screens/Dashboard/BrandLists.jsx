import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Lists from './Lists';
import {dashboardStyle} from './dashboard.style';

const BrandLists = () => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  return (
    <View style={styles.brandListCont}>
      <Text style={styles.tittleText}>Top street-style brands</Text>
      <Lists />
    </View>
  );
};

export default BrandLists;
