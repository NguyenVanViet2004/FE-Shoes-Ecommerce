import React from 'react'
import { useColorScheme } from 'react-native'
import { View, type ViewProps } from 'tamagui'

import getColors from '~/constants/Colors'

type Props = {
  title?: string
} & ViewProps

const Dot = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())

  return (
    <View
      {...props}
      position="absolute"
      height={16}
      width={16}
      backgroundColor={colors.cornflowerBlue}
      borderRadius={9}
    />
  )
}

export default Dot
