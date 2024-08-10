import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, Text, type TextProps, View, type ViewProps } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  leftText: string
  rightText?: string
} & ViewProps & TextProps

export const ShoesCategory = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <View
      {...props}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text
        {...props}
        fontWeight={500}
        lineHeight={24}
      >{ props.leftText}</Text>
      <Button unstyled>
        <Text
          color={colors.cornflowerBlue}
          fontSize={13}
          fontWeight={400}
          lineHeight={16}>{ props.rightText}</Text>
      </Button>
    </View >
  )
}
