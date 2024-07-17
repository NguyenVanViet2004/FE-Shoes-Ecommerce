import { Feather } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { useColorScheme } from 'react-native'
import { Button, Image, Text, YStack } from 'tamagui'

import EditableField from '~/components/atoms/EditableField'
import { NegativeButton } from '~/components/atoms/NegativeButton'
import { PositiveButton } from '~/components/atoms/PositiveButton'
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
    <YStack>
      <YStack gap={30} marginTop={68}>
        <EditableField
          label={t('emailAddress')}
          placeholder={t('enterEmail')}
          onChangeText={text => { setEmail(text) }}
        />

        <EditableField
          label={t('password')}
          placeholder="•••••••••••••"
          secureTextEntry={showPass}
          onChangeText={text => { setPassword(text) }}
          icon={
            <Button
              unstyled
              justifyContent="center"
              right={40}
              onPress={togglePass}>
              {
                showPass
                  ? (<Feather name="eye-off" size={24} />)
                  : (<Feather name="eye" size={24} />)
              }
            </Button>
          }
        />
      </YStack>
      <Button unstyled>
        <Text
          fontWeight="400"
          fontSize={13}
          textAlign="right"
          color={colors.slateGray}
          marginTop={10}>

          {t('recoveryPassword')}
        </Text>
      </Button>

      <YStack>
        <PositiveButton
          title={t('signIn')}
          color={colors.white}
          height={54}
          backgroundColor={colors.cornflowerBlue}
          marginTop={30} />
        <NegativeButton
          title={t('signInWithGoogle')}
          backgroundColor={colors.white}
          color={colors.midnightBlue}
          marginTop={30}
          height={54}
          icon={
            <Image src={require('~/assets/images/icon_google.png')} />
          } />

      </YStack>
    </YStack>
  )
}

export default InputForm
