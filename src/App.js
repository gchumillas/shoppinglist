import React from 'react'
import { StyleSheet, View, ActivityIndicator, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { NanumPenScript_400Regular } from '@expo-google-fonts/nanum-pen-script'
import { tw, getColor } from '~/src/libs/tailwind'
import Home from '~/src/pages/Home'

const App = _ => {
  // TODO: (?) replace ImageBackground by a canvas
  return <ImageBackground source={require('~/assets/bg.png')} style={styles.container}>
    <Home />
    <StatusBar style="auto" />
  </ImageBackground>
}

const AppInit = _ => {
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
