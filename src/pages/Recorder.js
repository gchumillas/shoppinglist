import React from 'react'
import { View, Text } from 'react-native'
import { useNavigate } from 'react-router-native'
import Voice from '@react-native-voice/voice'
import MicIcon from '~/assets/icons/mic.svg'
import { ModalDialog } from '~/src/components/utils'
import { createArticle } from '~/src/providers/articles'
import { tw, getColor } from '~/src/libs/tailwind'
import { useTranslation } from '~/src/hooks/i18n'
import { context } from './Home'

const Component = () => {
  const t = useTranslation('pages.recorder')
  const { reload } = React.useContext(context)
  const navigate = useNavigate()
  const [message, setMessage] = React.useState('')

  React.useEffect(_ => {
    Voice.onSpeechResults = async e => {
      const text = e.value[0]
      if (text) {
        await createArticle({ text })
        reload()
        navigate('/')
      }
    }

    Voice.onSpeechStart = _ => {
      setMessage(t`say-something`)
    }

    Voice.onSpeechError = e => {
      setMessage(t`something-went-wrong`)
      console.error(e)
    }
    // TODO: auto-detect language
    Voice.start('es-ES')

    return _ => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])

  return <ModalDialog visible width='none' onRequestClose={() => navigate('/')}>
    <View style={tw('flex items-center')}>
      <MicIcon width={55} height={55} fill={getColor('gray-600')} />
      <Text numberOfLines={3} style={tw('mt-4 text-center')}>{message}</Text>
    </View>
  </ModalDialog>
}

export default Component
