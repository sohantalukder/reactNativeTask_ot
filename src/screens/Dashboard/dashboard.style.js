import {StyleSheet} from 'react-native';
import {rs} from '../../utils/responsiveSize/responsiveSize';

export const dashboardStyle = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.antiFlashWhite,
    },
    brandListCont: {marginTop: rs(25), flex: 1, paddingHorizontal: rs(20)},
    tittleText: {
      fontFamily: 'Inter-SemiBold',
      fontSize: rs(14),
      lineHeight: rs(20),
      color: colors.distantThunder,
      marginBottom: rs(13),
    },
    emptyListCont: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyText: {
      color: colors.dark,
      fontFamily: 'Inter-SemiBold',
      fontSize: rs(16),
    },
    columnWrap: {
      justifyContent: 'space-between',
      marginBottom: rs(8),
    },
  });
