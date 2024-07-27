import React from 'react'
import { useColorScheme } from 'react-native'
import { Image, View, type ViewProps } from 'tamagui'

import { InforShoes } from '~/components/molecules/InforShoes'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

type Props = {
  label: string
  nameShoes: string
  price: string
} & ViewProps

export const BannerShoesItem = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  const { t } = useTranslation()

  return (
    <View
      alignItems="center"
      borderRadius={16}
      padding={20}
      flexDirection="row"
      justifyContent="space-between"
      backgroundColor={colors.white}>
      <InforShoes
        gap={8}
        flex={1}
        label={t('home.' + props.label)}
        nameShoes={props.nameShoes}
        priceShoes={props.price} />
      <Image
        source={require('assets/images/shoes2.png')}
        flex={1}
        aspectRatio={1}
        resizeMethod="auto"
        maxHeight={90}
        maxWidth={120} />
    </View>
  )
}
