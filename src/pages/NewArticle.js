import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { AppButton, AppTextInput } from '~/src/components/elements'
import ModalBox from '~/src/components/ModalBox'
import { createArticle } from '~/src/providers/articles'
import { context } from './Home'

const Component = _ => {
  const { reload } = React.useContext(context)
  const navigate = useNavigate()
  const [text, setText] = React.useState('')

  // TODO: (all) text cannot be empty
  const doSave = async _ => {
    await createArticle({ text })
    reload()
    navigate('/')
  }

  return <ModalBox visible>
    <View>
      <AppTextInput autoFocus value={text} onChangeText={setText} />
    </View>
    <View style={styles.footer}>
      <AppButton title="Close" onPress={_ => navigate('/')} />
      <AppButton title="Save" primary onPress={doSave} />
    </View>
  </ModalBox>
}

const styles = StyleSheet.create({
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
