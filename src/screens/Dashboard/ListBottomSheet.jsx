import {View, Text} from 'react-native';
import React, {useState} from 'react';
import BottomSheet from '../../components/BottomSheet/BottomSheet';
import {rs} from '../../utils/responsiveSize/responsiveSize';
import {useTheme} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Add from '../../assets/svg/Add.svg';
import {dashboardStyle} from './dashboard.style';
import useProviderData from '../../hooks/useProviderData';
import {storeData} from '../../utils/storage/storage';
import {displayNotification} from '../../utils/notification/notification';
const AddListBottomSheet = () => {
  const {
    show,
    handleBottomSheet,
    addList,
    setAddList,
    initialState,
    lists,
    setLists,
    updateData,
    setUpdateData,
    notifications,
    setNotifications,
  } = useProviderData();
  const {colors} = useTheme();
  const linearColor = [colors.dark, colors.dark, colors.dark];
  const [loading, setLoading] = useState(false);
  const styles = dashboardStyle(colors);
  const handleChange = (name, value) => {
    updateData?.name
      ? setUpdateData({...updateData, [name]: value})
      : setAddList({...addList, [name]: value});
  };
  const addNewList = async () => {
    const obj = {...addList, id: lists?.length + 1};
    const updatedLists = [obj, ...lists];
    setLists(updatedLists);
    setAddList(initialState);
    const updatedNotifications = [obj, ...notifications];
    setNotifications(updatedNotifications);
    displayNotification(`Created Successfully ${addList.name} list`);
    storeData('list', updatedLists);
    storeData('notifications', updatedNotifications);
    return;
  };
  const updateListData = () => {
    const foundIndex = lists.findIndex(x => x.id == updateData.id);
    lists[foundIndex] = updateData;
    const updatedNotifications = [updateData, ...notifications];
    setNotifications(updatedNotifications);
    displayNotification(`Updated Successfully ${updateData.name} list`);
    setUpdateData({});
    storeData('list', lists);
    storeData('notifications', updatedNotifications);
    return;
  };
  const handleSubmit = () => {
    const {name, image, description} = updateData?.name ? updateData : addList;
    if (!name || !image || !description) return;
    setLoading(true);
    setTimeout(() => {
      updateData?.id ? updateListData() : addNewList();
      setLoading(false);
      handleBottomSheet();
    }, 4000);
  };
  const showIcon = !loading && (!updateData || !updateData.id);
  const textIcon = showIcon && (
    <Add fill={colors.white} height={rs(22)} width={rs(22)} />
  );

  return (
    <BottomSheet
      show={show}
      onDismiss={() => {
        handleBottomSheet(), setUpdateData({}), setAddList(initialState);
      }}>
      <View style={styles.bottomSheetCont}>
        <Text style={styles.titleText}>
          {updateData?.id ? 'Update Collection' : 'Create New Collection'}
        </Text>
        <CustomInput
          placeholder="Image Link"
          onChangeText={text => handleChange('image', text)}
          style={styles.mt_16}
          value={updateData?.image ? updateData?.image : addList.image}
        />
        <CustomInput
          placeholder="Collection Name"
          onChangeText={text => handleChange('name', text)}
          style={styles.mt_16}
          value={updateData?.name ? updateData?.name : addList.name}
        />
        <CustomInput
          placeholder="Description"
          numberOfLines={4}
          multiline={true}
          onChangeText={text => handleChange('description', text)}
          style={styles.areaField}
          value={
            updateData?.description
              ? updateData?.description
              : addList.description
          }
          textAlignVertical={'top'}
        />
        <CustomButton
          textIcon={textIcon}
          onPress={handleSubmit}
          linearColor={linearColor}
          text={
            loading
              ? 'Loading...'
              : updateData?.id
              ? 'Update List'
              : 'Create New'
          }
          disabled={loading}
          btnTextStyle={styles.btnTextStyle}
          btnContStyle={styles.btnContStyle}
        />
      </View>
    </BottomSheet>
  );
};

export default AddListBottomSheet;
