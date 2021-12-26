import React from 'react'
import Svg, { Line, Rect } from 'react-native-svg'
import { getColor } from '~/src/libs/tailwind'
import { range } from '~/src/libs/utils'

const gap = 40

const Component = ({ width, height, style }) => {
  return <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={style}>
    <Rect x="0" y="0" width="100%" height="100%" fill={getColor('yellow-100')} />
    <Line x1="50" y1="0" x2="50" y2="100%" stroke={getColor('red-300')} />
    <Line x1="54" y1="0" x2="54" y2="100%" stroke={getColor('red-300')} />
    {range({ to: Math.ceil(height / gap) }).map(i => (
      <Line key={i} x1="0" y1={i * gap} x2="100%" y2={i * gap} stroke={getColor('gray-300')} />
    ))}
  </Svg>
}

export default Component
