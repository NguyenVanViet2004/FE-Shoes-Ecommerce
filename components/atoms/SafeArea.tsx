import React from 'react'
import { useColorScheme, type ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import getColors from '~/constants/Colors'

interface Props {
  children: React.ReactNode
  style?: ViewStyle
}

const SafeArea = (props: Props): JSX.Element => {
  const colors = getColors(useColorScheme())

  return (
    <SafeAreaView
      style={[props.style, { backgroundColor: colors.lightSilver }]}
      testID="SafeArea">
      {props.children}
    </SafeAreaView>
  )
}

export default SafeArea