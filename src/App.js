import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import * as Localization from 'expo-localization'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { RobotoSlab_500Medium } from '@expo-google-fonts/roboto-slab'
import { tw, getColor } from '~/src/libs/tailwind'
import { useLanguage, useDetectLanguage } from '~/src/hooks/store'
import BgImage from '~/src/components/BgImage'
import Home from '~/src/pages/Home'
import i18n from 'i18n-js'

// TODO: React Native autocomplete
const App = _ => {
  const [language] = useLanguage()
  const [detectLanguage] = useDetectLanguage()
  const [bgWidth, setBgWidth] = React.useState(0)
  const [bgHeight, setBgHeight] = React.useState(0)

  React.useEffect(() => {
    const lang = detectLanguage || !language ? Localization.locale : language
    i18n.locale = lang
  }, [language, detectLanguage])

  const doLayout = e => {
    const { nativeEvent: { layout } } = e
    setBgWidth(layout.width)
    setBgHeight(layout.height)
  }

  return <View style={styles.container} onLayout={doLayout}>
    <BgImage width={bgWidth} height={bgHeight} style={tw('absolute')} />
    <Home />
    <StatusBar style="auto" />
  </View>
}

const AppContainer = _ => {
  const [fontsLoaded] = useFonts({ RobotoSlab_500Medium }) // eslint-disable-line camelcase

  return fontsLoaded
    ? <App />
    : <View style={styles.container}>
      <ActivityIndicator size="large" color={getColor('gray-600')} />
      <StatusBar style="auto" />
    </View>
}

const styles = StyleSheet.create({
  container: tw('flex h-full')
})

export default AppContainer
