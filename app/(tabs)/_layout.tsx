import { Atom, AudioWaveform } from '@tamagui/lucide-icons'
import { Link, Tabs } from 'expo-router'
import { Button, useTheme } from 'tamagui'

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

    </Tabs>

  )
}
