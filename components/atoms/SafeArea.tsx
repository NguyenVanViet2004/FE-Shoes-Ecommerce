import React from 'react'
import { type ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  children: React.ReactNode
  style?: ViewStyle
}

const SafeArea = (props: Props): JSX.Element => {
  return (
    <SafeAreaView
      style={props.style}
      testID="SafeArea">
      {props.children}
    </SafeAreaView>
  )
}

export default SafeArea
