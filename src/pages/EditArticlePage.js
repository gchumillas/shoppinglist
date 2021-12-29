import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { tw } from '~/src/libs/tailwind'
import { Button, TextField } from '~/src/components/inputs'
import { ModalDialog } from '~/src/components/utils'
import { updateArticle, readArticle } from '~/src/providers/articles'
import { context } from './Home'

const Component = _ => {
  const { t } = useTranslation('edit article')
  const { reload } = React.useContext(context)
  const navigate = useNavigate()
  const { id } = useParams()
  const [text, setText] = React.useState('')

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

  return <ModalDialog visible>
    <View>
      <TextField autoFocus value={text} onChange={setText} />
    </View>
    <View style={styles.footer}>
      <Button title={t`close`} onPress={_ => navigate('/')} />
      <Button title={t`save`} primary disabled={!text} onPress={doSave} />
    </View>
  </ModalDialog>
}

const styles = StyleSheet.create({
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
