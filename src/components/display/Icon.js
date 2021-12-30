import React from 'react'
import { getColor } from '~/src/libs/tailwind'

const Component = ({ component: Component, size, ...inconProps }) => {
  return <Component width={size} height={size} fill={getColor('gray-600')} {...inconProps} />
}

export default Component
