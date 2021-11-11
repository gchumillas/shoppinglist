import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, FlatList, StatusBar } from 'react-native'
import { Text } from '~/src/elements'
import { tailwind } from '~/src/tailwind'

const articles = [
  { text: 'Pimiento rojo', id: '1' },
  { text: 'Guindillas', id: '2' },
  { text: 'Patatas pequeñas', id: '3' },
  { text: 'Comino en grano', id: '4' },
  { text: 'Vinagre', id: '5' },
  { text: 'Ajos', id: '6' },
  { text: 'Pimentón dulce', id: '7' },
  { text: 'Sal', id: '8' }
]

const App = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <Text key={item.id} style={styles.item}>{item.text}</Text>}
        keyExtractor={item => item.id}
      />
      <ExpoStatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    ...tailwind('flex bg-white py-3 px-4'),
    marginTop: StatusBar.currentHeight || 0
  },
  item: tailwind('text-lg pb-2')
})

export default App
