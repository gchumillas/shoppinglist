import React from 'react'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { Button, TextField } from '~/src/components/inputs'
import { createArticle } from '~/src/providers/articles'
import DialogLayout from '~/src/layouts/DialogLayout'
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

  return <DialogLayout
    onRequestClose={doClose}
    actions={<>
      <Button title={t`close`} onPress={doClose} />
      <Button title={t`save`} primary disabled={!text} onPress={doSave} />
    </>}>
    <TextField autoFocus dense value={text} onChange={setText} />
  </DialogLayout>
}

export default Component
