import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import useListData from '../hooks/useListData';
import {BOTTOM_TAB, LOGIN} from '../RouteName/RouteName';
import Login from '../../screens/Authentication/Login/Login';
import BottomTabNavigation from '../BottomTab/BottomTabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  //   const {user} = useListData();
  const user = '';
  return (
    <Stack.Navigator
      initialRouteName={user ? BOTTOM_TAB : LOGIN}
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
        animationDuration: 400,
      }}>
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={BOTTOM_TAB} component={BottomTabNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
