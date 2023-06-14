import {KeyboardAvoidingView, Platform} from 'react-native';
import React from 'react';
import DashboardHeader from './DashboardHeader';
import {dashboardStyle} from './dashboard.style';
import {useTheme} from '@react-navigation/native';
import BrandLists from './BrandLists';
import demoData from '../../../demoData/demoData.json';
const Dashboard = () => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : ''}>
      <DashboardHeader headerText="Explore" />
      <BrandLists lists={demoData?.lists} />
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
