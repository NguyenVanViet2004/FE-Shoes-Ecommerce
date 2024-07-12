import React, { useEffect, useLayoutEffect, useState } from 'react'
import { View } from 'tamagui'

// import OnboardingTemplate from '~/components/templates/OnboardingTemplate'
import SplashTemplate from '~/components/templates/SplashTemplate'
import useStorage from '~/hooks/useStorage'

const index = (): JSX.Element => {
  const { getItem, setItem } = useStorage()
  const [firstTime, setFirstTime] = useState(true)
  const [loading, setLoading] = useState(true)

  const FIRST_TIME_USE_APP = 'firstTimeUseApp'

  useEffect(() => {
    const checkFirstTime = async (): Promise<void> => {
      try {
        const user = await getItem(FIRST_TIME_USE_APP)
        if (user === undefined) {
          setFirstTime(false)
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
      console.log('move to Login')
    }
  }, [loading])

  useLayoutEffect(() => {
    if (!loading && !firstTime) {
      console.log('move to Onboarding')
    }
  }, [loading])

  useEffect(() => {
    const setUseApp = async (): Promise<void> => {
      try {
        await setItem(FIRST_TIME_USE_APP, 'true')
      } catch (error) {
        console.log('Error setting used app status:', error)
      }
    }

    setUseApp().catch((error) => {
      console.log('Error setUsedApp:', error)
    })
  }, [firstTime, setItem])

  if (loading) {
    return <SplashTemplate />
  }

  return (
    <View flex={1}>
      <SplashTemplate/>
      {/* <OnboardingTemplate/> */}
    </View>
  )
}

export default index
