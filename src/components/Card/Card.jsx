import {View, Text, Image} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import CustomButton from '../CustomButton/CustomButton';
import {cardStyle} from './card.style';
const Card = ({item = {}}) => {
  const {colors} = useTheme();
  const styles = cardStyle(colors);
  const {name, image, followers, following} = item;
  const linearColor = [colors.lightBlue, colors.lightBlue, colors.lightBlue];
  return (
    <View style={styles.cardCont}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.tittleText}>{name}</Text>
      <Text style={styles.followers}>{followers}</Text>
      <CustomButton
        text={following ? 'Following' : 'Follow'}
        btnContStyle={styles.btnCont}
        linearColor={following && linearColor}
        btnTextStyle={cardStyle(colors, following).btnText}
      />
    </View>
  );
};

export default Card;
