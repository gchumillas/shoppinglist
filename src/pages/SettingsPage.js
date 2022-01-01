import React from 'react'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { Picker } from '@react-native-picker/picker'
import { tw } from '~/src/libs/tailwind'
import { useLanguage } from '~/src/hooks/store'
import DialogLayout from '~/src/layouts/DialogLayout'
import { Button } from '~/src/components/inputs'

const Component = _ => {
  const { t } = useTranslation('settings')
  const navigate = useNavigate()
  const [language, setLanguage] = useLanguage()
  const doClose = _ => navigate('/')

  return <DialogLayout
    onRequestClose={doClose}
    actions={<Button title={t`close`} onPress={doClose} />}>
    <Picker selectedValue={language} onValueChange={setLanguage} style={tw`bg-gray-300`}>
      <Picker.Item label={t`detect language`} value="" />
      <Picker.Item label={t`english`} value="en" />
      <Picker.Item label={t`spanish`} value="es" />
    </Picker>
  </DialogLayout>
}

export default Component
