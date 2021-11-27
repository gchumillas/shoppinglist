import React from 'react'
import { registerRootComponent } from 'expo'
import { NativeRouter, Routes, Route } from 'react-router-native'
import NewArticle from '~/src/pages/NewArticle'
import EditArticle from '~/src/pages/EditArticle'
import DeleteAllArticles from './src/pages/DeleteAllArticles'
import App from './src/App'

const Root = () => {
  return <NativeRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/new-article" element={<NewArticle />} />
        <Route path="/edit-article/:id" element={<EditArticle />} />
        <Route path="/delete-all-articles" element={<DeleteAllArticles />} />
      </Route>
    </Routes>
  </NativeRouter>
}

registerRootComponent(Root)
