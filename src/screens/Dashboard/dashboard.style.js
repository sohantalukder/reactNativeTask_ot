import {StyleSheet, Dimensions} from 'react-native';
import {rs} from '../../utils/responsiveSize/responsiveSize';
const {width} = Dimensions.get('screen');
export const dashboardStyle = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.antiFlashWhite,
    },
    headerCont: {
      backgroundColor: colors.white,
      paddingVertical: rs(16),
    },
    headerTextCont: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: rs(20),
      marginLeft: rs(20),
    },
    inputWidth: {
      width: width - rs(40),
      alignSelf: 'center',
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
    addList: {padding: rs(10), marginRight: rs(10)},
    bottomSheetCont: {flex: 1, paddingHorizontal: rs(20)},
    titleText: {
      fontFamily: 'Inter-SemiBold',
      fontSize: rs(22),
      lineHeight: rs(28),
      color: colors.dark,
    },
    mt_16: {marginTop: rs(16)},
    areaField: {height: rs(140), marginTop: rs(16)},
    btnTextStyle: {marginLeft: rs(11)},
    btnContStyle: {marginVertical: rs(16)},
  });
