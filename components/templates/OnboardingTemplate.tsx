import React, { useRef, useState } from 'react'
import { Animated, FlatList, StyleSheet, useColorScheme, useWindowDimensions, type ViewToken } from 'react-native'
import { View } from 'tamagui'

import { PositiveButton } from '~/components/atoms/PositiveButton'
import { OnboardingItem } from '~/components/molecules/OnboardingItem'
import getColors from '~/constants/Colors'
import dataOnboarding from '~/constants/DataOnboarding'
import useTranslation from '~/hooks/useTranslation'

const OnboardingTemplate = (): JSX.Element => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const scrollX = useRef(new Animated.Value(0)).current
  const [buttonText, setButtonText] = useState<string>('Get Started')

  const viewableItemsChanged = useRef(({ viewableItems }:
  { viewableItems: ViewToken[] }) => {
    setCurrentIndex(viewableItems[0].index ?? 0)

    if (viewableItems[0]?.index === 1 || viewableItems[0]?.index === 2) {
      setButtonText(t('next'))
    } else {
      setButtonText(t('getStarted'))
    }
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  const slideRef = useRef<FlatList<number>>(null)

  const Paginator = (data: any): any => {
    return (
      <View flexDirection="row" >
        {
          data.map((_: any, i: number) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

            const dotWidth = scrollX.interpolate({
              extrapolate: 'clamp',
              inputRange,
              outputRange: [8, 35, 8]
            })

            const opacity = scrollX.interpolate({
              extrapolate: 'clamp',
              inputRange,
              outputRange: [0.3, 1, 0.3]
            })
            return (
              <Animated.View
                style={[
                  styles.dot,
                  {
                    backgroundColor: colors.cornflowerBlue,
                    opacity,
                    width: dotWidth
                  }
                ]}
                key={i.toString()}
              >
              </Animated.View>
            )
          })
        }

      </View>
    )
  }

  const scrollToNext = (): any => {
    if (slideRef.current != null && currentIndex < dataOnboarding.length - 1) {
      slideRef
        .current
        .scrollToIndex({ animated: true, index: currentIndex + 1 })
    }
  }
  const colors = getColors(useColorScheme())
  return (
    <View backgroundColor={colors.backgroundApp} flex={1}>
      <View flex={3}>
        <FlatList
          data={dataOnboarding}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated
            .event([{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
      <View style={styles.footer}>
        {Paginator(dataOnboarding)}
        <PositiveButton
          paddingHorizontal={32}
          title={buttonText}
          onPress={() => { scrollToNext() }} />
      </View>
    </View>
  )
}

export default OnboardingTemplate

const styles = StyleSheet.create({
  dot: {
    borderRadius: 16,
    height: 5,
    marginHorizontal: 8
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 41,
    marginHorizontal: 20
  }
})
