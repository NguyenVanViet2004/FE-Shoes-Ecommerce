import { isNil } from 'lodash'
import React, { useState } from 'react'
import { useColorScheme } from 'react-native'
import { Button, type ButtonProps, Switch, type SwitchProps, Text, View, XStack } from 'tamagui'

import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

type Props = {
  leftIcon?: React.ReactElement
  rightIcon?: React.ReactElement
  nameMethod: string
  useSwitch?: boolean
} & ButtonProps & SwitchProps

export const ChooseMethod = (props: Props): React.ReactElement => {
  const { t } = useTranslation()
  const [isChecked, setIsChecked] = useState(false)
  const colors = getColors(useColorScheme())
  const renderIcon = (icon: React.ReactElement): React.ReactElement => {
    return icon
  }

  const handleSwitchChange = (checked: boolean): void => {
    setIsChecked(checked)
    props.onCheckedChange?.(checked)
  }

  return (
    <Button unstyled gap={16} marginTop={16}>
      <XStack
        justifyContent="center"
        alignItems="center"
        onPress={props.onPress}>
        <XStack flex={1} alignItems="center" gap={16}>

          {!isNil(props.leftIcon) && renderIcon(props.leftIcon)}

          <Text fontSize={16}
            fontWeight={400}>
            {t('account.' + props.nameMethod)}</Text>

        </XStack>

        {props.useSwitch === true
          ? (
            <Switch
              unstyled
              onCheckedChange={handleSwitchChange}
              padding={2}
              borderRadius={30}
              backgroundColor={isChecked
                ? colors.cornflowerBlue
                : colors.silverGray}
            >
              <Switch.Thumb
                animation="quick"
                borderRadius={30}
                backgroundColor={colors.white}
              />
            </Switch>)

          : (!isNil(props.rightIcon) && renderIcon(props.rightIcon))}

      </XStack>
      <View height={1} width={'100%'} backgroundColor={colors.silverGray} />
    </Button>
  )
}
