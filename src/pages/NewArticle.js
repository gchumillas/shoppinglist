import React from 'react'
import { StyleSheet, Modal, View, TextInput, Button } from 'react-native'
import { useNavigate } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { AppButton } from '~/src/components/elements'

const Component = () => {
  const navigate = useNavigate()
  const [text, setText] = React.useState('')

  return <Modal animationType="slide" transparent>
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          {/* TODO: add custom TextInput */}
          <TextInput autoFocus value={text} onChangeText={setText} style={styles.input} />
        </View>
        <View style={styles.footer}>
          <AppButton title="Close" onPress={() => navigate('/')} />
          <Button title="Save" />
        </View>
      </View>
    </View>
  </Modal>
}

const styles = StyleSheet.create({
  container: tw('flex h-full justify-center items-center'),
  box: tw('bg-white p-5 max-w-xs w-full border rounded-lg'),
  input: tw('border'),
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
