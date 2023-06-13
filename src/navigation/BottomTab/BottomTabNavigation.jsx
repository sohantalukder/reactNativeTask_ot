import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '../../assets/svg/Home.svg';
import DeleteIcon from '../../assets/svg/Delete.svg';
import ProfileIcon from '../../assets/svg/Profile.svg';
import {rs} from '../../utils/responsiveSize/responsiveSize';
import {DASHBOARD, DELETED_LIST, PROFILE} from '../RouteName/RouteName';
import Profile from '../../screens/Profile/Profile';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Item from './Item/Item';
import DeletedLists from '../../screens/DeletedLists/DeletedLists';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  const tabBarStyle = styles();
  return (
    <BottomTab.Navigator screenOptions={tabBarStyle.bottomTabScreenOptions}>
      <BottomTab.Screen
        name={DASHBOARD}
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Item
                title={'Home'}
                Icon={HomeIcon}
                focused={focused}
                height={rs(28)}
                width={rs(28)}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={DELETED_LIST}
        component={DeletedLists}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Item
                title={'Deleted List'}
                Icon={DeleteIcon}
                focused={focused}
                height={rs(28)}
                width={rs(28)}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Item
                title={'Profile'}
                Icon={ProfileIcon}
                focused={focused}
                height={rs(28)}
                width={rs(28)}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = () =>
  StyleSheet.create({
    bottomTabScreenOptions: {
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: Platform.OS === 'ios' ? rs(90) : rs(70),
        borderTopWidth: 1,
        // borderTopColor: colors.ifSecondary,
        // backgroundColor: colors.btnSecondary,
      },
    },
  });
