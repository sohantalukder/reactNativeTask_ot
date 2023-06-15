import {useContext} from 'react';
import Provider from '../context/Provider';

const useListData = () => {
  return useContext(Provider);
};

export default useListData;
