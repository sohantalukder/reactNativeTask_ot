import {useEffect, useState} from 'react';
import db from '../../demoData/demoData.json';
import {getData, multiGet} from '../utils/storage/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
  name: '',
  image: '',
  description: '',
  following: 0,
  followers: '102k Followers',
};

const useProvider = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addList, setAddList] = useState(initialState);
  const [user, setUser] = useState({});
  const [updateData, setUpdateData] = useState({});
  const [notifications, setNotifications] = useState([]);
  const [deletedLists, setDeletedLists] = useState([]);
  const [show, setShow] = useState(false);
  const handleBottomSheet = () => {
    setShow(!show);
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setLoading(true);
      setTimeout(async () => {
        const localStorageData = await multiGet([
          'list',
          'deletedList',
          'notifications',
        ]);
        const parseList = JSON.parse(localStorageData[0][1]);
        const parseDList = JSON.parse(localStorageData[1][1]);
        const parseNotifi = JSON.parse(localStorageData[2][1]);
        const listData = parseList?.length > 0 ? parseList : db.lists;
        const listDData = parseDList?.length > 0 ? parseDList : [];
        const notifeeData = parseNotifi?.length > 0 ? parseNotifi : [];
        setLists(listData);
        setDeletedLists(listDData);
        setNotifications(notifeeData);
        setLoading(false);
      }, 2000);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return {
    lists,
    setLists,
    loading,
    addList,
    setAddList,
    user,
    setUser,
    handleBottomSheet,
    show,
    updateData,
    setUpdateData,
    initialState,
    deletedLists,
    setDeletedLists,
    notifications,
    setNotifications,
  };
};

export default useProvider;
