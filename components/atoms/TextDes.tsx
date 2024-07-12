import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, type TextProps } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  text: string
} & TextProps

export const TextDes = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <Text
      fontSize={20}
      fontWeight={'400'}
      lineHeight={32}
      color={colors.slateGray}
    >{props.text}</Text>
  )
}
