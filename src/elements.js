import React from 'react'
import rn from 'react-native'
import { tw } from '~/src/tailwind'

const Text = ({ style, ...props }) => {
  const defaultStyle = { ...tw('text-base text-gray-800'), fontFamily: 'patrickHand400Regular' }

  return <rn.Text {...props} style={{ ...defaultStyle, ...style }} />
}

export { Text }