import React from 'react'
import { registerRootComponent } from 'expo'
import { NativeRouter, Routes, Route } from 'react-router-native'
import Home from '~/src/pages/Home'
import App from './src/App'

const Root = () => {
  return <NativeRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </NativeRouter>
}

registerRootComponent(Root)
