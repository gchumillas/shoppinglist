import React from 'react'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { tw } from '~/src/libs/tailwind'
import { Text } from '~/src/components/display'
import { Button } from '~/src/components/inputs'
import { deleteAllArticles } from '~/src/providers/articles'
import DialogLayout from '~/src/layouts/DialogLayout'
import { context } from '~/src/pages/HomePage'

const Component = _ => {
  const { t } = useTranslation('delete all articles')
  const { reload } = React.useContext(context)
  const navigate = useNavigate()
  const doClose = _ => navigate('/')

  const doDeleteAll = async _ => {
    await deleteAllArticles()
    reload()
    navigate('/')
  }

  return <DialogLayout
    onRequestClose={doClose}
    actions={<>
      <Button title={t`no`} onPress={doClose} />
      <Button title={t`yes`} primary onPress={doDeleteAll} />
    </>}>
    <Text style={tw`text-center pb-6`}>{t`delete all articles?`}</Text>
  </DialogLayout>
}

export default Component
