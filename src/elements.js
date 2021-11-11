import React from 'react'
import rn from 'react-native'
import { tailwind } from '~/src/tailwind'

const Text = ({ style, ...props }) => {
  const defaultStyle = tailwind('text-base text-gray-800')

  return <rn.Text {...props} style={{ ...defaultStyle, ...style }} />
}

export { Text }
