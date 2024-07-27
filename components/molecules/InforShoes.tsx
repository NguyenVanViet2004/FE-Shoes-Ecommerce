import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, View, type ViewProps } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  label: string
  nameShoes: string
  priceShoes: string
} & ViewProps

export const InforShoes = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <View {...props}>
      <Text
        fontSize={12}
        fontWeight={500}
        color={colors.cornflowerBlue}>{props.label}</Text>
      <Text
        fontSize={20}
        fontWeight={500}
        color={colors.midnightBlue}>{props.nameShoes}</Text>
      <Text
        fontSize={20}
        fontWeight={500}
        color={colors.midnightBlue}>${props.priceShoes}</Text>
    </View>
  )
}
