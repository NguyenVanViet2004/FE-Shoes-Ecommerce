import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, type ButtonProps } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  icon: React.ReactElement
} & ButtonProps

export const RenderButtonIcon = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <Button
      {...props}
      unstyled
      padding={10}
      borderRadius={50}
      backgroundColor={colors.white}
      alignSelf="baseline"
      icon={props.icon}
    >
    </Button>
  )
}
