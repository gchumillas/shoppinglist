import React from 'react'
import { getColor } from '~/src/libs/tailwind'

const Component = ({ component: Component, size, color = getColor('gray-600'), ...inconProps }) => {
  return <Component {...inconProps} width={size} height={size} fill={color} />
}

export default Component
