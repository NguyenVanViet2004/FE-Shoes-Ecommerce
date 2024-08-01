import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, Separator, Text, XStack, YStack } from 'tamagui'
import { useTranslation } from 'react-i18next'
import getColors from '~/constants/Colors'
interface CheckoutSummaryProps {
  subtotal: string
  shipping: string
  totalCost: string
  onCheckout: () => void
}

const PayProduct: React.FC<CheckoutSummaryProps> = ({
  subtotal,
  shipping,
  totalCost,
  onCheckout
}) => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())
  return (
    <YStack
      backgroundColor={colors.white}
      padding="$4"
      borderRadius={25}
      marginTop={70}
    >
      <XStack justifyContent="space-between" marginVertical="$2">
        <Text fontSize="$4" color={colors.gray} fontWeight="bold">
          {t('Subtotal')}
        </Text>
        <Text fontSize="$4" color="$black" fontWeight="bold">
          {subtotal}
        </Text>
      </XStack>
      <XStack justifyContent="space-between" marginVertical="$2">
        <Text fontSize="$4" color={colors.gray} fontWeight="bold">
          {t('Shopping')}
        </Text>
        <Text fontSize="$4" color="$black" fontWeight="bold">
          {shipping}
        </Text>
      </XStack>
      <Separator borderBottomWidth={1}
        borderBottomColor="$gray200"
        marginVertical="$3" />
      <XStack justifyContent="space-between" marginVertical="$2">
        <Text fontSize="$5" fontWeight="bold">
          {t('TotalCost')}
        </Text>
        <Text fontSize="$5" fontWeight="bold">
          {totalCost}
        </Text>
      </XStack>
      <Button
        backgroundColor={colors.blue}
        borderRadius={25}
        paddingVertical="$3"
        justifyContent="center"
        alignItems="center"
        marginTop="$3"
        onPress={onCheckout}
      >
        <Text color={colors.white} fontSize="$4" fontWeight="bold">
          {t('Checkout')}
        </Text>
      </Button>
    </YStack>
  )
}

export default PayProduct
