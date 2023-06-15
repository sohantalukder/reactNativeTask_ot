import {useEffect, useState} from 'react';
import db from '../../demoData/demoData.json';
const initialState = {
  name: '',
  image: '',
  description: '',
};

const useLists = () => {
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
    setLoading(true);
    const fetchData = async () => {
      const listData = await new Promise(resolve =>
        setTimeout(() => resolve(db.lists), 4000),
      );
      setLists(listData);
      setLoading(false);
    };
    fetchData();
    return () => {};
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

export default useLists;
