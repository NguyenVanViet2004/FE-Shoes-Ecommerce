import { Feather } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { Image, Text, View, YStack } from 'tamagui'

import FormInputWithLabel from '~/components/atoms/FormInputWithLabel'
import { NegativeButton } from '~/components/atoms/NegativeButton'
import { PositiveButton } from '~/components/atoms/PositiveButton'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

interface Props {
  recoveryPassword?: any
  FormInputWithLabel?: any
  titleButton: string
  titleButtonGoogle: string
  onPressRecoveryPassword?: () => void
}
const InputForm: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [rePassword, setRepassword] = useState<string>('')
  const colors = getColors(useColorScheme())

  useEffect((): void => {
  }, [email, password, rePassword])

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword)
  }

  return (
    <YStack flex={1}>
      <YStack gap={30} marginTop={68}>
        <FormInputWithLabel
          label={t('emailAddress')}
          placeholder={t('enterEmail')}
          onChangeText={text => { setEmail(text) }}
        />

        <FormInputWithLabel
          label={t('password')}
          placeholder="•••••••••••••"
          secureTextEntry={showPassword}
          onChangeText={text => { setPassword(text) }}
          icon=
            {showPassword
              ? <Feather name="eye-off" size={24}
                onPress={togglePasswordVisibility} />
              : <Feather name="eye" size={24}
                onPress={togglePasswordVisibility} />
            } />

        <View display={props.FormInputWithLabel}>
          <FormInputWithLabel
            label={t('confirmpassword')}
            placeholder="•••••••••••••"
            secureTextEntry={showPassword}
            onChangeText={text => { setRepassword(text) }}
            icon=
              {showPassword
                ? <Feather name="eye-off" size={24}
                  onPress={togglePasswordVisibility} />
                : <Feather name="eye" size={24}
                  onPress={togglePasswordVisibility} />
              } />
        </View>
      </YStack>

      <Text
        onPress={props.onPressRecoveryPassword}
        display={props.recoveryPassword}
        fontWeight="400"
        fontSize={13}
        textAlign="right"
        marginTop={10}
        color={colors.slateGray}>
        {t('signIn.recoveryPassword')}
      </Text>

      <PositiveButton
        title={props.titleButton}
        color={colors.white}
        height={54}
        backgroundColor={colors.cornflowerBlue}
        marginTop={30} />

      <NegativeButton
        title={props.titleButtonGoogle}
        backgroundColor={colors.white}
        color={colors.midnightBlue}
        marginTop={30}
        height={54}
        icon={
          <Image src={require('~/assets/images/icon_google.png')} />
        } />

    </YStack>
  )
}

export default InputForm
