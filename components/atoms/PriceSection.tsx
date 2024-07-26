import React from 'react'
import { useTranslation } from 'react-i18next'
import { useColorScheme } from 'react-native'
import { Button, Text, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface PriceSectionProps {
  inStock: boolean
}

const PriceSection: React.FC<PriceSectionProps> = ({ inStock }) => {
  const colorScheme = useColorScheme()
  const currentColors = getColors(colorScheme)
  const { t } = useTranslation()

  return (
    <YStack
      alignItems="center"
      backgroundColor={currentColors.white}
      borderRadius={12}
      elevation={3}
      flexDirection="row"
      justifyContent="space-between"
      marginHorizontal={10}
      marginTop={20}
      marginVertical={10}
      padding={16}
      shadowColor={currentColors.black}
      shadowOffset={{ height: 2, width: 0 }}
      shadowOpacity={0.1}
      shadowRadius={8}
    >
      <YStack>
        <Text color={currentColors.darkGray} fontSize={16}>
          {t('Price')}
        </Text>
        <Text fontSize={20} fontWeight="bold" marginVertical={7}>
          $849.69
        </Text>
      </YStack>
      <YStack>
        <Button
          backgroundColor={inStock ? currentColors.blue : currentColors.gray}
          borderRadius={24}
          paddingHorizontal={24}
          paddingVertical={12}
          disabled={!inStock}
        >
          <Text color={currentColors.white} fontSize={16} fontWeight="bold">
            {t(inStock ? 'AddToCart' : 'OutOfStock')}
          </Text>
        </Button>
      </YStack>
    </YStack>
  )
}

export default PriceSection
