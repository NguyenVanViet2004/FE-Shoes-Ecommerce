import { Entypo } from '@expo/vector-icons'
import React, { useState } from 'react'
import { useColorScheme } from 'react-native'
import { YStack } from 'tamagui'

import PayProduct from '~/components/atoms/PayProduct'
import ProductCard from '~/components/atoms/ProductCart'
import Header from '~/components/molecules/common/Header'
import getColors from '~/constants/Colors'

const CartTemplate: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1)
  const colors = getColors(useColorScheme())
  const sampleShoe = {
    brand: {
      description: 'Leading sports brand',
      id: 'brand1',
      logo: 'https://example.com/',
      name: 'Nike'
    },
    categories: [],
    colors: ['red', 'blue'],
    description: 'A popular shoe model',
    discount: {
      _id: 'discount1',
      endTime: '2023-12-31T23:59:59Z',
      percents: '10',
      startTime: '2023-01-01T00:00:00Z'
    },
    id: '1',
    images: [
      'https://bom.so/1waW9k'
    ],
    name: 'Nike Air Max',
    price: '$64.95',
    sizes: ['XXL'],
    thumbnail: ['https://example.com/thumb.jpg'],
    userGender: ['unisex']
  }

  return (
    <YStack flex={1}>
      <Header
        leftIcon={
          <Entypo name="chevron-left" size={20} color={colors.midnightBlue} />
        }
        title="Cart"
      />

      <YStack flex={1} flexGrow={1} flexShrink={1} marginTop={20}>
        <ProductCard
          {...sampleShoe}
          quantity={quantity}
          onIncrease={() => {
            setQuantity(quantity + 1)
          }}
          onDecrease={() => {
            setQuantity(quantity > 1 ? quantity - 1 : 1)
          }}
          onRemove={() => {
            console.log('Remove item')
          }}
        />
      </YStack>

      <PayProduct
        subtotal="$1250.00"
        shipping="$40.90"
        totalCost="$1690.99"
        onCheckout={() => {
          console.log('Proceed to checkout')
        }}
      />
    </YStack>
  )
}

export default CartTemplate
