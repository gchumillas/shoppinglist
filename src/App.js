import React from 'react'
import { StyleSheet, View, FlatList, StatusBar, ActivityIndicator, ImageBackground, Pressable } from 'react-native'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import { PatrickHand_400Regular as patrickHand400Regular } from '@expo-google-fonts/patrick-hand'
import NewIcon from '~/assets/icons/new.svg'
import MicIcon from '~/assets/icons/mic.svg'
import DeleteIcon from '~/assets/icons/delete.svg'
import { Text } from '~/src/components/elements'
import { tw, getColor } from '~/src/libs/tailwind'

const articles = [
  { text: 'Pimiento rojo', id: '1' },
  { text: 'Guindillas', id: '2' },
  { text: 'Patatas pequeñas', id: '3' },
  { text: 'Comino en grano', id: '4' },
  { text: 'Vinagre', id: '5' },
  { text: 'Ajos', id: '6' },
  { text: 'Pimentón dulce', id: '7' },
  { text: 'Sal', id: '8' },
  { text: 'Pimiento rojo', id: '9' },
  { text: 'Guindillas', id: '10' },
  { text: 'Patatas pequeñas', id: '11' },
  { text: 'Comino en grano', id: '12' },
  { text: 'Vinagre', id: '13' },
  { text: 'Ajos', id: '14' },
  { text: 'Pimentón dulce', id: '15' },
  { text: 'Sal', id: '16' }
]

const App = () => {
  // TODO: (?) replace ImageBackground by a canvas
  return <ImageBackground source={require('~/assets/bg.png')} style={styles.container}>
    <View style={styles.list}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <Text key={item.id} style={styles.item}>{item.text}</Text>}
        keyExtractor={item => item.id} />
    </View>
    <View style={styles.footer}>
      <Pressable>
        <NewIcon width={35} height={35} />
      </Pressable>
      <Pressable>
        <MicIcon width={35} height={35} />
      </Pressable>
      <Pressable>
        <DeleteIcon width={35} height={35} />
      </Pressable>
    </View>
    <ExpoStatusBar style="auto" />
  </ImageBackground>
}

const AppInit = () => {
  const [fontsLoaded] = useFonts({ patrickHand400Regular })

  return fontsLoaded
    ? <App />
    : <View style={styles.container}>
      <ActivityIndicator size="large" color={getColor('gray-600')} />
      <ExpoStatusBar style="auto" />
    </View>
}

const styles = StyleSheet.create({
  container: tw('flex h-full'),
  list: {
    ...tw('flex-shrink flex-grow py-3 px-4'),
    marginTop: StatusBar.currentHeight || 0
  },
  item: tw('text-2xl p-2 m-1'),
  footer: tw('flex flex-row justify-around items-center py-3')
})

export default AppInit
