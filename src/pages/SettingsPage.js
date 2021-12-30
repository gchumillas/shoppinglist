import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { Picker } from '@react-native-picker/picker'
import { tw } from '~/src/libs/tailwind'
import { useLanguage } from '~/src/hooks/store'
import { Button } from '~/src/components/inputs'
import { ModalDialog } from '~/src/components/utils'

const Component = _ => {
  const { t } = useTranslation('settings')
  const navigate = useNavigate()
  const [language, setLanguage] = useLanguage()

  const doSave = async _ => {
    navigate('/')
  }

  return <ModalDialog visible>
    <View>
      {/* TODO: (all) replace tw('...') by tw`...` */}
      <Picker selectedValue={language} onValueChange={setLanguage} style={tw('bg-gray-300')}>
        <Picker.Item label="Detect language" value="" />
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
