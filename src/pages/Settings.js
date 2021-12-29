import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useNavigate } from 'react-router-native'
import Checkbox from 'expo-checkbox'
import { Picker } from '@react-native-picker/picker'
import { tw } from '~/src/libs/tailwind'
import { useTranslation } from '~/src/hooks/i18n'
import { useLanguage, useDetectLanguage } from '~/src/hooks/store'
import { Button } from '~/src/components/inputs'
import { ModalDialog } from '~/src/components/utils'

const Component = _ => {
  const t = useTranslation('pages.settings')
  const navigate = useNavigate()
  const [detectLanguage, setDetectLanguage] = useDetectLanguage()
  const [language, setLanguage] = useLanguage()

  const doSave = async _ => {
    navigate('/')
  }

  return <ModalDialog visible>
    <View>
      <View style={tw('flex flex-row items-center')}>
        <Checkbox value={detectLanguage} onValueChange={setDetectLanguage} />
        <Text style={tw('pl-2')}>Detect language</Text>
      </View>
      {/* TODO: (all) replace tw('...') by tw`...` */}
      <Picker selectedValue={language} onValueChange={setLanguage} style={tw('bg-gray-300')}>
        <Picker.Item label="No language selected" value="" />
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
