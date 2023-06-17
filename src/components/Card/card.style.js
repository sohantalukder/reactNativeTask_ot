import {Dimensions, StyleSheet} from 'react-native';
import {rs} from '../../utils/responsiveSize/responsiveSize';
const {width} = Dimensions.get('screen');
export const cardStyle = (colors, following) =>
  StyleSheet.create({
    cardCont: {
      width: (width - rs(48)) / 2,
      alignItems: 'center',
      borderRadius: 12,
      paddingVertical: rs(28),
      paddingHorizontal: rs(20),
      position: 'relative',
      backgroundColor: colors.white,
    },
    actionBtn: {
      position: 'absolute',
      right: 0,
      width: rs(50),
      height: rs(50),
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: rs(96),
      width: rs(96),
      borderRadius: 96 / 2,
      resizeMode: 'cover',
      marginBottom: rs(12),
    },
    tittleText: {
      fontFamily: 'Inter-SemiBold',
      textAlign: 'center',
      fontSize: rs(15),
      lineHeight: rs(22),
      color: colors.dark,
      marginBottom: 2,
    },
    followers: {
      fontFamily: 'Inter-Regular',
      textAlign: 'center',
      fontSize: rs(12),
      lineHeight: rs(16),
      color: colors.distantThunder,
    },
    shareBtn: {
      paddingHorizontal: rs(16),
      paddingVertical: rs(10),
    },
    shareText: {
      color: colors.blueRibbon,
      fontFamily: 'Inter-SemiBold',
      fontSize: rs(14),
      lineHeight: rs(18),
    },
    btnCont: {
      height: rs(38),
      borderRadius: rs(10),
    },
    btnText: {
      color: following ? colors.olympicBlue : colors.white,
      fontFamily: 'Inter-SemiBold',
      fontSize: rs(14),
      lineHeight: rs(18),
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: rs(22),
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  });
