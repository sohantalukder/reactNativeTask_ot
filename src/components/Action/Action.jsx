import {Text, Pressable} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import {actionStyle} from './action.style';

const Action = ({handleModal}) => {
  const {colors} = useTheme();
  const styles = actionStyle(colors);
  return (
    <Pressable onPress={handleModal} style={styles.cont}>
      <Text style={styles.text}>.</Text>
      <Text style={styles.text}>.</Text>
      <Text style={styles.text}>.</Text>
    </Pressable>
  );
};

export default Action;
