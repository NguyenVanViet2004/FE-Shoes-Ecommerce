import {
  type BottomTabBarButtonProps,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import React, { useEffect, useRef } from 'react'
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { Button } from 'tamagui'

import Icon from '~/components/atoms/Icons'
import getColors from '~/constants/Colors'
import TabItems, { type TabItem } from '~/constants/TabItems'

const { width } = Dimensions.get('window')

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 }
}
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 }
}

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 }
}
const circle2 = {
  0: { scale: 1 },
  1: { scale: 0 }
}

type TabButtonProps = BottomTabBarButtonProps & {
  item: TabItem
}

const TabButton: React.FC<TabButtonProps> = ({
  item,
  onPress,
  accessibilityState
}) => {
  const colors = getColors(useColorScheme())
  const focused = accessibilityState?.selected ?? false
  const viewRef = useRef<any>(null)
  const circleRef = useRef<any>(null)
  const textRef = useRef<any>(null)
  const backgroundColor = colors.background
  const responsiveFontSize = width * 0.02

  useEffect(() => {
    if (focused) {
      viewRef.current?.animate(animate1)
      circleRef.current?.animate(circle1)
      textRef.current?.transitionTo({ scale: 1 })
    } else {
      viewRef.current?.animate(animate2)
      circleRef.current?.animate(circle2)
      textRef.current?.transitionTo({ scale: 0 })
    }
  }, [focused])

  return (
    <Button
      unstyled
      onPress={onPress}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={1000}
        style={styles.container}>
        <View
          style={
            [styles.btn,
              {
                backgroundColor: focused ? colors.primary : backgroundColor,
                borderColor: backgroundColor
              }
            ]}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? colors.white : colors.primary} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={[styles.text, { fontSize: responsiveFontSize }]}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </Button>
  )
}

const BottomTabBar: React.FC = () => {
  const Tab = createBottomTabNavigator()

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar
        }}
      >
        {TabItems.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarButton: (props) => <TabButton {...props} item={item} />,
              tabBarShowLabel: false
            }}
          />
        ))}
      </Tab.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 4,
    height: 50,
    justifyContent: 'center',
    width: 50
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    borderRadius: 25,
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center',
    borderRadius: 0,
    borderWidth: 0,
    flex: 1,
    gap: 10,
    height: 70,
    justifyContent: 'center'
  },
  safeAreaViewContainer: {
    flex: 1
  },
  tabBar: {
    height: 70,
    margin: 16,
    position: 'absolute',
    ...Platform.select({
      android: {
        elevation: 8
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { height: 2, width: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 5
      }
    }),
    borderRadius: 15
  },
  text: {
    fontWeight: '500',
    textAlign: 'center'
  }
})

export default BottomTabBar
