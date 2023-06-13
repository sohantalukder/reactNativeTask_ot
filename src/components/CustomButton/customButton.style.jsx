const {StyleSheet} = require('react-native');
const {rs} = require('../../utils/responsiveSize/responsiveSize');

export const customButtonStyle = () =>
  StyleSheet.create({
    btnContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      height: rs(54),
      minWidth: rs(130),
      borderRadius: rs(14),
    },
    btnText: {
      fontWeight: '600',
      fontSize: rs(15),
      lineHeight: rs(22),
    },
  });
