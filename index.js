import React from 'react'
import { Provider } from 'react-redux'
import { registerRootComponent } from 'expo'
import { NativeRouter, Routes, Route } from 'react-router-native'
import store from '~/src/store'
import '~/src/i18n'
import NewArticlePage from '~/src/pages/NewArticlePage'
import EditArticlePage from '~/src/pages/EditArticlePage'
import DeleteAllArticles from '~/src/pages/DeleteAllArticles'
import RecorderPage from '~/src/pages/RecorderPage'
import SettingsPage from '~/src/pages/SettingsPage'
import App from '~/src/App'

const Root = () => {
  return <Provider store={store}>
    <NativeRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/new-article" element={<NewArticlePage />} />
          <Route path="/edit-article/:id" element={<EditArticlePage />} />
          <Route path="/delete-all-articles" element={<DeleteAllArticles />} />
          <Route path="/recorder" element={<RecorderPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </NativeRouter>
  </Provider>
}

registerRootComponent(Root)
