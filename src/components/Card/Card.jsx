import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import CustomButton from '../CustomButton/CustomButton';
import {cardStyle} from './card.style';
import Action from '../Action/Action';
import CustomModal from '../CustomModal/CustomModal';
const Card = ({item = {}, deletedList = false, openBottomSheet}) => {
  const {colors} = useTheme();
  const [openModal, setOpenModal] = useState(false);
  const styles = cardStyle(colors);
  const {name, image, followers, following} = item;
  const linearColor = [colors.lightBlue, colors.lightBlue, colors.lightBlue];
  const handleModal = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <View style={styles.cardCont}>
        {!deletedList && <Action handleModal={handleModal} />}
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.tittleText}>{name}</Text>
        <Text style={styles.followers}>{followers}</Text>
        <CustomButton
          text={following ? 'Following' : 'Follow'}
          btnContStyle={styles.btnCont}
          linearColor={following && linearColor}
          btnTextStyle={cardStyle(colors, following).btnText}
        />
      </View>
      {openModal && !deletedList && (
        <CustomModal handleModal={handleModal} openModal={openModal} />
      )}
    </>
  );
};

export default Card;
