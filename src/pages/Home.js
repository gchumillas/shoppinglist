import React from 'react'
import { StyleSheet, View, FlatList, Pressable, StatusBar } from 'react-native'
import { Link, Outlet, useNavigate } from 'react-router-native'
import NewIcon from '~/assets/icons/new.svg'
import DeleteIcon from '~/assets/icons/delete.svg'
import OptionsIcon from '~/assets/icons/options.svg'
import { tw, Palette } from '~/src/libs/tailwind'
import { Text } from '~/src/components/display'
import { ModalDialog } from '~/src/components/utils'
import { getArticles, deleteArticle, toggleArticle } from '~/src/providers/articles'

export const context = React.createContext({
  reload: _ => Promise.resolve()
})

const Component = _ => {
  const navigate = useNavigate()
  const [selectedArticleId, setSelectedArticleId] = React.useState('')
  const [articles, setArticles] = React.useState([])
  const reload = async _ => setArticles(await getArticles())
  const doCloseDialog = _ => setSelectedArticleId('')

  const doDeleteArticle = async _ => {
    await deleteArticle(selectedArticleId)
    doCloseDialog()
    reload()
  }

  const doEditArticle = async _ => {
    navigate(`/edit-article/${selectedArticleId}`)
    doCloseDialog()
  }

  // checks or unchecks an article
  const doToggleArticle = async ({ id }) => {
    await toggleArticle(id)
    reload()
  }

  React.useEffect(_ => {
    reload()
  }, [])

  return <context.Provider value={React.useMemo(() => ({ reload }), [])}>
    <View style={styles.body}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <View style={styles.itemWrapper}>
          <Text
            key={item.id}
            numberOfLines={1}
            onPress={_ => doToggleArticle(item)}
            style={{ ...styles.itemText, ...item.checked && styles.itemTextChecked }}
          >
            {item.text}
          </Text>
          <Pressable onPress={_ => setSelectedArticleId(item.id)}>
            <OptionsIcon />
          </Pressable>
        </View>}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
    <View style={styles.footer}>
      <Link to="/new-article">
        <NewIcon width={55} height={55} fill={Palette.PrimaryText} />
      </Link>
      <Link to="/delete-all-articles">
        <DeleteIcon width={55} height={55} fill={Palette.PrimaryText} />
      </Link>
    </View>
    <ModalDialog visible={!!selectedArticleId} onRequestClose={doCloseDialog}>
      <Pressable onPress={doEditArticle}>
        <Text style={styles.modalItemText}>Edit</Text>
      </Pressable>
      <Pressable onPress={doDeleteArticle}>
        <Text style={styles.modalItemText}>Delete</Text>
      </Pressable>
    </ModalDialog>
    <Outlet />
  </context.Provider>
}

const styles = StyleSheet.create({
  body: tw('flex-shrink flex-grow px-8'),
  list: { ...tw('pt-5'), marginTop: StatusBar.currentHeight },
  itemWrapper: tw('flex flex-row items-center justify-between mb-6'),
  itemText: { ...tw('text-2xl flex-grow'), fontFamily: 'patrickHand400Regular' },
  itemTextChecked: tw('line-through text-gray-400'),
  modalItemText: tw('py-2'),
  footer: tw('flex flex-row justify-evenly items-center py-4')
})

export default Component
