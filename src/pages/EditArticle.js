import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { Button, TextField } from '~/src/components/inputs'
import { ModalBox } from '~/src/components/utils'
import { updateArticle, readArticle } from '~/src/providers/articles'
import { context } from './Home'

const Component = _ => {
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
  }, [])

  return <ModalBox visible>
    <View>
      <TextField autoFocus value={text} onChangeText={setText} />
    </View>
    <View style={styles.footer}>
      <Button title="Close" onPress={_ => navigate('/')} />
      <Button title="Save" primary disabled={!text} onPress={doSave} />
    </View>
  </ModalBox>
}

const styles = StyleSheet.create({
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
