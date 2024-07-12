import React from 'react'
import { View, type ViewProps } from 'tamagui'

import { TextDes } from '../atoms/TextDes'
import { TextTitle } from '../atoms/TextTitle'

type Props = {
  title: string
  des: string
} & ViewProps

export const ContentOnboarding = (props: Props): React.ReactElement => {
  return (
    <View
      {...props}
    >
      <TextTitle text={props.title}/>
      <View marginTop={8} />
      <TextDes text={props.des} />
    </View>
  )
}
