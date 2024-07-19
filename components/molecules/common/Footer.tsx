import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, Text, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface Props {
  title: string
  subtitle?: string
  onPress?: () => void
}

const FooterComponent: React.FC<Props> = ({ title, subtitle, onPress }) => {
  const colors = getColors(useColorScheme())

  return (
    <YStack bottom={10}>
      <XStack justifyContent="center" gap={8}>
        <Text
          fontSize={12}
          color={colors.slateGray}
          textAlign="center"
          fontWeight="400">
          {title}
        </Text>

        <Button onPress={onPress} unstyled>
          <Text
            fontSize={12}
            fontWeight="bold"
            color={colors.midnightBlue}>
            {subtitle}
          </Text>
        </Button>
      </XStack>
    </YStack>

  )
}

export default FooterComponent
