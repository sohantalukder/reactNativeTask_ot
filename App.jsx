/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './src/utils/colors/colors';
import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './src/navigation/StackNavigation/StackNavigation';
import {getData} from './src/utils/storage/storage';
import useProviderData from './src/hooks/useProviderData';

const App = () => {
  const {setUser} = useProviderData();
  useEffect(() => {
    SplashScreen.hide();
    async function getDataFromStorage() {
      let auth = await getData('auth');
      setUser(JSON.parse(auth));
    }
    getDataFromStorage();
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer theme={colors}>
          <StackNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
