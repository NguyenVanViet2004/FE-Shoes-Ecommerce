import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native'
import { Atom, AudioWaveform } from '@tamagui/lucide-icons'
import { Link, Tabs } from 'expo-router'
import { Alert, Animated, StyleSheet, TouchableOpacity } from 'react-native'
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar'
import { Button, useTheme, View } from 'tamagui'

// Định nghĩa kiểu cho các props của renderTabBar
interface RenderTabBarProps {
  routeName: string
  selectedTab: string
  navigate: (routeName: string) => void
}

// Định nghĩa kiểu cho hàm _renderIcon
const _renderIcon = (routeName: string, selectedTab: string): JSX.Element => {
  let icon = ''

  switch (routeName) {
    case 'title1':
      icon = 'ios-home-outline'
      break
    case 'title2':
      icon = 'settings-outline'
      break
  }

  return (
    <Ionicons
      name={'search'}
      size={25}
      color={routeName === selectedTab ? 'black' : 'gray'}
    />
  )
}

// Định nghĩa kiểu cho hàm renderTabBar
const renderTabBar = ({ routeName, selectedTab, navigate }: RenderTabBarProps): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() => { navigate(routeName) }}
      style={styles.tabbarItem}
    >
      {_renderIcon(routeName, selectedTab)}
    </TouchableOpacity>
  )
}

// Các component Screen1 và Screen2
const Screen1: React.FC = () => {
  return <View style={styles.screen1} />
}

const Screen2: React.FC = () => {
  return <View style={styles.screen2} />
}

export default function TabLayout (): React.ReactElement {
  const theme = useTheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerRight: () => (
            <Link href="/modal" asChild>
              <Button mr="$4" bg="$purple8" color="$purple12">
                Hello!
              </Button>
            </Link>
          ),
          tabBarIcon: ({ color }) => <Atom color={color} />,
          title: 'Tab One'
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarIcon: ({ color }) => <AudioWaveform color={color} />,
          title: 'Tab Two'
        }}
      />

      <NavigationContainer>
        <CurvedBottomBarExpo.Navigator
          type="DOWN"
          style={styles.bottomBar}
          shadowStyle={styles.shawdow}
          height={55}
          circleWidth={50}
          bgColor="white"
          initialRouteName="title1"
          borderTopLeftRight
          renderCircle={({ selectedTab, navigate }) => (
            <Animated.View style={styles.btnCircleUp}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => { Alert.alert('Click Action') }}
              >
                <Ionicons name={'apps-sharp'} color="gray" size={25} />
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}
        >
          <CurvedBottomBarExpo.Screen
            name="title1"
            position="LEFT"
            component={Screen1}
          />
          <CurvedBottomBarExpo.Screen
            name="title2"
            component={Screen2}
            position="RIGHT"
          />
        </CurvedBottomBarExpo.Navigator>
      </NavigationContainer>
    </Tabs>

  )
}

export const styles = StyleSheet.create({
  bottomBar: {},
  btnCircleUp: {
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    borderRadius: 30,
    bottom: 30,
    elevation: 1,
    height: 60,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: 60
  },
  button: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    padding: 20
  },
  img: {
    height: 30,
    width: 30
  },
  imgCircle: {
    height: 30,
    tintColor: 'gray',
    width: 30
  },
  screen1: {
    backgroundColor: '#BFEFFF',
    flex: 1
  },
  screen2: {
    backgroundColor: '#FFEBCD',
    flex: 1
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowOpacity: 1,
    shadowRadius: 5
  },
  tabbarItem: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})
