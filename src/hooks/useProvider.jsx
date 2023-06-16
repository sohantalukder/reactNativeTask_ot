import {useEffect, useState} from 'react';
import db from '../../demoData/demoData.json';
import {multiGet} from '../utils/storage/storage';
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
      setTimeout(() => {
        multiGet(['list', 'deletedList', 'notifications']).then(
          ([listData, listDData, notifeeData]) => {
            const parseList = JSON.parse(listData[1] || db);
            const parseDList = JSON.parse(listDData[1] || '[]');
            const parseNotifi = JSON.parse(notifeeData[1] || '[]');
            setLists(parseList);
            setDeletedLists(parseDList);
            setNotifications(parseNotifi);
            setLoading(false);
          },
        );
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
