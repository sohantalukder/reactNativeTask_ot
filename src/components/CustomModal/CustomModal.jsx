import {Modal, View} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import {cardStyle} from '../Card/card.style';
import {useTheme} from '@react-navigation/native';
import {rs} from '../../utils/responsiveSize/responsiveSize';
const CustomModal = ({handleModal, openModal}) => {
  const following = 1;
  const following2 = 0;
  const {colors} = useTheme();
  const styles = cardStyle(colors);
  const linearColor = [colors.lightBlue, colors.lightBlue, colors.lightBlue];
  return (
    <View>
      <Modal animationType="fade" transparent={true} visible={openModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CustomButton
              text={'Update Modal'}
              onPress={handleModal}
              btnContStyle={[styles.btnCont, {marginBottom: rs(10)}]}
              btnTextStyle={cardStyle(colors, following2).btnText}
            />
            <CustomButton
              text={'Delete Modal'}
              onPress={handleModal}
              btnContStyle={styles.btnCont}
              linearColor={linearColor}
              btnTextStyle={cardStyle(colors, following).btnText}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default CustomModal;
