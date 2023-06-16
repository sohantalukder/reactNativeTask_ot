import {FlatList, ActivityIndicator} from 'react-native';
import React, {useCallback} from 'react';
import useProviderData from '../../hooks/useProviderData';
import {useTheme} from '@react-navigation/native';
import {notificationStyle} from './notifications.style';
import NotificationCard from './NotificationCard';
import EmptyList from '../../components/EmptyList/EmptyList';

const Notifications = () => {
  const {notifications, loading} = useProviderData();
  const {colors} = useTheme();
  const styles = notificationStyle(colors);
  const memorizeList = useCallback(
    ({item}) => <NotificationCard item={item} />,
    [],
  );
  return (
    <>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={notifications}
          keyExtractor={(_, i) => i}
          renderItem={memorizeList}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          initialNumToRender={4}
          windowSize={10}
          ListEmptyComponent={<EmptyList text={'No Notification available'} />}
        />
      )}
    </>
  );
};

export default Notifications;
