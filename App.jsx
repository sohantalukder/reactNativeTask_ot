/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <View>
            <Text>App</Text>
          </View>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
