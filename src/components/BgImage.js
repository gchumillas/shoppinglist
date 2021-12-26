import React from 'react'
import Svg, { Line } from 'react-native-svg'
import { getColor } from '~/src/libs/tailwind'
import { range } from '~/src/libs/utils'

const h0 = 30 // space between the first vertical line and the left edge
const h = 5 // space between vertical lines
const v0 = 40 // space between the first horizontal line and the top edge
const v = 50 // vertical space between horizontal lines

const Component = ({ width, height, style }) => {
  return <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={style}>
    {/* vertical lines */}
    {range({ from: 1, to: 2 }).map(i => (
      <Line key={i} x1={h0 + h * i} y1="0" x2={h0 + h * i} y2="100%" stroke={getColor('red-200')} strokeWidth={1} />)
    )}
    {/* horizontal lines */}
    {range({ from: 1, to: Math.ceil((height - v0) / v) - 1 }).map(i => (
      <Line key={i} x1="0" y1={i * v + v0} x2="100%" y2={i * v + v0} stroke={getColor('gray-200')} />
    ))}
  </Svg>
}

export default Component
