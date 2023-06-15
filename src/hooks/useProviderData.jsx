import {useContext} from 'react';
import {ProviderContext} from '../context/Provider';

const useProviderData = () => {
  return useContext(ProviderContext);
};

export default useProviderData;
