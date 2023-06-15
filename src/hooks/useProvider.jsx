import {useEffect, useState} from 'react';
import db from '../../demoData/demoData.json';
import {getData} from '../utils/storage/storage';
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
        const listFromStorage = await getData('list');
        const deletedFromStorage = await getData('deletedList');
        const parseList = JSON.parse(listFromStorage);
        const parseDList = JSON.parse(deletedFromStorage);
        const listData = parseList?.length > 0 ? parseList : db.lists;
        const listDData = parseDList?.length > 0 ? parseDList : [];
        setLists(listData);
        setDeletedLists(listDData);
        setLoading(false);
      }, 4000);
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
  };
};

export default useProvider;
