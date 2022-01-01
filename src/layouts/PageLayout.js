import React from 'react'
import { View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { tw } from '~/src/libs/tailwind'
import BgImage from '~/src/components/BgImage'

const Component = ({ children }) => {
  const [bgWidth, setBgWidth] = React.useState(0)
  const [bgHeight, setBgHeight] = React.useState(0)

  const doLayout = e => {
    const { nativeEvent: { layout } } = e
    setBgWidth(layout.width)
    setBgHeight(layout.height)
  }

  return <View style={tw`flex h-full`} onLayout={doLayout}>
    <BgImage width={bgWidth} height={bgHeight} style={tw`absolute`} />
    {children}
    <StatusBar style="auto" />
  </View>
}

export default Component
