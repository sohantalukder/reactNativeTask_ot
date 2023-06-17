import {View, Text, Image, Pressable, Alert} from 'react-native';
import React, {useState} from 'react';
import {useTheme} from '@react-navigation/native';
import CustomButton from '../CustomButton/CustomButton';
import {cardStyle} from './card.style';
import Dots from '../../assets/svg/Dots.svg';
import CustomModal from '../CustomModal/CustomModal';
import useProviderData from '../../hooks/useProviderData';
import {storeData} from '../../utils/storage/storage';
import {displayNotification} from '../../utils/notification/notification';
import {myCustomShare} from '../../utils/share/myCustomShare';
const Card = ({item = {}, deletedList = false}) => {
  const {colors} = useTheme();
  const {
    handleBottomSheet,
    setUpdateData,
    lists,
    setLists,
    deletedLists,
    setDeletedLists,
  } = useProviderData();
  const [openModal, setOpenModal] = useState(false);
  const styles = cardStyle(colors);
  const {name, image, followers, following} = item;
  const linearColor = [colors.lightBlue, colors.lightBlue, colors.lightBlue];
  const deleteList = () => {
    const updatedLists = lists.filter(list => list?.id !== item?.id);
    setLists(updatedLists);
    const updatedDeletedLists = [item, ...deletedLists];
    setDeletedLists(updatedDeletedLists);
    storeData('deletedList', updatedDeletedLists);
    storeData('list', updatedLists);
    displayNotification(`Deleted Successfully ${item.name} list`);
  };
  const handleModal = value => {
    setOpenModal(!openModal);
    if (value === 'update') {
      setUpdateData(item);
      handleBottomSheet();
    } else if ('delete') {
      Alert.alert('Confirm Delete!', 'Are you want to delete?', [
        {
          text: 'Cancel',
          onPress: () => setOpenModal(!openModal),
        },
        {text: 'OK', onPress: () => deleteList()},
      ]);
    }
  };

  return (
    <>
      <View style={styles.cardCont}>
        {!deletedList && (
          <Pressable
            style={styles.actionBtn}
            onPress={() => setOpenModal(true)}>
            <Dots />
          </Pressable>
        )}
        <Image source={{uri: image}} style={styles.image} />
        <Text style={styles.tittleText}>{name}</Text>
        <Text style={styles.followers}>{followers}</Text>
        <Pressable style={styles.shareBtn} onPress={() => myCustomShare(item)}>
          <Text style={styles.shareText}>Share Now</Text>
        </Pressable>
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
