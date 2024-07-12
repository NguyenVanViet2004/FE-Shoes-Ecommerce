import { AntDesign, Feather } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Image, Text } from 'tamagui'

import InputCustom from '../molecules/InputCustom'

const backgroundColorMain = '#F8F9FA'
const backgroundColorWhite = '#FFF'
const backgroundColorBlue = '#5B9EE1'

const SignInTemplate: React.FC = (): JSX.Element => {
  const [showPass, setShowPass] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    console.log(email)
    console.log(password)
  }, [email, password])

  const togglePass = (): void => {
    setShowPass(!showPass)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity style={styles.buttonBack}>
          <AntDesign name="left" size={18} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text fontSize={28} fontWeight="500" color={'#1A2530'}>
          Hello Again!
        </Text>
        <Text fontSize={16} fontWeight="400" color="#707B81">
          Welcome Back You’ve Been Missed!
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text fontSize={16} fontWeight="500" color={'#1A2530'}>
            Email Address
          </Text>
          <InputCustom
            label="Email"
            placeholder="Enter email"
            onChangeText={text => { setEmail(text) }}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text fontSize={16} fontWeight="500" color={'#1A2530'}>
            Password
          </Text>
          <View style={styles.passwordInputContainer}>
            <InputCustom
              label="Password"
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
                      ? (<Feather name="eye" size={24}color="#1A2530"/>)
                      : (<Feather name="eye-off" size={24} color="#1A2530"/>)
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
          color="#707B81"
          marginTop={10}
        >
          Recovery Password
        </Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity style={styles.signInButton}>
          <Text color="#FFF" fontSize={18} fontWeight="500">
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleSignInButton}>
          <Image src={require('../../assets/images/icon_google.png')} />
          <Text color="#1A2530" fontSize={18} fontWeight="500">
            Sign in with google
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text
          fontSize={12}
          color="#707B81"
          textAlign="center"
          fontWeight="400"
        >
          Don’t have an account?
        </Text>
        <TouchableOpacity>
          <Text fontSize={12} fontWeight="bold" color={'#1A2530'}>
            Sign Up for free
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  back: {
    marginTop: 30
  },
  buttonBack: {
    alignItems: 'center',
    backgroundColor: backgroundColorWhite,
    borderRadius: 40,
    height: 44,
    justifyContent: 'center',
    width: 44
  },
  container: {
    backgroundColor: backgroundColorMain,
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
  googleSignInButton: {
    alignItems: 'center',
    backgroundColor: backgroundColorWhite,
    borderRadius: 50,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    marginTop: 30,
    padding: 16
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
  },
  signInButton: {
    alignItems: 'center',
    backgroundColor: backgroundColorBlue,
    borderRadius: 50,
    marginTop: 30,
    padding: 16
  }
})

export default SignInTemplate
