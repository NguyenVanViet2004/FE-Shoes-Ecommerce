import React from 'react'
import { useColorScheme } from 'react-native'
import { Text, XStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface Props {
  title: string
  subtitle?: string
}

const Footer: React.FC<Props> = ({ title, subtitle }) => {
  const colors = getColors(useColorScheme())

  return (
    <XStack justifyContent="center"
      gap={8} bottom={10} testID="Footer">
      <Text
        fontSize={12}
        color={colors.slateGray}
        textAlign="center"
        fontWeight="400"
        testID="title">
        {title}
      </Text>

      <Text
        fontSize={12}
        fontWeight="bold"
        color={colors.midnightBlue}
        testID="subtitle">
        {subtitle}
      </Text>
    </XStack>

  )
}

export default Footer
