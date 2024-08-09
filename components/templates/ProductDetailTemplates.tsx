import Entypo from '@expo/vector-icons/Entypo'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useRef, useState } from 'react'
import { Dimensions, FlatList, StatusBar, useColorScheme } from 'react-native'
import { Button, Image, ScrollView, Theme, XStack, YStack } from 'tamagui'

import Gallery from '~/components/molecules/Gallery'
import PriceSection from '~/components/atoms/PriceSection'
import ProductInfo from '~/components/atoms/ProductInfo'
import SizeSelector from '~/components/atoms/SizeSelector'
import HeaderDetails from '~/components/molecules/HeaderDetails'
import getColors from '~/constants/Colors'

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

  return (
    <Theme name="light">
      <YStack>
        <ScrollView>
          <StatusBar hidden />
          <HeaderDetails
            leftIcon={
              <Button
                unstyled
                padding={10}
                borderRadius={50}
                backgroundColor={colors.white}
                alignSelf="baseline"
              >
                <Entypo
                  name="chevron-left"
                  size={18}
                  color={colors.midnightBlue}
                />
              </Button>
            }
            title="Men's Shoes"
            rightIcon={
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
            }
          />
          <YStack backgroundColor={colors.whiteSmoke} height={270}>
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
            <ProductInfo />
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
    </Theme>
  )
}

export default DetailTemplate
