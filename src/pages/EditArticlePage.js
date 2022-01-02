import React from 'react'
import { useNavigate, useParams } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { Button, TextField } from '~/src/components/inputs'
import { updateArticle, readArticle } from '~/src/providers/articles'
import DialogLayout from '~/src/layouts/DialogLayout'
import { context } from '~/src/pages/HomePage'

const Component = _ => {
  const { t } = useTranslation('edit article')
  const { reload } = React.useContext(context)
  const navigate = useNavigate()
  const { id } = useParams()
  const [text, setText] = React.useState('')
  const doClose = _ => navigate('/')

  const doSave = async _ => {
    await updateArticle({ id, text })
    reload()
    navigate('/')
  }

  React.useEffect(_ => {
    const init = async _ => {
      const article = await readArticle(id)
      setText(article.text)
    }

    init()
  }, [id])

  return <DialogLayout
    onRequestClose={doClose}
    actions={<>
      <Button title={t`close`} onPress={doClose} />
      <Button title={t`save`} primary disabled={!text} onPress={doSave} />
    </>}>
    <TextField autoFocus value={text} onChange={setText} />
  </DialogLayout>
}

export default Component
