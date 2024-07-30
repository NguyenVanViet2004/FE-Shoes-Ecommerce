import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, Text } from 'tamagui'
import { View, type ViewProps } from 'tamagui'

import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

type Props = {
  textCategory: string
} & ViewProps

export const ShoesCategory = (props: Props): React.ReactElement => {
  const colors = getColors(useColorScheme())
  const { t } = useTranslation()
  return (
    <View
      {...props}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Text
        fontSize={16}
        fontWeight={500}
        lineHeight={24}
      >{t('home.' + props.textCategory)}</Text>
      <Button unstyled>
        <Text
          color={colors.cornflowerBlue}
          fontSize={13}
          fontWeight={400}
          lineHeight={16}>{t('home.seeAll')}</Text>
      </Button>
    </View >
  )
}
