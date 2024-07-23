import React from 'react'
import { Text, View } from 'tamagui'
interface Colors {
  blue: string
}

interface ProductInfoProps {
  colors: Colors
}

const ProductInfo: React.FC<ProductInfoProps> = ({ colors }) => {
  return (
    <View paddingHorizontal={20}>
      <Text
        fontSize={16}
        fontWeight="500"
        marginVertical={8}
        color={colors.blue}
      >
        BEST SELLER
      </Text>
      <Text fontSize={24} fontWeight="bold" marginVertical={7}>
        Nike Air Jordan
      </Text>
      <Text fontSize={20} fontWeight="bold" marginVertical={7}>
        $967.800
      </Text>
      <Text fontSize={16} marginVertical={7}>
        Air Jordan là một thương hiệu giày bóng rổ, thể thao, thời trang và quần
        áo phong cách của Mỹ được sản xuất bởi Nike....
      </Text>
    </View>
  )
}

export default ProductInfo
