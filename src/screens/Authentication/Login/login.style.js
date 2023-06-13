import {StyleSheet, Dimensions} from 'react-native';
import {rs} from '../../../utils/responsiveSize/responsiveSize';
const {width} = Dimensions.get('screen');
export const loginStyle = colors =>
  StyleSheet.create({
    keyboardAvoidingView: {
      flex: 1,
    },
    scroll_view: {
      flex: 1,
      backgroundColor: colors.white,
    },
    container: {
      flex: 1,
      marginBottom: rs(100),
      alignItems: 'center',
      paddingHorizontal: rs(20),
      textAlign: 'center',
    },
    input: {
      width: width - rs(80),
    },
    headerCont: {
      marginTop: rs(40),
      marginBottom: rs(20),
      alignItems: 'center',
    },
    welcomeText: {
      fontFamily: 'Futura-ExtraBold',
      fontSize: rs(32),
      marginTop: rs(100),
      color: colors.dark,
      lineHeight: rs(36),
      textTransform: 'uppercase',
      letterSpacing: rs(-0.75),
    },
    btnContStyle: {
      width: width - rs(80),
      marginTop: rs(16),
    },
    socialCont: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width - rs(80),
    },
    btnOutLineContStyle: {
      width: width / 2.65,
      borderWidth: 1.3,
      marginTop: rs(20),
      borderColor: colors.windchill,
    },
    btnTextStyle: {
      color: colors.white,
      fontFamily: 'Inter-SemiBold',
      fontSize: rs(15),
      lineHeight: rs(22),
    },
    forget: {
      marginTop: rs(24),
      textAlign: 'center',
      color: colors.olympicBlue,
      fontFamily: 'Inter-SemiBold',
      lineHeight: rs(20),
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      textDecorationColor: colors.olympicBlue,
    },
    logInTextCont: {
      flexDirection: 'row',
      marginTop: rs(100),
      alignItems: 'center',
    },
    underLine: {
      width: rs(70),
      height: 0.5,
      backgroundColor: colors.foil,
    },
    loginText: {
      fontFamily: 'Inter-Regular',
      fontSize: rs(14),
      lineHeight: rs(20),
      color: colors.distantThunder,
      paddingHorizontal: rs(13),
    },
  });
