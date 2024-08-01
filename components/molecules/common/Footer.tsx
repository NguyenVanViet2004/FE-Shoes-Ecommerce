import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, XStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface Props {
  title: string
  subtitle?: string
  onPressAuthScreen?: () => void
}

const FooterComponent: React.FC<Props> = (
  { title, subtitle, onPressAuthScreen }
) => {
  const colors = getColors(useColorScheme())

  return (
    <XStack flex={1} justifyContent="center" alignItems="flex-end">
      <XStack justifyContent="center" gap={8} marginBottom={10}>
        <Text
          fontSize={12}
          color={colors.slateGray}
          textAlign="center"
          fontWeight="400">
          {title}
        </Text>

        <Text
          onPress={onPressAuthScreen}
          fontSize={12}
          fontWeight="bold">
          {subtitle}
        </Text>

      </XStack>
    </XStack>

  )
}

export default FooterComponent
