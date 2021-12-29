import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useNavigate } from 'react-router-native'
import Checkbox from 'expo-checkbox'
import { Picker } from '@react-native-picker/picker'
import { tw } from '~/src/libs/tailwind'
import { useTranslation } from '~/src/hooks/i18n'
import { Button } from '~/src/components/inputs'
import { ModalDialog } from '~/src/components/utils'

const Component = _ => {
  const t = useTranslation('pages.settings')
  const navigate = useNavigate()
  const [systemLangSelected, setSystemLangSelected] = React.useState(false)
  const [language, setLanguage] = React.useState('en')

  const doSave = async _ => {
    navigate('/')
  }

  return <ModalDialog visible>
    <View>
      <Checkbox value={systemLangSelected} onValueChange={setSystemLangSelected} />
      <Text>Detect language</Text>
      <Picker selectedValue={language} onValueChange={setLanguage}>
        <Picker.Item label="English" value="en" />
        <Picker.Item label="Spanish" value="es" />
      </Picker>
    </View>
    <View style={styles.footer}>
      <Button title={t`close`} onPress={_ => navigate('/')} />
      <Button title={t`save`} primary onPress={doSave} />
    </View>
  </ModalDialog>
}

const styles = StyleSheet.create({
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
