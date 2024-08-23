import Entypo from '@expo/vector-icons/Entypo'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, StatusBar, useColorScheme } from 'react-native'
import { Button, Image, ScrollView, XStack, YStack } from 'tamagui'

import PriceSection from '~/components/atoms/PriceSection'
import ProductInfo from '~/components/atoms/ProductInfo'
import SizeSelector from '~/components/atoms/SizeSelector'
import Gallery from '~/components/molecules/Gallery'
import getColors from '~/constants/Colors'

import Header from '../molecules/common/Header'

const images = [
  require('~/assets/images/shoes5.png'),
  require('~/assets/images/shoes6.png'),
  require('~/assets/images/shoes7.png')
]

const DetailTemplate: React.FC = (): JSX.Element => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const colors = getColors(useColorScheme())
  const flatListRef = useRef<FlatList>(null)
  const sizes = ['38', '39', '40', '41', '42', '43']
  const [selectedSize, setSelectedSize] = useState<string>('40')
  const outOfStockSizes = ['42', '43']
  const scrollToIndex = (index: number): void => {
    flatListRef.current?.scrollToIndex({ animated: true, index })
    setCurrentImageIndex(index)
  }
  const leftIconOfHeader = (
    <Button
      unstyled
      padding={10}
      borderRadius={50}
      backgroundColor={colors.white}
      alignSelf="baseline"
    >
      <Entypo name="chevron-left" size={18} color={colors.midnightBlue} />
    </Button>
  )
  const rightIconOfHeader = (
    <Button
      unstyled
      padding={10}
      borderRadius={50}
      backgroundColor={colors.white}
      alignSelf="baseline"
    >
      <Ionicons
        name="bag-handle-outline"
        size={18}
        color={colors.midnightBlue}
      />
    </Button>
  )
  return (
    <YStack flex={1}>
      <ScrollView>
        <StatusBar hidden />
        <Header leftIcon={leftIconOfHeader} rightIcon={rightIconOfHeader} />
        <YStack backgroundColor={colors.whiteSmoke} height={270} marginTop={30}>
          <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={({ nativeEvent }) => {
              const index = Math.round(
                nativeEvent.contentOffset.x / Dimensions.get('window').width
              )
              setCurrentImageIndex(index)
            }}
            renderItem={({ item }) => (
              <Image
                source={item}
                height={300}
                resizeMode="cover"
                width={Dimensions.get('window').width}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <XStack
            alignItems="center"
            justifyContent="center"
            marginVertical={8}
          >
            {images.map((_, index) => (
              <YStack
                key={index}
                backgroundColor={colors.darkGray}
                borderRadius={4}
                height={8}
                marginHorizontal={4}
                opacity={index === currentImageIndex ? 1 : 0.3}
                width={8}
              />
            ))}
          </XStack>
        </YStack>
        <YStack
          backgroundColor={colors.white}
          borderTopRightRadius={25}
          borderTopLeftRadius={25}
        >
          <ProductInfo name="Nike Air Jordan" price="$967.800" />
          <Gallery
            images={images}
            colors={colors}
            scrollToIndex={scrollToIndex}
          />
          <SizeSelector
            sizes={sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            outOfStockSizes={outOfStockSizes}
          />
          <PriceSection inStock={true} />
        </YStack>
      </ScrollView>
    </YStack>
  )
}

export default DetailTemplate
