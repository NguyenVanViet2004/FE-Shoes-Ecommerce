import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { Button, Text, View } from 'tamagui'

import getColors from '~/constants/Colors'
interface Colors {
  blue: string
  white: string
  darkGray: string
  black: string
}

interface PriceSectionProps {
  colors: Colors
}
const colors = getColors(useColorScheme())

const PriceSection: React.FC<PriceSectionProps> = ({ colors }) => {
  return (
    <View style={styles.priceContainer}>
      <View>
        <Text color={colors.darkGray} fontSize={16}>
          Price
        </Text>
        <Text fontSize={20} fontWeight="bold" marginVertical={7}>
          $849.69
        </Text>
      </View>
      <View>
        <Button
          backgroundColor={colors.blue}
          borderRadius={24}
          paddingHorizontal={24}
          paddingVertical={12}
        >
          <Text color={colors.white} fontSize={16} fontWeight="bold">
            Add To Cart
          </Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  priceContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 20,
    marginVertical: 10,
    padding: 16,
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 8
  }
})

export default PriceSection
