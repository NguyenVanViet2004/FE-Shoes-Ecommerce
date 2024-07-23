import Entypo from '@expo/vector-icons/Entypo'
import Ionicons from '@expo/vector-icons/Ionicons'
import React, { useState } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native'
import { Button, View } from 'tamagui'

import Gallery from '~/components/atoms/Gallery'
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
const sizes = ['38', '39', '40', '41', '42', '43']
const colors = getColors(useColorScheme())
const Details: React.FC = (): JSX.Element => {
  const [selectedSize, setSelectedSize] = useState<string>('40')
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

  return (
    <View>
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
        <View backgroundColor={colors.whiteSmoke} height={270}>
          <FlatList
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
              <Image source={item} style={styles.image} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View
            alignItems="center"
            flexDirection="row"
            justifyContent="center"
            marginVertical={8}
          >
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === currentImageIndex && styles.activeDot
                ]}
              />
            ))}
          </View>
        </View>
        <View
          backgroundColor={colors.white}
          borderTopRightRadius={25}
          borderTopLeftRadius={25}
        >
          <ProductInfo colors={colors} />
          <Gallery images={images} colors={colors} />
          <SizeSelector
            sizes={sizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            colors={colors}
          />
          <PriceSection colors={colors} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  activeDot: {
    opacity: 1
  },
  dot: {
    backgroundColor: colors.darkGray,
    borderRadius: 4,
    height: 8,
    marginHorizontal: 4,
    opacity: 0.3,
    width: 8
  },
  image: {
    height: 300,
    resizeMode: 'cover',
    width: Dimensions.get('window').width
  }
})
