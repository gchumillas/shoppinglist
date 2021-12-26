import React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { NanumPenScript_400Regular } from '@expo-google-fonts/nanum-pen-script'
import { tw, getColor } from '~/src/libs/tailwind'
import BgImage from '~/src/components/BgImage'
import Home from '~/src/pages/Home'

const App = _ => {
  const [bgWidth, setBgWidth] = React.useState(0)
  const [bgHeight, setBgHeight] = React.useState(0)

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

const AppInit = _ => {
  // TODO: NanumPenScript doesn't include tildes
  const [fontsLoaded] = useFonts({ NanumPenScript_400Regular }) // eslint-disable-line camelcase

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

export default AppInit
