import {KeyboardAvoidingView, View, Text, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import DashboardHeader from './DashboardHeader';
import {dashboardStyle} from './dashboard.style';
import {useTheme} from '@react-navigation/native';
import BrandLists from './BrandLists';
import demoData from '../../../demoData/demoData.json';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import {rs} from '../../utils/responsiveSize/responsiveSize';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Add from '../../assets/svg/Add.svg';
const Dashboard = () => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  const [show, setShow] = useState(false);
  const openBottomSheet = () => {
    setShow(!show);
  };
  const [loadSheet, setLoadSheet] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadSheet(true);
    }, 0);
  }, []);
  const linearColor = [colors.dark, colors.dark, colors.dark];
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == 'ios' ? 'padding' : ''}>
      <DashboardHeader headerText="Explore" openBottomSheet={openBottomSheet} />
      {loadSheet && (
        <>
          <BrandLists
            lists={demoData?.lists}
            openBottomSheet={openBottomSheet}
          />
          <BottomSheet
            show={show}
            onDismiss={() => {
              setShow(false);
            }}
            enableBackdropDismiss>
            <View style={{flex: 1, paddingHorizontal: rs(20)}}>
              <Text
                style={{
                  fontFamily: 'Inter-SemiBold',
                  fontSize: rs(22),
                  lineHeight: rs(28),
                  color: colors.dark,
                }}>
                Create New Collection
              </Text>
              <CustomInput
                placeholder="Image Link"
                style={{marginTop: rs(16)}}
              />
              <CustomInput
                placeholder="Collection Name"
                style={{marginTop: rs(16)}}
              />
              <CustomInput
                placeholder="Description"
                numberOfLines={4}
                multiline={true}
                style={{height: rs(140), marginTop: rs(16)}}
                textAlignVertical={'top'}
              />
              <CustomButton
                textIcon={<Add fill="#ffffff" height={rs(22)} width={rs(22)} />}
                linearColor={linearColor}
                text={'Create New'}
                btnTextStyle={{marginLeft: rs(11)}}
                btnContStyle={{marginVertical: rs(16)}}
              />
            </View>
          </BottomSheet>
        </>
      )}
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
