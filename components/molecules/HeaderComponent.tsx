import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, View, type ViewProps } from 'tamagui'

import { ButtonIcon } from '~/components/atoms/ButtonIcon'
import getColors from '~/constants/Colors'

type Props = {
  iconLeft: React.ReactElement
  iconRight: React.ReactElement
} & ViewProps

export const HeaderComponent = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  return (
    <View {...props} flexDirection="row" alignItems="center">

      <ButtonIcon
        icon={
          props.iconLeft
        } />

      <View flex={1} alignItems="center">
        <Text
          color={colors.slateGray}
          fontSize={12}
          fontWeight={400}
          lineHeight={16}>Store location</Text>
        <Text
          fontSize={14}
          fontWeight={500}
          lineHeight={20}>Mondolobug, Sylhet</Text>
      </View>
      <ButtonIcon
        icon={
          props.iconRight
        } />
    </View>
  )
}
