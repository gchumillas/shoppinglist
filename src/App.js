import React from 'react'
import { StyleSheet, View, ActivityIndicator, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { PatrickHand_400Regular as patrickHand400Regular } from '@expo-google-fonts/patrick-hand'
import { NativeRouter, Routes, Route } from 'react-router-native'
import Home from '~/src/pages/Home'
import { tw, getColor } from '~/src/libs/tailwind'

const App = () => {
  // TODO: (?) replace ImageBackground by a canvas
  return <NativeRouter>
    <ImageBackground source={require('~/assets/bg.png')} style={styles.container}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <StatusBar style="auto" />
    </ImageBackground>
  </NativeRouter>
}

const AppInit = () => {
  const [fontsLoaded] = useFonts({ patrickHand400Regular })

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
