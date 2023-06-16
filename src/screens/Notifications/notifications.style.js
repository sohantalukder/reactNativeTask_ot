import {StyleSheet} from 'react-native';
import {rs} from '../../utils/responsiveSize/responsiveSize';
export const notificationStyle = colors =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      flex: 1,
      paddingHorizontal: rs(20),
      paddingVertical: rs(20),
    },
    cardCont: {
      backgroundColor: colors.draculaOrchid,
      paddingHorizontal: rs(20),
      paddingVertical: rs(10),
      borderRadius: 10,
      flexDirection: 'row',
      marginBottom: rs(10),
    },
    image: {
      height: rs(50),
      width: rs(50),
      borderRadius: 50 / 2,
      resizeMode: 'cover',
      marginRight: rs(12),
    },
    header: {
      color: colors.white,
      fontFamily: 'Inter-SemiBold',
      fontSize: rs(14),
      lineHeight: rs(16),
    },
    description: {
      color: colors.white,
      fontFamily: 'Inter-Regular',
      fontSize: rs(12),
      lineHeight: rs(16),
    },
  });
