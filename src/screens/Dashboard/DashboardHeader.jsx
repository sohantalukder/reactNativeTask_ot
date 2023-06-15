import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import AddIcon from '../../assets/svg/Add.svg';
import {rs} from '../../utils/responsiveSize/responsiveSize';
import CustomInput from '../../components/CustomInput/CustomInput';
import SearchIcon from '../../assets/svg/Search.svg';
import {dashboardStyle} from './dashboard.style';
const DashboardHeader = ({
  deletedList = false,
  headerText = '',
  handleBottomSheet,
}) => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  return (
    <View style={styles.headerCont}>
      <View style={styles.headerTextCont}>
        <Text style={styles.headerText}>{headerText}</Text>
        {!deletedList && (
          <Pressable onPress={handleBottomSheet} style={styles.addList}>
            <AddIcon height={rs(28)} width={rs(28)} />
          </Pressable>
        )}
      </View>
      {!deletedList && (
        <CustomInput
          leftIcon={<SearchIcon />}
          style={styles.inputWidth}
          placeholder="Search here..."
        />
      )}
    </View>
  );
};

export default DashboardHeader;
