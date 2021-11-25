import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { AppButton, AppTextInput } from '~/src/components/elements'
import ModalBox from '~/src/components/ModalBox'
import { updateArticle, readArticle } from '~/src/providers/articles'
import { context } from './Home'

const Component = () => {
  const { reload } = React.useContext(context)
  const navigate = useNavigate()
  const { id } = useParams()
  const [text, setText] = React.useState('')

  const doSave = async () => {
    await updateArticle(id, text)
    reload()
    navigate('/')
  }

  React.useEffect(() => {
    const init = async _ => {
      const article = await readArticle(id)
      setText(article.text)
    }

    init()
  }, [])

  return <ModalBox visible>
    <View>
      <AppTextInput autoFocus value={text} onChangeText={setText} style={styles.input} />
    </View>
    <View style={styles.footer}>
      <AppButton title="Close" onPress={() => navigate('/')} />
      <AppButton title="Save" primary onPress={doSave} />
    </View>
  </ModalBox>
}

const styles = StyleSheet.create({
  container: tw('flex h-full justify-center items-center'),
  box: tw('bg-white p-5 max-w-xs w-full border rounded-lg'),
  input: tw('border'),
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
