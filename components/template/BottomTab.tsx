import {
  type BottomTabBarButtonProps,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs'
import React, { useEffect, useRef } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native'
import * as Animatable from 'react-native-animatable'

import getColors from '~/constants/Colors'
import Icon, { Icons } from '~/components/atoms/Icons'
import AccountScreen from '~/components/template/AccountScreen'
import Favourite from '~/components/template/FavouriteScreen'
import HomeScreen from '~/components/template/HomeScreen'
import NotificationScreen from '~/components/template/NotificationScreen'
import OderScreen from '~/components/template/OderScreen'

interface TabItem {
  route: string
  label: string
  type: any
  icon: string
  component: React.ComponentType<any>
}
const colors = getColors(useColorScheme())
const TabArr: TabItem[] = [
  {
    component: HomeScreen,
    icon: 'home',
    label: 'Home',
    route: 'Home',
    type: Icons.AntDesign
  },
  {
    component: Favourite,
    icon: 'heart',
    label: 'Favourite',
    route: 'Favourite',
    type: Icons.Feather
  },
  {
    component: OderScreen,
    icon: 'shopping-cart',
    label: 'Oder',
    route: 'Oder',
    type: Icons.Feather
  },
  {
    component: NotificationScreen,
    icon: 'notifications-none',
    label: 'Notifications',
    route: 'Notifications',
    type: Icons.MaterialIcons
  },
  {
    component: AccountScreen,
    icon: 'user-circle-o',
    label: 'Account',
    route: 'Account',
    type: Icons.FontAwesome
  }
]

const Tab = createBottomTabNavigator()

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

const TabButton: React.FC<TabButtonProps> =
  ({ item, onPress, accessibilityState }) => {
    const focused = accessibilityState?.selected ?? false
    const viewRef = useRef<any>(null)
    const circleRef = useRef<any>(null)
    const textRef = useRef<any>(null)
    const isDarkMode = getColors(useColorScheme())
    const color = isDarkMode ? colors.white : colors.black
    const bgColor = colors.background

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
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={styles.container}>
        <Animatable.View
          ref={viewRef}
          duration={1000}
          style={styles.container}>
          <View
            style={
              [styles.btn, { backgroundColor: bgColor, borderColor: bgColor }]}>
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
            style={[styles.text, { color }]}>
            {item.label}
          </Animatable.Text>
        </Animatable.View>
      </TouchableOpacity>
    )
  }



const BottomTabBar: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeareaviewcontainer}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar
        }}
      >
        {TabArr.map((item, index) => (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarButton: (props) =>
                <TabButton {...props} item={item} />,
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
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderRadius: 25,
    borderWidth: 4,
    height: 50,
    justifyContent: 'center',
    width: 50
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center'
  },
  container: {
    alignItems: 'center',
    flex: 1,
    height: 70,
    justifyContent: 'center'
  },
  safeareaviewcontainer: {
    flex: 1
  },
  tabBar: {
    borderRadius: 16,
    height: 70,
    margin: 16,
    position: 'absolute'
  },
  text: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center'
  }
})

export default BottomTabBar
