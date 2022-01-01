import React from 'react'
import { View } from 'react-native'
import * as Localization from 'expo-localization'
import { StatusBar } from 'expo-status-bar'
import { tw } from '~/src/libs/tailwind'
import i18n from '~/src/i18n'
import { useLanguage } from '~/src/hooks/store'
import BgImage from '~/src/components/BgImage'
import HomePage from '~/src/pages/HomePage'

const App = _ => {
  const [language] = useLanguage()
  const [bgWidth, setBgWidth] = React.useState(0)
  const [bgHeight, setBgHeight] = React.useState(0)

  React.useEffect(() => {
    i18n.changeLanguage(language || Localization.locale)
  }, [language])

  const doLayout = e => {
    const { nativeEvent: { layout } } = e
    setBgWidth(layout.width)
    setBgHeight(layout.height)
  }

  return <View style={tw`flex h-full`} onLayout={doLayout}>
    <BgImage width={bgWidth} height={bgHeight} style={tw`absolute`} />
    <HomePage />
    <StatusBar style="auto" />
  </View>
}

export default App
