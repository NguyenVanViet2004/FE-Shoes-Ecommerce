import { Feather } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native'
import { Image, Text } from 'tamagui'

import getColors from '~/constants/Colors'

import BackCustom from '../molecules/BackCustom'
import ButtonCustom from '../molecules/ButtonCustom'
import InputCustom from '../molecules/InputCustom'
import useTranslation from './../../hooks/useTranslation'

const SignInTemplate: React.FC = (): JSX.Element => {
  const [showPass, setShowPass] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())
  useEffect((): void => {
    console.log(email)
    console.log(password)
  }, [email, password])

  const togglePass = (): void => {
    setShowPass(!showPass)
  }

  const handleBack = (): void => {
    console.log('Click to back')
  }

  const handleSignIn = (): void => {
    console.log('Click Signin')
  }

  const handleSignInByGoogle = (): void => {
    console.log('Click signin by google')
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.lightSilver }]}
    >
      <BackCustom onPress={handleBack} />
      <View style={styles.header}>
        <Text fontSize={28} fontWeight="500" color={colors.midnightBlue}>
          {t('Hello Again')}
        </Text>
        <Text fontSize={16} fontWeight="400" color={colors.slateGray}>
          {t('Welcome Back You’ve Been Missed!')}
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <InputCustom
            label={t('Email Address')}
            placeholder={t('Enter email')}
            onChangeText={text => { setEmail(text) }}
          />
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.passwordInputContainer}>
            <InputCustom
              label={t('Password')}
              placeholder="***********"
              secureTextEntry={showPass}
              onChangeText={text => { setPassword(text) }}
              icon={
                <TouchableOpacity
                  onPress={togglePass}
                  style={styles.iconButton}
                >
                  {
                    showPass
                      ? (<Feather name="eye"size={24}color={colors.black}/>)
                      : (<Feather name="eye-off"size={24}color={colors.black}/>)
                  }
                </TouchableOpacity>
              }
            />
          </View>
        </View>
      </View>

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
      <View>
        <ButtonCustom
          onPress={handleSignIn}
          buttonText={t('Sign In')}
          backgroundColor={colors.cornflowerBlue}
          textColor={colors.white}
        />
        <ButtonCustom
          onPress={handleSignInByGoogle}
          buttonText={t('Sign in with google')}
          backgroundColor={colors.white}
          textColor={colors.midnightBlue}
          icon={<Image src={require('../../assets/images/icon_google.png')} />}
        />
      </View>
      <View style={styles.footer}>
        <Text
          fontSize={12}
          color={colors.slateGray}
          textAlign="center"
          fontWeight="400"
        >
          {t('Don’t have an account?')}
        </Text>
        <TouchableOpacity>
          <Text
            fontSize={12}
            fontWeight="bold"
            color={colors.midnightBlue}>
            {t('Sign Up for free')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
    width: '100%'
  },
  footer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: 140
  },
  form: {
    gap: 28,
    marginTop: 50
  },
  header: {
    alignItems: 'center',
    gap: 10,
    marginTop: 50
  },
  iconButton: {
    justifyContent: 'center',
    right: 40
  },
  inputGroup: {
    gap: 10
  },
  passwordInputContainer: {
    justifyContent: 'center'
  }
})

export default SignInTemplate
