import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, { FadeIn, useAnimatedRef } from 'react-native-reanimated'

import Colors from '../atoms/Colors'

interface ColorScreenProps {
  route: {
    name: string
  }
  navigation: {
    goBack: () => void
    addListener: (event: string, callback: () => void) => () => void
  }
}

const ColorScreen: React.FC<ColorScreenProps> = ({ route, navigation }) => {
  const viewRef = useAnimatedRef<Animated.View>(null)
  const [bgColor, setBgColor] = useState<string>(Colors.white)

  useEffect(() => {
    switch (route.name) {
      case 'Home':
        setBgColor(Colors.primary)
        break
      case 'Search':
        setBgColor(Colors.green)
        break
      case 'Add':
        setBgColor(Colors.red)
        break
      case 'Account':
        setBgColor(Colors.purple)
        break
      case 'Like':
        setBgColor(Colors.yellow)
        break
      default:
        setBgColor(Colors.white)
    }
  }, [route.name])

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
  )
}

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold'
  },
  container: {
    flex: 1
  },
  contentContainerStyle: {
    paddingBottom: 200
  },
  contentContainerStyle2: {
    paddingBottom: 100
  },
  rowView: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  separator: {
    backgroundColor: Colors.gray,
    height: 0.3,
    opacity: 0.8,
    width: '100%'
  }
})

export default ColorScreen
