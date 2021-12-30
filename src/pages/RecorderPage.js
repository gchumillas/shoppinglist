import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import Voice from '@react-native-voice/voice'
import MicIcon from '~/assets/icons/mic.svg'
import { Button } from '~/src/components/inputs'
import { ModalDialog } from '~/src/components/utils'
import { createArticle } from '~/src/providers/articles'
import { tw, getColor } from '~/src/libs/tailwind'
import { context } from './HomePage'

const Component = () => {
  const { t, i18n } = useTranslation('recorder')
  const { reload } = React.useContext(context)
  const navigate = useNavigate()
  const [listening, setListening] = React.useState(false)
  const [ready, setReady] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const doClose = _ => navigate('/')

  const startRecording = async _ => {
    setMessage(t`starting`)

    if (!await Voice.isAvailable()) {
      setMessage(t`not available`)
      return
    }

    await Voice.start(i18n.language)
    setReady(true)
  }

  const onSpeechStart = _ => {
    setMessage(t`say something`)
    setListening(true)
  }

  const onSpeechResults = async e => {
    const text = e.value[0]
    if (!text) {
      setMessage(t`i did not understand`)
      setListening(false)
      return
    }

    await createArticle({ text })
    reload()
    navigate('/')
  }

  const onSpeechError = e => {
    setMessage(e.error?.code == '7' ? t`i did not understand` : t`something went wrong`)
    setListening(false)
    console.error(e)
  }

  React.useEffect(_ => {
    Voice.onSpeechStart = onSpeechStart
    Voice.onSpeechResults = onSpeechResults
    Voice.onSpeechError = onSpeechError
    startRecording()

    return _ => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  return <ModalDialog visible width='xs' onRequestClose={doClose}>
    <View style={tw`flex items-center`}>
      <MicIcon width={55} height={55} fill={getColor('gray-600')} />
      <Text numberOfLines={3} style={tw`mt-4 text-center`}>{message}</Text>
    </View>
    <View style={styles.footer}>
      <Button title={t`close`} onPress={doClose} />
      <Button title={t`retry`} primary disabled={!ready || listening} onPress={startRecording} />
    </View>
  </ModalDialog>
}

const styles = StyleSheet.create({
  footer: tw`flex flex-row items-center justify-around`
})

export default Component
