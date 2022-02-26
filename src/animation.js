/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {Animated, TouchableOpacity, View} from 'react-native';

export default function Animation() {
  const animatedValue = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   Animated.timing(animatedValue, {
  //     toValue: 100, %
  //     useNativeDriver: true,
  //   }).start();
  // }, [animatedValue]);
  return (
    <>
      <Animated.View
        style={{
          marginTop: 100,
          backgroundColor: '#19b5fe',
          width: 100,
          height: 100,
          borderRadius: animatedValue.interpolate({
            inputRange: [0, 150],
            outputRange: [50, 0],
          }),
          transform: [
            {translateX: animatedValue},
            {translateY: animatedValue},
            {
              scale: animatedValue.interpolate({
                inputRange: [0, 200],
                outputRange: [1, 2],
              }),
            },
          ],
        }}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={{width: 500, height: 100}}
        onPress={() => {
          Animated.timing(animatedValue, {
            toValue: 150,
            useNativeDriver: true,
            duration: 2000,
          }).start();
        }}
      />
    </>
  );
}
// 1. how does the animation work?
// 2. what style properties should I use?
// 3. what Animated value(s) should I use?
// 4. how should the animated value change?
// 5. which component to apply the animation to?
