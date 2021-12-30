import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { tw } from '~/src/libs/tailwind'
import { Button, TextField } from '~/src/components/inputs'
import { ModalDialog } from '~/src/components/utils'
import { createArticle } from '~/src/providers/articles'
import { context } from './HomePage'

const Component = _ => {
  const { t } = useTranslation('new article')
  const { reload } = React.useContext(context)
  const navigate = useNavigate()
  const [text, setText] = React.useState('')
  const doClose = _ => navigate('/')

  const doSave = async _ => {
    await createArticle({ text })
    reload()
    navigate('/')
  }

  return <ModalDialog visible onRequestClose={doClose}>
    <View style={styles.body}>
      <TextField autoFocus dense value={text} onChange={setText} />
    </View>
    <View style={styles.footer}>
      <Button title={t`close`} onPress={doClose} />
      <Button title={t`save`} primary disabled={!text} onPress={doSave} />
    </View>
  </ModalDialog>
}

const styles = StyleSheet.create({
  body: tw`py-8`,
  footer: tw`flex flex-row items-center justify-around`
})

export default Component
