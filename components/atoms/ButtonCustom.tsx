import React from 'react'
import { Button, type ButtonProps } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  title: string
} & ButtonProps

export const ButtonCustom = (props: Props): React.ReactElement => {
  const colors = getColors('dark')
  return (
    <Button
      {...props}
      fontWeight={'500'}
      fontSize={18}
      color="white"
      backgroundColor={colors.cornflowerBlue}
      borderRadius={50}

    >{props.title}</Button>
  )
}
