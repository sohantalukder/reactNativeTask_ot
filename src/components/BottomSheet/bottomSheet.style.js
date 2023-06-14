import {StyleSheet} from 'react-native';
import {rs} from '../../utils/responsiveSize/responsiveSize';
export const bottomSheetStyle = (colors, bottom, deviceWidth) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: colors.white,
      borderTopLeftRadius: rs(32),
      borderTopRightRadius: rs(32),
      overflow: 'hidden',
    },
    dynamicHeight: {
      bottom: bottom,
      shadowOffset: {
        height: -3,
      },
    },
    topBar: {
      width: rs(60),
      height: 5,
      borderRadius: 100,
      position: 'absolute',
      top: 10,
      left: (deviceWidth - 60) / 2,
      zIndex: 999,
      backgroundColor: colors.dark,
    },
    backDrop: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 80,
      backgroundColor: 'rgba(19, 21, 23, 0.7)',
    },
    iconContainer: {marginHorizontal: rs(20), marginVertical: rs(28)},
  });
