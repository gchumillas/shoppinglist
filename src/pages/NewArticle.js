import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { AppButton, AppTextInput } from '~/src/components/inputs'
import ModalBox from '~/src/components/ModalBox'
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

  return <ModalBox visible>
    <View style={styles.body}>
      <AppTextInput autoFocus dense value={text} onChangeText={setText} />
    </View>
    <View style={styles.footer}>
      <AppButton title="Close" onPress={_ => navigate('/')} />
      <AppButton title="Save" primary disabled={!text} onPress={doSave} />
    </View>
  </ModalBox>
}

const styles = StyleSheet.create({
  body: tw('py-8'),
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
