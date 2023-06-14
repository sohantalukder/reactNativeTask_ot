import {StyleSheet} from 'react-native';
import {rs} from '../../utils/responsiveSize/responsiveSize';

export const dashboardStyle = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.antiFlashWhite,
    },
    headerCont: {
      backgroundColor: colors.white,
      paddingHorizontal: rs(20),
      paddingVertical: rs(16),
    },
    headerTextCont: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: rs(20),
    },
    headerText: {
      fontFamily: 'Futura-ExtraBold',
      fontSize: rs(32),
      lineHeight: rs(36),
      letterSpacing: -0.75,
      color: colors.dark,
      textTransform: 'uppercase',
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
