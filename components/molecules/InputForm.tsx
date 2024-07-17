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
    const [showPassword, setShowPassword] = useState<boolean>(true)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const colors = getColors(useColorScheme())

    useEffect((): void => {
    }, [email, password])

    const togglePassword = (): void => {
        setShowPassword(!showPassword)
    }
    return (
        <YStack>
            <YStack gap={30} marginTop={68}>
                <EditableField
                    label={t('SignIn.emailAddress')}
                    placeholder={t('SignIn.enterEmail')}
                    onChangeText={text => { setEmail(text) }}
                />

                <EditableField
                    label={t('SignIn.password')}
                    placeholder="•••••••••••••"
                    secureTextEntry={showPassword}
                    onChangeText={text => { setPassword(text) }}
                    icon={
                        <Button
                            unstyled
                            justifyContent="center"
                            right={40}
                            onPress={togglePassword}
                            icon={
                                showPassword
                                ? (<Feather name="eye-off" size={24} />)
                                : (<Feather name="eye" size={24} />)
                            }
                        />  
                    }
                />
            </YStack>
            <Button unstyled marginTop={10}>
                <Text
                    fontWeight="400"
                    fontSize={13}
                    textAlign="right"
                    color={colors.slateGray}>

                    {t('SignIn.recoveryPassword')}
                </Text>
            </Button>

            <YStack>
                <PositiveButton
                    title={t('SignIn.signIn')}
                    color={colors.white}
                    height={54}
                    backgroundColor={colors.cornflowerBlue}
                    marginTop={30} />
                <NegativeButton
                    title={t('SignIn.signInWithGoogle')}
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
