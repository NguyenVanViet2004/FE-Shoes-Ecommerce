import React, { useLayoutEffect, useState } from 'react'
import { View } from 'tamagui'

import SplashTemplate from '~/components/templates/SplashTemplate'
import useStorage from '~/hooks/useStorage'

const index = (): JSX.Element => {
  const { getItem, setItem } = useStorage()
  const [firstTime, setFirstTime] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const FIRST_TIME_USE_APP = 'FIRST-TIME-USE-APP'

  useLayoutEffect(() => {
    const checkFirstTime = async (): Promise<void> => {
      try {
        const user = await getItem(FIRST_TIME_USE_APP)
        if (user === undefined) {
          setFirstTime(true)
          setItem(FIRST_TIME_USE_APP, 'false').catch(e => {
            console.log(e)
          })
        }
      } catch (error) {
        console.log('Error check first time:', error)
      } finally {
        setLoading(false)
      }
    }

    checkFirstTime().catch(e => {
      console.log('Error checkFirstTime:', e)
    })
  }, [getItem])

  useLayoutEffect(() => {
    if (!loading && firstTime) {
      console.log('move to Onboarding')
    }
  }, [loading])

  useLayoutEffect(() => {
    if (!loading && !firstTime) {
      console.log('move to Login')
    }
  }, [loading])

  if (loading) {
    return <SplashTemplate />
  }

  return (
    <View flex={1}>
      <SplashTemplate />
      {/* <OnboardingTemplate/> */}
    </View>
  )
}

export default index
