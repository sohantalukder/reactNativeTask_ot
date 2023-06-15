import {View, Text} from 'react-native';
import React from 'react';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import {rs} from '../../utils/responsiveSize/responsiveSize';
import {useTheme} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Add from '../../assets/svg/Add.svg';
import {dashboardStyle} from './dashboard.style';
const AddListBottomSheet = ({show, handleBottomSheet}) => {
  const {colors} = useTheme();
  const linearColor = [colors.dark, colors.dark, colors.dark];
  const styles = dashboardStyle(colors);
  return (
    <BottomSheet show={show} onDismiss={handleBottomSheet}>
      <View style={styles.bottomSheetCont}>
        <Text style={styles.titleText}>Create New Collection</Text>
        <CustomInput placeholder="Image Link" style={styles.mt_16} />
        <CustomInput placeholder="Collection Name" style={styles.mt_16} />
        <CustomInput
          placeholder="Description"
          numberOfLines={4}
          multiline={true}
          style={styles.areaField}
          textAlignVertical={'top'}
        />
        <CustomButton
          textIcon={<Add fill={colors.white} height={rs(22)} width={rs(22)} />}
          linearColor={linearColor}
          text={'Create New'}
          btnTextStyle={styles.btnTextStyle}
          btnContStyle={styles.btnContStyle}
        />
      </View>
    </BottomSheet>
  );
};

export default AddListBottomSheet;
