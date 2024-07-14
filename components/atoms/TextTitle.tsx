import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, type TextProps } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  text: string
} & TextProps

export const TextTitle = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <Text
      fontSize={40}
      fontWeight={'500'}
      lineHeight={56}
      color={colors.midnightBlue}
    >{props.text}</Text>
  )
}
