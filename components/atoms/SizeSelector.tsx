import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, Text, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'

interface SizeSelectorProps {
  sizes: string[]
  selectedSize: string
  setSelectedSize: (size: string) => void
  outOfStockSizes: string[]
}

const SizeSelector: React.FC<SizeSelectorProps> = ({
  sizes,
  selectedSize,
  setSelectedSize,
  outOfStockSizes
}) => {
  const colors = getColors(useColorScheme())

  return (
    <YStack marginHorizontal={18} marginTop={10}>
      <XStack alignItems="center" justifyContent="space-between">
        <Text fontSize={18} fontWeight="bold">
          Size
        </Text>
        <XStack flexDirection="row">
          <Text marginHorizontal={8} color={colors.black} fontWeight="bold">
            EU
          </Text>
          <Text color={colors.darkGray} marginHorizontal={8}>
            US
          </Text>
          <Text color={colors.darkGray} marginHorizontal={8}>
            UK
          </Text>
        </XStack>
      </XStack>
      <YStack borderBottomColor={colors.blue}
        borderStyle="dotted"
        marginTop={8} />
      <XStack justifyContent="space-between">
        {sizes.map((size) => {
          const isOutOfStock = outOfStockSizes.includes(size)
          return (
            <Button
              key={size}
              alignItems="center"
              backgroundColor={isOutOfStock
                ? colors.lightGray
                : size === selectedSize
                  ? colors.blue
                  : colors.whiteSmoke}
              borderColor={colors.whiteSmoke}
              borderRadius={50}
              elevation={3}
              marginVertical={10}
              shadowColor={colors.black}
              shadowOffset={{ height: 2, width: 0 }}
              shadowOpacity={0.1}
              shadowRadius={9}
              width={40}
              onPress={() => {
                if (!isOutOfStock) {
                  setSelectedSize(size)
                }
              }}
              disabled={isOutOfStock}
            >
              <Text
                color={isOutOfStock
                  ? colors.darkGray
                  : size === selectedSize
                    ? colors.whiteSmoke
                    : colors.black}
                fontSize={16}
                fontWeight="500"
                marginVertical={7}
              >
                {size}
              </Text>
            </Button>
          )
        })}
      </XStack>
    </YStack>
  )
}

export default SizeSelector
