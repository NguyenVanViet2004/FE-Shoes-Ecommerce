import React from 'react'
import { Text, type TextProps } from 'tamagui'

type Props = {
  text: string
} & TextProps

export const TextTitle = (props: Props): React.ReactElement => {
  return (
    <Text
      fontSize={40}
      fontWeight={'500'}
      lineHeight={56}
      color={'#1A2530'}
    >{props.text}</Text>
  )
}
