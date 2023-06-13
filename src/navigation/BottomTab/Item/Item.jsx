import {Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {itemStyles} from './item.style';

const Item = ({title, Icon, width, height, focused}) => {
  const {colors} = useTheme();
  const styles = itemStyles(colors, focused);
  return (
    <View style={styles.cont}>
      <Icon
        fill={focused ? colors.foil : colors.draculaOrchid}
        height={height}
        width={width}
      />
      <Text style={styles.label}>{title}</Text>
    </View>
  );
};

export default Item;
