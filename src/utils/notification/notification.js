import notifee from '@notifee/react-native';
export const displayNotification = async (body = '') => {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });
  await notifee.displayNotification({
    title: 'OrangeToolz',
    body: body,
    subtitle: 'Messages',
    android: {
      channelId,
      smallIcon: 'ic_launcher',
      pressAction: {
        id: 'default',
      },
    },
  });
};
