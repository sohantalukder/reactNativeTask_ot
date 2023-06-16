import {View, Text, Image} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {notificationStyle} from './notifications.style';

const NotificationCard = ({item}) => {
  const {colors} = useTheme();
  const styles = notificationStyle(colors);
  return (
    <View style={styles.cardCont}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View>
        <Text style={styles.header}>{item?.name}</Text>
        <Text style={styles.description}>{item?.description}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;
