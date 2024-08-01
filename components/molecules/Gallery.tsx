import { useTranslation } from 'react-i18next'
import { type ImageSourcePropType, TouchableOpacity, useColorScheme } from 'react-native'
import { Image, Text, View } from 'tamagui'

import getColors from '~/constants/Colors'

interface GalleryProps {
  images: ImageSourcePropType[]
  colors: {
    primary: string
    secondary: string
  }
  scrollToIndex: (index: number) => void
}

const Gallery: React.FC<GalleryProps> = ({ images, scrollToIndex }) => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())

  return (
    <View marginHorizontal={18}>
      <Text fontSize={18} fontWeight={'bold'} marginVertical={7}>
        {t('Gallery')}
      </Text>
      <View flexDirection="row" gap={10} justifyContent="flex-start">
        {images.map((img, index) => (
          <TouchableOpacity key={index}
            onPress={() => { scrollToIndex(index) }}>
            <Image
              source={img}
              backgroundColor={colors.whiteSmoke}
              borderRadius={10}
              borderWidth={1}
              height={60}
              width={60}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Gallery
