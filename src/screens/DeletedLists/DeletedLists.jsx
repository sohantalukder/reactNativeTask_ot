import {View, Text} from 'react-native';
import React from 'react';
import {dashboardStyle} from '../Dashboard/dashboard.style';
import {useTheme} from '@react-navigation/native';
import DashboardHeader from '../Dashboard/DashboardHeader';
import BrandLists from '../Dashboard/BrandLists';

const DeletedLists = () => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  return (
    <View
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : ''}>
      <DashboardHeader deletedList={true} headerText="Deleted List" />
      <BrandLists deletedList={true} />
    </View>
  );
};

export default DeletedLists;
