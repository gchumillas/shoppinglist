import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { Button, TextField } from '~/src/components/inputs'
import { ModalDialog } from '~/src/components/utils'
import { createArticle } from '~/src/providers/articles'
import { context } from './Home'

const Component = _ => {
  const { reload } = React.useContext(context)
  const navigate = useNavigate()
  const [inputs, setInputs] = React.useState({ text: '' })
  const data = React.useMemo(() => ({ ...inputs, text: inputs.text.trim() }), [JSON.stringify(inputs)])

  const doSave = async _ => {
    await createArticle(data)
    reload()
    navigate('/')
  }

  return <ModalDialog visible>
    <View style={styles.body}>
      <TextField autoFocus dense value={inputs.text} onChange={text => setInputs({ ...inputs, text })} />
    </View>
    <View style={styles.footer}>
      <Button title="Close" onPress={_ => navigate('/')} />
      <Button title="Save" primary disabled={!data.text} onPress={doSave} />
    </View>
  </ModalDialog>
}

const styles = StyleSheet.create({
  body: tw('py-8'),
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
