import {KeyboardAvoidingView, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import DashboardHeader from './DashboardHeader';
import {dashboardStyle} from './dashboard.style';
import {useTheme} from '@react-navigation/native';
import BrandLists from './BrandLists';
import AddListBottomSheet from './ListBottomSheet';
import useProvider from '../../hooks/useProvider';
const Dashboard = () => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  const {lists, loading, show, handleBottomSheet} = useProvider();
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
      <DashboardHeader
        headerText="Explore"
        handleBottomSheet={handleBottomSheet}
      />
      {loadSheet && (
        <>
          <BrandLists
            loading={loading}
            lists={lists}
            openBottomSheet={handleBottomSheet}
          />
          <AddListBottomSheet
            show={show}
            handleBottomSheet={handleBottomSheet}
          />
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
