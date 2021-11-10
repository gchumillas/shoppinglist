import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View, FlatList, Text, StatusBar } from 'react-native'

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

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <Text key={item.id}>{item.text}</Text>}
      />
      <ExpoStatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight
  }
})
