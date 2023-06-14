import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import AddIcon from '../../assets/svg/Add.svg';
import {rs} from '../../utils/responsiveSize/responsiveSize';
import CustomInput from '../../components/CustomInput/CustomInput';
import SearchIcon from '../../assets/svg/Search.svg';
const DashboardHeader = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        backgroundColor: colors.white,
        paddingHorizontal: rs(20),
        paddingVertical: rs(16),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: rs(20),
        }}>
        <Text
          style={{
            fontFamily: 'Futura-ExtraBold',
            fontSize: rs(32),
            lineHeight: rs(36),
            letterSpacing: -0.75,
            color: colors.dark,
            textTransform: 'uppercase',
          }}>
          Explore
        </Text>
        <Pressable>
          <AddIcon height={rs(28)} width={rs(28)} />
        </Pressable>
      </View>
      <CustomInput leftIcon={<SearchIcon />} placeholder="Search here..." />
    </View>
  );
};

export default DashboardHeader;
