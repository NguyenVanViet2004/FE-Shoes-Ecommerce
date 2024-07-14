import { useRouter } from 'expo-router'
import { type ExpoRouter } from 'expo-router/types/expo-router'
import { isNil } from 'lodash'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Spinner } from 'tamagui'

import OnboardingTemplate from '~/components/templates/OnboardingTemplate'
import useStorage from '~/hooks/useStorage'

const index = (): JSX.Element => {
  const { getItem, setItem } = useStorage()
  const [firstTime, setFirstTime] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const router = useRouter()

  const FIRST_TIME_USE_APP = 'FIRST-TIME-USE-APP'

  useEffect(() => {
    const checkFirstTime = async (): Promise<void> => {
      const user = await getItem(FIRST_TIME_USE_APP)
      if (isNil(user)) {
        setFirstTime(true)
        setItem(FIRST_TIME_USE_APP, 'false').catch(e => {
          console.error(e)
        })
      }
      setIsLoading(false)
    }

    checkFirstTime().catch(e => {
      console.error(e)
    })
  }, [])

  useLayoutEffect(() => {
    if (!isLoading && !firstTime) {
      router.replace('/(tabs)' as ExpoRouter.Href)
    }
  }, [isLoading])

  if (isLoading) {
    return <Spinner flex={1} justifyContent="center" size="large"/>
  }

  return (
    <OnboardingTemplate/>
  )
}

export default index
