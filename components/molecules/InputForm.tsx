import { Feather } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'
import { Image, Text, YStack } from 'tamagui'
import InputCustom from '~/components/atoms/InputCustom'
import { NegativeButton } from '~/components/atoms/NegativeButton'
import SafeArea from '~/components/atoms/SafeArea'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const InputForm: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const [showPass, setShowPass] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const colors = getColors(useColorScheme())

  useEffect((): void => {
  }, [email, password])

  const togglePass = (): void => {
    setShowPass(!showPass)
  }
  return (
    <SafeArea>
      <YStack
        gap={30}
      >
        <InputCustom
          label={t('Email Address')}
          placeholder={t('Enter email')}
          onChangeText={text => { setEmail(text) }}
        />

        <InputCustom
          label={t('Password')}
          placeholder="***********"
          secureTextEntry={showPass}
          onChangeText={text => { setPassword(text) }}
          icon={
            <TouchableOpacity
              style={styles.buttonShowpass}
              onPress={togglePass}
            >
              {
                showPass
                  ? (<Feather name="eye" size={24} color={colors.black} />)
                  : (<Feather name="eye-off" size={24} color={colors.black} />)
              }
            </TouchableOpacity>
          }
        />
      </YStack>
      <TouchableOpacity>
        <Text
          fontWeight="400"
          fontSize={13}
          textAlign="right"
          color={colors.slateGray}
          marginTop={10}
        >
          {t('Recovery Password')}
        </Text>
      </TouchableOpacity>

      <YStack>
        <NegativeButton
          title={t('Sign In')}
          color={colors.white}
          height={54}
          backgroundColor={colors.cornflowerBlue}
          marginTop={30}

        />
        <NegativeButton
          title={t('Sign in with google')}
          backgroundColor={colors.white}
          color={colors.midnightBlue}
          marginTop={30}
          height={54}
          icon={<Image src={require('~/assets/images/icon_google.png')} />}
        />
      </YStack>
    </SafeArea>
  )
}

const styles = StyleSheet.create({
  buttonShowpass: {
    justifyContent: 'center',
    right: 40
  }
})

export default InputForm
