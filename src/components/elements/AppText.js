import React from 'react'
import { Text } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ style, ...props }) => {
  // TODO: replace patrickHand400Regular by Roboto
  const defaultStyle = { ...tw('text-base text-primary'), fontFamily: 'patrickHand400Regular' }

  return <Text {...props} style={{ ...defaultStyle, ...style }} />
}

export default Component
