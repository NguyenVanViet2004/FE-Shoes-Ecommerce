import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import { NegativeButton } from '~/components/atoms/NegativeButton'
import SafeArea from '~/components/atoms/SafeArea'
import FooterCompoment from '~/components/molecules/common/Footer'
import Header from '~/components/molecules/common/Header'
import InputForm from '~/components/molecules/InputForm'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const SignInTemplate: React.FC = (): JSX.Element => {
  const { t } = useTranslation()
  const colors = getColors(useColorScheme())

  const handleBack = (): void => {
  }
  return (
    <SafeArea style={styles.container}>
      <Header
        title={t('Hello Again')}
        subtitle={t('Welcome Back You’ve Been Missed!')}
        iconLeft={
          <NegativeButton
            icon={<AntDesign name="left" size={18} color={colors.black} />}
            width={44}
            height={44}
            padding={0}
            backgroundColor={colors.white}
            onPress={handleBack}
          />
        }
      />
      <InputForm />
      <FooterCompoment
        title={t('Don’t have an account?')}
        subtitle={t('Sign Up for free')}
      />
    </SafeArea>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20
  }
})

export default SignInTemplate
