import {KeyboardAvoidingView, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import DashboardHeader from './DashboardHeader';
import {dashboardStyle} from './dashboard.style';
import {useTheme} from '@react-navigation/native';
import BrandLists from './BrandLists';
import AddListBottomSheet from './ListBottomSheet';
import useProviderData from '../../hooks/useProviderData';
const Dashboard = () => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  const {lists, loading} = useProviderData();
  const [loadSheet, setLoadSheet] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadSheet(true);
    }, 0);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : ''}>
      <DashboardHeader headerText="Explore" />
      {loadSheet && (
        <>
          <BrandLists loading={loading} lists={lists} />
          <AddListBottomSheet />
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
