import {StyleSheet} from 'react-native';
import {rs} from '../../../utils/responsiveSize/responsiveSize';

export const loginStyle = colors =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      alignItems: 'center',
      paddingHorizontal: rs(20),
      textAlign: 'center',
    },
    headerCont: {
      marginTop: rs(40),
      marginBottom: rs(20),
      flexDirection: 'column',
      alignItems: 'center',
    },
    welcomeText: {
      fontFamily: 'Futura-ExtraBold',
      fontSize: rs(32),
      marginTop: rs(100),
      color: colors.dark,
      lineHeight: rs(36),
      textTransform: 'uppercase',
    },
  });
