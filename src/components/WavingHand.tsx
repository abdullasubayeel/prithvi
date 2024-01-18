import React, {useEffect, useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  Easing,
  Pressable,
} from 'react-native';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

const WavingImage = ({handleOnPress}: any) => {
  const rotationValue = useRef(new Animated.Value(0)).current;

  const rotateImage = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotationValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(rotationValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      {iterations: -1},
    ).start();
  };

  useEffect(() => {
    rotateImage();
  }, []);

  const rotateInterpolate = rotationValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '25deg', '0deg'],
    extrapolate: 'clamp',
  });

  const animatedStyle = {
    transform: [{rotate: rotateInterpolate}],
  };

  return (
    <Pressable style={styles.container} onPress={handleOnPress}>
      <TapGestureHandler
        onHandlerStateChange={event =>
          event.nativeEvent.state === State.END && rotateImage()
        }>
        <Animated.View style={[styles.imageContainer, animatedStyle]}>
          <Image
            source={require('../assets/images/hand.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </Animated.View>
      </TapGestureHandler>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});

export default WavingImage;
