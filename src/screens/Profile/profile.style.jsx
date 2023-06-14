import {StyleSheet, Dimensions} from 'react-native';
import {rs} from '../../utils/responsiveSize/responsiveSize';
const {width} = Dimensions.get('screen');
export const profileStyle = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: rs(20),
    },
    headerCont: {
      paddingTop: rs(56),
      alignItems: 'center',
    },
    image: {
      height: rs(96),
      width: rs(96),
    },
    name: {
      fontSize: rs(20),
      lineHeight: rs(24),
      fontFamily: 'Inter-SemiBold',
      color: colors.dark,
      marginTop: rs(12),
    },
    typeCont: {
      backgroundColor: colors.antiFlashWhite,
      paddingHorizontal: rs(8),
      paddingVertical: rs(5),
      borderRadius: 6,
      marginTop: rs(6),
    },
    type: {
      fontFamily: 'Inter-SemiBold',
      fontSize: rs(9),
      color: colors.distantThunder,
      textTransform: 'uppercase',
      letterSpacing: 2,
    },
    socialContainer: {
      marginHorizontal: rs(40),
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: rs(16),
    },
    infoCont: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    count: {
      fontFamily: 'Inter-SemiBold',
      fontSize: rs(18),
      lineHeight: rs(24),
      color: colors.draculaOrchid,
    },
    text: {
      fontFamily: 'Inter-Regular',
      fontSize: rs(12),
      lineHeight: rs(16),
      color: colors.distantThunder,
    },
    descriptionContainer: {
      marginTop: rs(24),
    },
    descriptionText: {
      fontFamily: 'Inter-Regular',
      fontSize: rs(14),
      lineHeight: rs(20),
      textAlign: 'center',
      color: colors.distantThunder,
    },
    btnContStyle: {
      marginTop: rs(16),
    },
  });
