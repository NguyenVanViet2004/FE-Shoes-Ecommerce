import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, Text, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface Props {
  title: string
  subtitle?: string
}

const FooterComponent: React.FC<Props> = ({ title, subtitle }) => {
  const colors = getColors(useColorScheme())

  return (
    <YStack justifyContent="flex-end" flex={1}>
      <XStack justifyContent="center" gap={8} bottom={50}>

        <Text
          fontSize={12}
          color={colors.slateGray}
          textAlign="center"
          fontWeight="400">
          {title}
        </Text>

        <Button unstyled>
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
