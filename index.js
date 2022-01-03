import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Provider } from 'react-redux'
import { NativeRouter, Routes, Route } from 'react-router-native'
import { registerRootComponent } from 'expo'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import * as Localization from 'expo-localization'
import { RobotoSlab_500Medium, RobotoSlab_900Black } from '@expo-google-fonts/roboto-slab'
import { loadStore } from '~/src/store'
import { tw, getColor } from '~/src/libs/tailwind'
import { useLanguage } from '~/src/hooks/store'
import i18n from '~/src/i18n'
import HomePage from '~/src/pages/HomePage'
import NewArticlePage from '~/src/pages/NewArticlePage'
import EditArticlePage from '~/src/pages/EditArticlePage'
import DeleteAllArticlesPage from '~/src/pages/DeleteAllArticlesPage'
import RecorderPage from '~/src/pages/RecorderPage'
import SettingsPage from '~/src/pages/SettingsPage'

const App = _ => {
  const [language] = useLanguage()

  React.useEffect(() => {
    i18n.changeLanguage(language || Localization.locale)
  }, [language])

  return <NativeRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="/new-article" element={<NewArticlePage />} />
        <Route path="/edit-article/:id" element={<EditArticlePage />} />
        <Route path="/delete-all-articles" element={<DeleteAllArticlesPage />} />
        <Route path="/recorder" element={<RecorderPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  </NativeRouter>
}

const AppLoader = _ => {
  const [fontsLoaded] = useFonts({ RobotoSlab_500Medium, RobotoSlab_900Black }) // eslint-disable-line camelcase
  const [value, setValue] = React.useState()

  React.useEffect(_ => {
    loadStore().then(store => setValue(store))
  }, [])

  return value && fontsLoaded
    ? <Provider store={value}>
      <App />
    </Provider>
    : <View style={tw`flex h-full justify-center items-center`}>
      <ActivityIndicator size={55} color={getColor('gray-600')} />
      <StatusBar style="auto" />
    </View>
}

registerRootComponent(AppLoader)
