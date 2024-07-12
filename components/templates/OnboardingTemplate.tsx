import React, { useRef, useState } from 'react'
import { Animated, FlatList, StyleSheet, useWindowDimensions, type ViewToken } from 'react-native'
import { Image, Text, View } from 'tamagui'

import { ButtonCustom } from '~/components/atoms/ButtonCustom'
import Dot from '~/components/atoms/Dot'
import { ContentOnboarding } from '~/components/molecules/ContentOnboarding'
import getColors from '~/constants/Colors'
import useTranslation from '~/hooks/useTranslation'

const OnboardingTemplate = (): JSX.Element => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const [currentIndex, setCurrentIndex] = useState(0)
  const scroolX = useRef(new Animated.Value(0)).current
  const [buttonText, setButtonText] = useState('Get Started')

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

  const slideRef = useRef<FlatList<any>>(null)

  const data = [
    {
      des: 'Smart, Gorgeous & Fashionable Collection',
      id: '1',
      img: require('assets/images/shoes1.png'),
      title: 'Start Journey With Nike'
    },
    {
      des: 'There Are Many Beautiful And Attractive Plants To Your Room',
      id: '2',
      img: require('assets/images/shoes2.png'),
      title: 'Follow Latest Style Shoes'
    },
    {
      des: 'Amet Minim Lit Nodeseru Saku Nandu sit Alique Dolor',
      id: '3',
      img: require('assets/images/shoes3.png'),
      title: 'Summer Shoes Nike 2022'
    }
  ]

  const OnboardingItem = ({ item }: any): any => {
    const colorlight = getColors('light')
    return (
      <View style={[styles.containerItem, { width }]}>
        <View flex={3}>
          <View alignItems="center">
            <Text
              color={colorlight.lightGray}
              marginTop="32%"
              fontSize={154}
              style={styles.nikeText}>
              NIKE
            </Text>
          </View>
          <Image
            source={item.img}
            style={styles.image}
          />
        </View>
        <View flexDirection="row" marginLeft={20} flex={1.5}>
          <ContentOnboarding flex={4} title={item.title} des={item.des} />
          <View flex={0.5}></View>
        </View>
        <Dot marginTop={'96%'} right={40} />
        <Dot marginTop={'34%'} marginLeft={47} />
        <Dot marginTop={'109%'} marginLeft={20} />
      </View>
    )
  }

  const Paginator = (data: any): any => {
    return (
      <View flexDirection="row">
        {
          data.map((_: any, i: number) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width]

            const dotWidth = scroolX.interpolate({
              extrapolate: 'clamp',
              inputRange,
              outputRange: [8, 35, 8]
            })

            const opacity = scroolX.interpolate({
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
    if (slideRef.current != null && currentIndex < data.length - 1) {
      slideRef
        .current
        .scrollToIndex({ animated: true, index: currentIndex + 1 })
    } else {
      console.log('Last item')
    }
  }
  const colors = getColors('dark')
  return (
    <View backgroundColor={colors.tint} flex={1}>
      <View flex={3}>
        <FlatList
          data={data}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated
            .event([{ nativeEvent: { contentOffset: { x: scroolX } } }],
              { useNativeDriver: false })}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>
      <View style={styles.footer}>
        {Paginator(data)}
        <ButtonCustom paddingHorizontal={32} title={buttonText}
          onPress={() => { scrollToNext() }} />
      </View>
    </View>
  )
}

export default OnboardingTemplate

const styles = StyleSheet.create({
  containerItem: {
    flex: 1
  },
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
  },
  image: {
    marginTop: '30%'
  },
  nikeText: {
    fontWeight: 'bold',
    position: 'absolute'
  }
})