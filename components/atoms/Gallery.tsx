import React from 'react'
import {
  Image,
  type ImageSourcePropType,
  StyleSheet,
  useColorScheme
} from 'react-native'
import { Text, View } from 'tamagui'

import getColors from '~/constants/Colors'

const colors = getColors(useColorScheme())
interface GalleryProps {
  images: ImageSourcePropType[]
  colors: {
    primary: string
    secondary: string
  }
}

const Gallery: React.FC<GalleryProps> = ({ images, colors }) => {
  return (
    <View marginHorizontal={18}>
      <Text fontSize={18} fontWeight={'bold'} marginVertical={7}>
        Gallery
      </Text>
      <View flexDirection="row" gap={10} justifyContent="flex-start">
        {images.map((img, index) => (
          <Image key={index} source={img} style={styles.galleryImage} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  galleryImage: {
    backgroundColor: colors.whiteSmoke,
    borderRadius: 10,
    borderWidth: 1,
    height: 60,
    width: 60
  }
})

export default Gallery
