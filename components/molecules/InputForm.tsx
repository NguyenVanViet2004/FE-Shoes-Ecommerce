import { Feather } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { Image, Text, YStack } from 'tamagui'

import FormInputWithLabel from '~/components/atoms/FormInputWithLabel'
import { NegativeButton } from '~/components/atoms/NegativeButton'
import { PositiveButton } from '~/components/atoms/PositiveButton'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const InputForm: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const colors = getColors(useColorScheme())

  useEffect((): void => {
  }, [email, password])

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword)
  }

  return (
    <YStack flex={1}>
      <YStack gap={30} marginTop={68}>
        <FormInputWithLabel
          label={t('signIn.emailAddress')}
          placeholder={t('signIn.enterEmail')}
          onChangeText={text => { setEmail(text) }}
        />

        <FormInputWithLabel
          label={t('signIn.password')}
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
      </YStack>

      <Text
        fontWeight="400"
        fontSize={13}
        textAlign="right"
        marginTop={10}
        color={colors.slateGray}>
        {t('signIn.recoveryPassword')}
      </Text>

      <PositiveButton
        title={t('signIn.signIn')}
        color={colors.white}
        height={54}
        backgroundColor={colors.cornflowerBlue}
        marginTop={30} />

      <NegativeButton
        title={t('signIn.signInWithGoogle')}
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
