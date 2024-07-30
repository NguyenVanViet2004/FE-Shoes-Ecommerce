import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, Separator, Text, XStack, YStack } from 'tamagui'

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
  const colors = getColors(useColorScheme())
  return (
    <YStack
      backgroundColor={colors.white}
      padding="$4"
      borderRadius={25}
      marginTop={70}
    //   shadowColor="$shadowColor"
    //   shadowOffset={{ width: 0, height: 2 }}
    //   shadowOpacity={0.1}
    //   shadowRadius="$4"
    //   elevation={4}
    >
      <XStack justifyContent="space-between" marginVertical="$2">
        <Text fontSize="$4" color={colors.gray} fontWeight="bold">
          Subtotal
        </Text>
        <Text fontSize="$4" color="$black" fontWeight="bold">
          {subtotal}
        </Text>
      </XStack>
      <XStack justifyContent="space-between" marginVertical="$2">
        <Text fontSize="$4" color={colors.gray} fontWeight="bold">
          Shopping
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
          Total Cost
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
          Checkout
        </Text>
      </Button>
    </YStack>
  )
}

export default PayProduct
