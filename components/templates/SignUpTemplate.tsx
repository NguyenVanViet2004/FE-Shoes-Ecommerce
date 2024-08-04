import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { View } from 'tamagui'

import SafeArea from '~/components/atoms/SafeArea'
import FooterComponent from '~/components/molecules/common/Footer'
import Header from '~/components/molecules/common/Header'
import InputForm from '~/components/molecules/InputForm'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const SignUpTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())
  const router = useRouter()

  const handleBack = (): void => {
    router.back()
  }
  const redirectToSignIn = (): void => {
    router.push('/authentication/SignIn')
  }

  return (
    <SafeArea style={{
      ...styles.container,
      backgroundColor: colors.lightSilver
    }}>

      <View marginTop={20}>
        <Header
          leftIcon={
            <AntDesign name="left" size={18}
              color={colors.black}
              onPress={handleBack}/>
          }/>

        <Header
          title={t('signUp.createAccount')}
          fontSize={28}
          fontWeight="bold"
        />

        <Header
          marginTop={8}
          title={t('signUp.letsCreateAccountTogether')}
          fontSize={16}
          color={colors.slateGray}
        />
      </View>

      <InputForm
        visibleFormInputWithLabel={true}
        visibleRecoveryPassword={false}
        buttonTitle={t('signUp.signUp')}
        googleButtonTitle={t('signUp.signInWithGoogle')} />

      <FooterComponent
        onPressAuthScreen={redirectToSignIn}
        title={t('signUp.alreadyHaveAnAccount')}
        subtitle={t('signUp.signIn')} />

    </SafeArea>
  )
}
export default SignUpTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
})
