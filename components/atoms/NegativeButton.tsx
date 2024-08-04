import React from 'react'
import { Button, type ButtonProps } from 'tamagui'

type Props = {
  title?: string
  icon?: JSX.Element
} & ButtonProps

export const NegativeButton = (props: Props): React.ReactElement => {
  return (
    <Button
      {...props}
      testID="negative-button"
      fontWeight={'500'}
      fontSize={18}
      borderWidth={0}
      borderRadius={50}
      icon={props.icon}>
      {props.title}
    </Button>
  )
}
