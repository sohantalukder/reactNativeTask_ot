import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Lists from './Lists';
import {dashboardStyle} from './dashboard.style';

const BrandLists = ({deletedList = false, lists = [], handleBottomSheet}) => {
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  return (
    <View style={styles.brandListCont}>
      {!deletedList && (
        <Text style={styles.tittleText}>Top street-style brands</Text>
      )}
      <Lists
        handleBottomSheet={handleBottomSheet}
        lists={lists}
        deletedList={deletedList}
      />
    </View>
  );
};

export default BrandLists;
