import React from 'react'
import { registerRootComponent } from 'expo'
import { NativeRouter, Routes, Route } from 'react-router-native'
import NewArticle from '~/src/pages/NewArticle'
import App from './src/App'

const Root = () => {
  return <NativeRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/new-article" element={<NewArticle />} />
      </Route>
    </Routes>
  </NativeRouter>
}

registerRootComponent(Root)
