import React from 'react'
import { useTranslation } from 'react-i18next'
import { useColorScheme } from 'react-native'
import { Text, View } from 'tamagui'

import getColors from '~/constants/Colors'

interface ProductInfoProps {
  name: string
  price: string
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name, price }) => {
  const colors = getColors(useColorScheme())
  const { t } = useTranslation()

  return (
    <View paddingHorizontal={20}>
      <Text
        fontSize={16}
        fontWeight="500"
        marginVertical={8}
        color={colors.blue}
      >
        {t('bestSeller')}
      </Text>
      <Text fontSize={24} fontWeight="bold" marginVertical={7}>
        {name}
      </Text>
      <Text fontSize={20} fontWeight="bold" marginVertical={7}>
        {price}
      </Text>
      <Text fontSize={16} marginVertical={7}>
        {t('productDescription')}
      </Text>
    </View>
  )
}

export default ProductInfo