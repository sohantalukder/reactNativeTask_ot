import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {dashboardStyle} from '../../screens/Dashboard/dashboard.style';

const EmptyList = ({text}) => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  return (
    <View style={styles.emptyListCont}>
      <Text style={styles.emptyText}>{text}</Text>
    </View>
  );
};

export default EmptyList;
