import React from 'react'
import { StyleSheet, View, FlatList, Pressable, StatusBar } from 'react-native'
import { Link, Outlet } from 'react-router-native'
import NewIcon from '~/assets/icons/new.svg'
import DeleteIcon from '~/assets/icons/delete.svg'
import { tw } from '~/src/libs/tailwind'
import { AppText } from '~/src/components/elements'
import { getArticles } from '~/src/providers/articles'

const Component = () => {
  const [articles, setArticles] = React.useState([])

  React.useEffect(() => {
    const loadArticles = async () => setArticles(await getArticles())

    loadArticles()
  }, [])

  return <>
    <View style={styles.list}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <AppText key={item.id} style={styles.item}>{item.text}</AppText>}
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
