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
  const [text, setText] = React.useState('')

  const doSave = async _ => {
    await createArticle({ text })
    reload()
    navigate('/')
  }

  return <ModalDialog visible>
    <View style={styles.body}>
      <TextField autoFocus dense value={text} onChange={setText} />
    </View>
    <View style={styles.footer}>
      <Button title="Close" onPress={_ => navigate('/')} />
      <Button title="Save" primary disabled={!text} onPress={doSave} />
    </View>
  </ModalDialog>
}

const styles = StyleSheet.create({
  body: tw('py-8'),
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
