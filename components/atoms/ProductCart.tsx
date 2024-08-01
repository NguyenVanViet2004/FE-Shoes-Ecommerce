import { Minus, Plus, Trash2 } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useColorScheme } from 'react-native'
import { Button, Image, Text, XStack, YStack } from 'tamagui'

import getColors from '~/constants/Colors'
import Shoes from '~/interfaces/Shoes'
interface ProductCardProps extends Shoes {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
  onRemove: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  images,
  name,
  price,
  sizes,
  quantity,
  onIncrease,
  onDecrease,
  onRemove
}) => {
  const colors = getColors(useColorScheme())
  const [iconColor, setIconColor] = useState<any>(colors.gray)

  const handlePress = (): void => {
    setIconColor((prevColor: string) =>
      prevColor === colors.gray ? colors.red : colors.gray
    )
  }
  const imageUri = images[0];
  return (
    <YStack
      flexDirection="row"
      alignItems="center"
      padding={10}
      borderRadius={10}
      marginBottom={10}
    >
      <Image
        source={{ uri: imageUri }}
        backgroundColor={colors.whiteSmoke}
        borderRadius={10}
        borderWidth={1}
        height={80}
        width={80}
      />
      <YStack flex={1} marginLeft={10}>
        <Text fontSize={16} fontWeight="bold">
          {name}
        </Text>
        <Text fontSize={14} color="#666">
          {price}
        </Text>
        <XStack flex={1} alignItems="center">
          <Button
            circular
            onPress={onDecrease}
            size={25}
            borderRadius={50}
            justifyContent="center"
            alignItems="center"
            backgroundColor={colors.white}
            marginTop={15}
            marginRight={10}
          >
            <Minus size={15} color={colors.whiteSmoke} />
          </Button>
          <Text marginTop={18} marginRight={10} fontSize={15}>
            {quantity}
          </Text>
          <Button
            onPress={onIncrease}
            size={25}
            borderRadius={50}
            justifyContent="center"
            alignItems="center"
            backgroundColor={colors.blue}
            marginTop={15}
            marginRight={10}
          >
            <Plus size={15} color={colors.white} />
          </Button>
        </XStack>
      </YStack>
      <YStack>
        <Text fontSize={16}>{sizes}</Text>
        <Trash2
          size={24}
          color={iconColor}
          onPress={handlePress}
          marginTop={30}
        />
      </YStack>
    </YStack>
  )
}

export default ProductCard
