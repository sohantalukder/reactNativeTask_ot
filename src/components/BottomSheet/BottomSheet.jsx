import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, Pressable, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Arrow from '../../assets/svg/Left Arrow.svg';
import {useTheme} from '@react-navigation/native';
import {bottomSheetStyle} from './bottomSheet.style';

const BottomSheet = ({
  show,
  onDismiss,
  enableBackdropDismiss = true,
  children,
}) => {
  const bottomSheetHeight = Dimensions.get('screen').height * 0.6;
  const deviceWidth = Dimensions.get('screen').width;
  const [open, setOpen] = useState(show);
  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;
  const {colors} = useTheme();
  const styles = bottomSheetStyle(colors, bottom, deviceWidth);
  const onGesture = event => {
    if (event.nativeEvent.translationY > 0) {
      bottom.setValue(-event.nativeEvent.translationY);
    }
  };

  const onGestureEnd = event => {
    if (event.nativeEvent.translationY > bottomSheetHeight / 2) {
      onDismiss();
    } else {
      bottom.setValue(0);
    }
  };

  useEffect(() => {
    if (show) {
      setOpen(show);
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false);
      });
    }
  }, [show]);

  if (!open) {
    return null;
  }
  return (
    <>
      <Pressable
        onPress={enableBackdropDismiss ? onDismiss : undefined}
        style={styles.backDrop}
      />
      <Animated.View style={[styles.container, styles.dynamicHeight]}>
        <PanGestureHandler onGestureEvent={onGesture} onEnded={onGestureEnd}>
          <View>
            <View style={styles.topBar} />
            <Pressable onPress={onDismiss} style={styles.iconContainer}>
              <Arrow />
            </Pressable>
          </View>
        </PanGestureHandler>
        {children}
      </Animated.View>
    </>
  );
};

export default BottomSheet;
