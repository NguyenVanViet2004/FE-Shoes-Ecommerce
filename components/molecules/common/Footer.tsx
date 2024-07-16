import React from 'react'
import { TouchableOpacity, useColorScheme } from 'react-native'
import { Text, XStack, YStack } from 'tamagui'
import getColors from '~/constants/Colors'

interface props {
  title: string
  subtitle: string
}
const FooterCompoment: React.FC<props> = ({ title, subtitle }) => {
  const colors = getColors(useColorScheme())
  return (
    <YStack
      marginTop={150}
    >
      <XStack
        justifyContent="center"
        gap={8}
      >
        <Text
          fontSize={12}
          color={colors.slateGray}
          textAlign="center"
          fontWeight="400"
        >
          {title}
        </Text>
        <TouchableOpacity>
          <Text
            fontSize={12}
            fontWeight="bold"
            color={colors.midnightBlue}>
            {subtitle}
          </Text>
        </TouchableOpacity>
      </XStack>
    </YStack>
  )
}

export default FooterCompoment
