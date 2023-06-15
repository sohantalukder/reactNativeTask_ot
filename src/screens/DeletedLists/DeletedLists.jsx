import {View, Text} from 'react-native';
import React from 'react';
import {dashboardStyle} from '../Dashboard/dashboard.style';
import {useTheme} from '@react-navigation/native';
import DashboardHeader from '../Dashboard/DashboardHeader';
import BrandLists from '../Dashboard/BrandLists';
import useProviderData from '../../hooks/useProviderData';

const DeletedLists = () => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  const {deletedLists, loading} = useProviderData();
  return (
    <View
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : ''}>
      <DashboardHeader deletedList={true} headerText="Deleted List" />
      <BrandLists deletedList={true} lists={deletedLists} loading={loading} />
    </View>
  );
};

export default DeletedLists;
