const {rs} = require('../../../utils/responsiveSize/responsiveSize');
import {StyleSheet} from 'react-native';
export const itemStyles = (colors, focused) =>
  StyleSheet.create({
    cont: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      color: focused ? colors.foil : colors.draculaOrchid,
      fontFamily: 'Intra-Medium',
      fontSize: rs(12),
      lineHeight: rs(12),
      marginTop: rs(5),
      fontWeight: '500',
    },
  });
