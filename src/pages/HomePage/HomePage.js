import React from 'react'
import { StyleSheet, View, FlatList, Pressable, StatusBar } from 'react-native'
import { Outlet, useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import cn from 'react-native-classnames'
import NewIcon from '~/assets/icons/new.svg'
import MicIcon from '~/assets/icons/mic.svg'
import DeleteIcon from '~/assets/icons/delete.svg'
import EditIcon from '~/assets/icons/edit.svg'
import OptionsIcon from '~/assets/icons/options.svg'
import SettingsIcon from '~/assets/icons/translate.svg'
import { getColor, tw } from '~/src/libs/tailwind'
import PageLayout from '~/src/layouts/PageLayout'
import { Text, Icon } from '~/src/components/display'
import { ModalDialog } from '~/src/components/utils'
import { Link } from '~/src/components/navigation'
import { getArticles, deleteArticle, toggleArticle } from '~/src/providers/articles'
import { context } from './context'

const Component = _ => {
  const { t } = useTranslation('home')
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

  const doToggleArticle = async ({ id }) => {
    await toggleArticle(id)
    reload()
  }

  React.useEffect(_ => {
    reload()
  }, [])

  return <context.Provider value={React.useMemo(_ => ({ reload }), [])}>
    <PageLayout>
      <View style={styles.body}>
        <FlatList
          data={articles}
          renderItem={({ item }) => <View style={styles.itemWrapper}>
            <Text
              key={item.id}
              numberOfLines={1}
              onPress={_ => doToggleArticle(item)}
              style={cn(styles, 'itemText', { itemTextChecked: item.checked })}
          >
              {item.text}
            </Text>
            <Pressable onPress={_ => setSelectedArticleId(item.id)} style={tw`mt-2`}>
              <Icon
                component={OptionsIcon}
                size={25}
                color={getColor('gray-600')}
                style={item.checked ? tw`opacity-50` : tw`opacity-100`} />
            </Pressable>
          </View>}
          keyExtractor={item => item.id}
          style={styles.list}
      />
      </View>
      <View style={styles.footer}>
        <Link to="/settings">
          <Icon component={SettingsIcon} size={55} />
        </Link>
        <Link to="/new-article">
          <Icon component={NewIcon} size={55} />
        </Link>
        <Link to="/recorder">
          <Icon component={MicIcon} size={55} />
        </Link>
        <Link to="/delete-all-articles">
          <Icon component={DeleteIcon} size={55} />
        </Link>
      </View>
      <ModalDialog visible={!!selectedArticleId} onRequestClose={doCloseDialog}>
        <Pressable onPress={doEditArticle} style={tw`flex flex-row items-center mb-3`}>
          <Icon component={EditIcon} size={30} color={getColor('primary')} style={tw`mr-3`} />
          <Text style={styles.modalItemText}>{t`edit`}</Text>
        </Pressable>
        <Pressable onPress={doDeleteArticle} style={tw`flex flex-row items-center`}>
          <Icon component={DeleteIcon} size={30} color={getColor('primary')} style={tw`mr-3`} />
          <Text style={styles.modalItemText}>{t`delete`}</Text>
        </Pressable>
      </ModalDialog>
      <Outlet />
    </PageLayout>
  </context.Provider>
}

const styles = StyleSheet.create({
  body: tw`flex-shrink flex-grow pr-8 pl-12`,
  list: { ...tw`pt-3`, marginTop: StatusBar.currentHeight },
  itemWrapper: tw`flex flex-row items-center justify-between`,
  itemText: {
    ...tw`text-xl text-gray-600 flex-grow pt-2 pb-1`,
    maxWidth: '87%',
    fontFamily: 'RobotoSlab_500Medium'
  },
  itemTextChecked: tw`text-gray-600 text-opacity-30`,
  modalItemText: {
    ...tw`py-2 text-lg`,
    fontFamily: 'RobotoSlab_500Medium'
  },
  footer: tw`flex flex-row justify-evenly items-center py-4`
})

export default Component
