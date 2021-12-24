import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate, useParams } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { Button, TextField } from '~/src/components/inputs'
import { ModalDialog } from '~/src/components/utils'
import { updateArticle, readArticle } from '~/src/providers/articles'
import { context } from './Home'

const Component = _ => {
  const { reload } = React.useContext(context)
  const navigate = useNavigate()
  const { id } = useParams()
  const [inputs, setInputs] = React.useState({ text: '' })
  const data = React.useMemo(() => ({ ...inputs, text: inputs.text.trim() }), [JSON.stringify(inputs)])

  const doSave = async _ => {
    await updateArticle({ id, ...data })
    reload()
    navigate('/')
  }

  React.useEffect(_ => {
    const init = async _ => {
      const article = await readArticle(id)
      setInputs({ text: article.text })
    }

    init()
  }, [])

  return <ModalDialog visible>
    <View>
      <TextField autoFocus value={inputs.text} onChange={text => setInputs({ ...inputs, text })} />
    </View>
    <View style={styles.footer}>
      <Button title="Close" onPress={_ => navigate('/')} />
      <Button title="Save" primary disabled={!data.text} onPress={doSave} />
    </View>
  </ModalDialog>
}

const styles = StyleSheet.create({
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
