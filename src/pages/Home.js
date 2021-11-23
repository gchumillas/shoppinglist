import React from 'react'
import { StyleSheet, View, FlatList, Pressable, StatusBar } from 'react-native'
import { Link, Outlet } from 'react-router-native'
import NewIcon from '~/assets/icons/new.svg'
import DeleteIcon from '~/assets/icons/delete.svg'
import { tw } from '~/src/libs/tailwind'
import { Text } from '~/src/components/elements'

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

const Component = () => {
  return <>
    <View style={styles.list}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <Text key={item.id} style={styles.item}>{item.text}</Text>}
        keyExtractor={item => item.id} />
    </View>
    <View style={styles.footer}>
      <Link to="/new-article">
        <NewIcon width={35} height={35} />
      </Link>
      <Pressable>
        <DeleteIcon width={35} height={35} />
      </Pressable>
    </View>
    <Outlet />
  </>
}

const styles = StyleSheet.create({
  list: {
    ...tw('flex-shrink flex-grow py-3 px-4'),
    marginTop: StatusBar.currentHeight || 0
  },
  item: tw('text-2xl p-2 m-1'),
  footer: tw('flex flex-row justify-evenly items-center py-3')
})

export default Component
