import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Colors from '../atoms/Colors';

import Animated, { FadeIn, useAnimatedRef } from 'react-native-reanimated';

type ColorScreenProps = {
  route: {
    name: string;
  };
  navigation: {
    goBack: () => void;
    addListener: (event: string, callback: () => void) => () => void;
  };
};

const ColorScreen: React.FC<ColorScreenProps> = ({ route, navigation }) => {
  const viewRef = useAnimatedRef<Animated.View>(null);
  const [bgColor, setBgColor] = useState<string>(Colors.white);

  useEffect(() => {
    switch (route.name) {
      case 'Home':
        setBgColor(Colors.primary);
        break;
      case 'Search':
        setBgColor(Colors.green);
        break;
      case 'Add':
        setBgColor(Colors.red);
        break;
      case 'Account':
        setBgColor(Colors.purple);
        break;
      case 'Like':
        setBgColor(Colors.yellow);
        break;
      default:
        setBgColor(Colors.white);
    }
  }, [route.name]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     viewRef.current?.animate({ 0: { opacity: 0.5 }, 1: { opacity: 1 } });
  //   });
  //   return () => unsubscribe;
  // }, [navigation]);

  return (
    <Animated.View
      ref={viewRef}
      entering={FadeIn.duration(800)}
      style={[styles.container, { backgroundColor: bgColor }]}
    >
      {/* <MyHeader
        menu
        onPressMenu={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      /> */}
      <View style={[styles.container, { backgroundColor: bgColor }]} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    height: 0.3,
    width: '100%',
    backgroundColor: Colors.gray,
    opacity: 0.8,
  },
  boldText: {
    fontWeight: 'bold',
  },
  contentContainerStyle: {
    paddingBottom: 200,
  },
  contentContainerStyle2: {
    paddingBottom: 100,
  },
});

export default ColorScreen;
