import {StyleSheet} from 'react-native';
import {rs} from '../../utils/responsiveSize/responsiveSize';

export const customInputStyle = (colors, layout, inputWidth) => {
  return StyleSheet.create({
    inputCont: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1.3,
      borderColor: colors.mercury,
      borderRadius: rs(14),
      paddingHorizontal: rs(20),
      backgroundColor: colors.antiFlashWhite,
      height: rs(56),
    },
    icon: {
      marginRight: rs(10),
    },
    input: {
      color: colors.distantThunder,
      fontSize: rs(15),
      fontFamily: 'Inter-Medium',
      margin: 0,
      paddingLeft: 0,
      height: layout?.height || undefined,
      lineHeight: rs(24),
    },
    mt: {
      marginTop: rs(8),
    },
    rightIconMargin: {
      marginRight: rs(0),
    },
    inputWidth: {
      width: inputWidth,
    },
  });
};
