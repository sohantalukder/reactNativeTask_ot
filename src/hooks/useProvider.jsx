import {useEffect, useState} from 'react';
import db from '../../demoData/demoData.json';
import {getData} from '../utils/storage/storage';
const initialState = {
  name: '',
  image: '',
  description: '',
};

const useProvider = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [addData, setAddList] = useState(initialState);
  const [user, setUser] = useState({});
  const [updateLoading, setUpdateLoading] = useState(false);
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
        const parseList = JSON.parse(listFromStorage);
        const listData = parseList?.length > 0 ? parseList : db.lists;
        setLists(listData);
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
    updateLoading,
    setUpdateLoading,
    addData,
    setAddList,
    user,
    setUser,
    handleBottomSheet,
    show,
  };
};

export default useProvider;
