import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BOTTOM_TAB, LOGIN} from '../RouteName/RouteName';
import Login from '../../screens/Authentication/Login/Login';
import BottomTabNavigation from '../BottomTab/BottomTabNavigation';
import useProviderData from '../../hooks/useProviderData';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const {user} = useProviderData();
  return (
    <Stack.Navigator
      initialRouteName={user?.email ? BOTTOM_TAB : LOGIN}
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
