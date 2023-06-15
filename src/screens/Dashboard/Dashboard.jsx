import {KeyboardAvoidingView, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import DashboardHeader from './DashboardHeader';
import {dashboardStyle} from './dashboard.style';
import {useTheme} from '@react-navigation/native';
import BrandLists from './BrandLists';
import demoData from '../../../demoData/demoData.json';
import AddListBottomSheet from './ListBottomSheet';
const Dashboard = () => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  const [show, setShow] = useState(false);
  const handleBottomSheet = () => {
    setShow(!show);
  };
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
            lists={demoData?.lists}
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
