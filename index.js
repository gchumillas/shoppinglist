import React from 'react'
import { Provider } from 'react-redux'
import { registerRootComponent } from 'expo'
import { NativeRouter, Routes, Route } from 'react-router-native'
import store from '~/src/store'
import '~/src/i18n'
import NewArticle from '~/src/pages/NewArticle'
import EditArticle from '~/src/pages/EditArticle'
import DeleteAllArticles from '~/src/pages/DeleteAllArticles'
import Recorder from '~/src/pages/Recorder'
import Settings from '~/src/pages/Settings'
import App from '~/src/App'

const Root = () => {
  return <Provider store={store}>
    <NativeRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/new-article" element={<NewArticle />} />
          <Route path="/edit-article/:id" element={<EditArticle />} />
          <Route path="/delete-all-articles" element={<DeleteAllArticles />} />
          <Route path="/recorder" element={<Recorder />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </NativeRouter>
  </Provider>
}

registerRootComponent(Root)
