import React from 'react'
import { StyleSheet, View, FlatList, Pressable, StatusBar } from 'react-native'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-native'
import NewIcon from '~/assets/icons/new.svg'
import DeleteIcon from '~/assets/icons/delete.svg'
import OptionsIcon from '~/assets/icons/options.svg'
import { tw } from '~/src/libs/tailwind'
import { AppText } from '~/src/components/elements'
import ModalBox from '~/src/components/ModalBox'
import { getArticles, deleteArticle, toggleArticle } from '~/src/providers/articles'

export const context = React.createContext({
  reload: _ => {}
})

const Component = _ => {
  const navigate = useNavigate()
  const location = useLocation()
  const { lastInsertId } = location.state || {}
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
  }, [lastInsertId])

  return <context.Provider value={{ reload }}>
    <View style={styles.list}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <View style={styles.itemWrapper}>
          {/* TODO: text should extends 100% */}
          <AppText
            key={item.id}
            onPress={_ => doToggleArticle(item)}
            style={{ ...styles.itemText, ...item.checked && tw('line-through') }}>
            {item.text}
          </AppText>
          <Pressable onPress={_ => setSelectedArticleId(item.id)}>
            <OptionsIcon />
          </Pressable>
        </View>}
        keyExtractor={item => item.id} />
    </View>
    <View style={styles.footer}>
      <Link to="/new-article">
        <NewIcon width={35} height={35} />
      </Link>
      <Link to="/delete-all-articles">
        <DeleteIcon width={35} height={35} />
      </Link>
    </View>
    <ModalBox visible={!!selectedArticleId} onRequestClose={doCloseDialog}>
      <Pressable onPress={doEditArticle}>
        <AppText style={styles.modalItemText}>Edit</AppText>
      </Pressable>
      <Pressable onPress={doDeleteArticle}>
        <AppText style={styles.modalItemText}>Delete</AppText>
      </Pressable>
    </ModalBox>
    <Outlet />
  </context.Provider>
}

const styles = StyleSheet.create({
  list: {
    ...tw('flex-shrink flex-grow py-3 px-4'),
    marginTop: StatusBar.currentHeight || 0
  },
  itemWrapper: tw('flex flex-row items-center justify-between'),
  itemText: { ...tw('text-2xl p-2 m-1'), fontFamily: 'patrickHand400Regular' },
  itemTextChecked: tw('line-through'),
  modalItemText: tw('py-2'),
  footer: tw('flex flex-row justify-evenly items-center py-3')
})

export default Component
