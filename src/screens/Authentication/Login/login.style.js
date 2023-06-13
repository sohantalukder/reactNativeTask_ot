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
      letterSpacing: rs(-0.75),
    },
  });
