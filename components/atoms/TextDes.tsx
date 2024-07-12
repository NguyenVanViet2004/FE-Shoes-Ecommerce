import React from 'react'
import { Text, type TextProps } from 'tamagui'

type Props = {
  text: string
} & TextProps

export const TextDes = (props: Props): React.ReactElement => {
  return (
    <Text
      fontSize={20}
      fontWeight={'400'}
      lineHeight={32}
      color={'#707B81'}
    >{props.text}</Text>
  )
}
