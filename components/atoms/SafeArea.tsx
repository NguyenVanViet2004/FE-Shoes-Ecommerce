import React from 'react'
import { SafeAreaView, type ViewStyle } from 'react-native'

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
