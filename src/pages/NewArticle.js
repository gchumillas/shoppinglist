import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { AppButton, AppTextInput } from '~/src/components/elements'
import ModalBox from '~/src/components/ModalBox'
import { createArticle } from '~/src/providers/articles'

const Component = () => {
  const navigate = useNavigate()
  const [text, setText] = React.useState('')

  const doSave = async () => {
    const id = await createArticle(text)
    navigate('/', { state: { lastInsertId: id } })
  }

  return <ModalBox visible>
    <View>
      {/* TODO: add custom TextInput */}
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
