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
  return (
    <YStack>
      <Header
        leftIcon={
          <Entypo
            name="chevron-left"
            size={20}
            color={colors.midnightBlue}
          />
        }
      />

      <ProductCard
        imageUrl="https://encrypted-tbn0.gstatic.com/
          images?q=tbn:ANd9GcSwfoNMmNQ4EoFxByrhLzkLSwoWGtcN8EhsxA&s"
        title="Nike Air Max"
        price="$64.95"
        size="XXL"
        quantity={quantity}
        onIncrease={() => { setQuantity(quantity + 1) }}
        onDecrease={() => { setQuantity(quantity > 1 ? quantity - 1 : 1) }}
        onRemove={() => { console.log('Remove item') }}
      />
      <ProductCard
        imageUrl="https://encrypted-tbn0.gstatic.com/
          images?q=tbn:ANd9GcSwfoNMmNQ4EoFxByrhLzkLSwoWGtcN8EhsxA&s"
        title="Nike Air Max"
        price="$64.95"
        size="XXL"
        quantity={quantity}
        onIncrease={() => { setQuantity(quantity + 1) }}
        onDecrease={() => { setQuantity(quantity > 1 ? quantity - 1 : 1) }}
        onRemove={() => { console.log('Remove item') }}
      />
      <YStack >
        <PayProduct
          subtotal="$1250.00"
          shipping="$40.90"
          totalCost="$1690.99"
          onCheckout={() => { console.log('Proceed to checkout') }}
        />
      </YStack>
    </YStack>
  )
}

export default CartTemplate
