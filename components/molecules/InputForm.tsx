import { Feather } from '@expo/vector-icons'
import { isNil } from 'lodash'
import React, { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { Image, Text, View, YStack } from 'tamagui'

import FormInputWithLabel from '~/components/atoms/FormInputWithLabel'
import { NegativeButton } from '~/components/atoms/NegativeButton'
import { PositiveButton } from '~/components/atoms/PositiveButton'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

interface Props {
  visibleRecoveryPassword?: boolean
  visibleFormInputWithLabel?: boolean
  buttonTitle: string
  googleButtonTitle: string
  onRecoveryPasswordPress?: () => void
  onLoginPress?: () => void
}
const InputForm: React.FC<Props> = (props: Props): JSX.Element => {
  const { t } = useTranslation()
  const [showPassword, setShowPassword] = useState<boolean>(true)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const colors = getColors(useColorScheme())

  useEffect((): void => {
  }, [email, password, confirmPassword])

  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = (): void => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <View>
      <YStack gap={30} marginTop={68}>
        <FormInputWithLabel
          label={t('emailAddress')}
          placeholder={t('enterEmail')}
          onChangeText={setEmail}
        />

        <FormInputWithLabel
          label={t('password')}
          placeholder="•••••••••••••"
          secureTextEntry={showPassword}
          onChangeText={setPassword}
          icon=
            {showPassword
              ? <Feather name="eye-off" size={24}
                onPress={togglePasswordVisibility} />
              : <Feather name="eye" size={24}
                onPress={togglePasswordVisibility} />
            } />

        <View display={
          !isNil(props.visibleFormInputWithLabel) &&
          props.visibleFormInputWithLabel
            ? 'flex'
            : 'none'}>
          <FormInputWithLabel
            label={t('confirmpassword')}
            placeholder="•••••••••••••"
            secureTextEntry={showConfirmPassword}
            onChangeText={setConfirmPassword}
            icon=
              {showConfirmPassword
                ? <Feather name="eye-off" size={24}
                  onPress={toggleConfirmPasswordVisibility} />
                : <Feather name="eye" size={24}
                  onPress={toggleConfirmPasswordVisibility} />
              } />
        </View>
      </YStack>

      <Text
        onPress={props.onRecoveryPasswordPress}
        display={
          !isNil(props.visibleRecoveryPassword) &&
          props.visibleRecoveryPassword
            ? 'flex'
            : 'none'
        }
        fontWeight="400"
        fontSize={13}
        textAlign="right"
        marginTop={10}
        color={colors.slateGray}>
        {t('signIn.recoveryPassword')}
      </Text>

      <PositiveButton
        onPress={props.onLoginPress}
        title={props.buttonTitle}
        color={colors.white}
        height={54}
        backgroundColor={colors.cornflowerBlue}
        marginTop={30} />

      <NegativeButton
        title={props.googleButtonTitle}
        backgroundColor={colors.white}
        color={colors.midnightBlue}
        marginTop={30}
        height={54}
        icon={
          <Image src={require('~/assets/images/icon_google.png')} />
        } />

    </View>
  )
}

export default InputForm
