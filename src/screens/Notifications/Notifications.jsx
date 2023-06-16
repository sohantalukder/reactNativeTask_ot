import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useCallback} from 'react';
import useProviderData from '../../hooks/useProviderData';
import {useTheme} from '@react-navigation/native';
import {dashboardStyle} from '../Dashboard/dashboard.style';
import {notificationStyle} from './notifications.style';
import NotificationCard from './NotificationCard';

const Notifications = () => {
  const {notifications, loading} = useProviderData();
  const {colors} = useTheme();
  const styles = dashboardStyle(colors);
  const notificationStyles = notificationStyle(colors);
  const memorizeList = useCallback(
    ({item}) => <NotificationCard item={item} />,
    [],
  );
  const renderEmptyComponent = () => (
    <View style={styles.emptyListCont}>
      <Text style={styles.emptyText}>No Notification available</Text>
    </View>
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
          contentContainerStyle={notificationStyles.container}
          showsVerticalScrollIndicator={false}
          initialNumToRender={4}
          windowSize={10}
          ListEmptyComponent={renderEmptyComponent}
        />
      )}
    </>
  );
};

export default Notifications;
