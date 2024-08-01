import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, type ButtonProps } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  title: string
} & ButtonProps

export const PositiveButton = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <Button
      {...props}
      testID="positive-button"
      fontWeight={'500'}
      fontSize={18}
      color={colors.white}
      backgroundColor={colors.cornflowerBlue}
      borderRadius={50}

    >{props.title}</Button>
  )
}
