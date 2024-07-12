import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, type ButtonProps } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  title: string
} & ButtonProps

export const ButtonCustom = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <Button
      {...props}
      fontWeight={'500'}
      fontSize={18}
      color={colors.textButton}
      backgroundColor={colors.cornflowerBlue}
      borderRadius={50}

    >{props.title}</Button>
  )
}
