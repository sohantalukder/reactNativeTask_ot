import {StyleSheet} from 'react-native';
import {rs} from '../../utils/responsiveSize/responsiveSize';
export const actionStyle = colors =>
  StyleSheet.create({
    cont: {
      position: 'absolute',
      top: 12,
      right: 15,
      width: rs(30),
      height: rs(30),
      alignItems: 'flex-end',
    },
    text: {
      color: colors.draculaOrchid,
      fontSize: rs(16),
      fontWeight: '900',
      lineHeight: rs(6),
    },
  });
