import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import { useTranslation } from 'react-i18next'
import { tw } from '~/src/libs/tailwind'
import { Text } from '~/src/components/display'
import { Button } from '~/src/components/inputs'
import { ModalDialog } from '~/src/components/utils'
import { deleteAllArticles } from '~/src/providers/articles'
import { context } from './Home'

// TODO: (all) close then tapping outside
const Component = _ => {
  const { t } = useTranslation()
  const { reload } = React.useContext(context)
  const navigate = useNavigate()

  const doDeleteAll = async _ => {
    await deleteAllArticles()
    reload()
    navigate('/')
  }

  return <ModalDialog visible>
    <View>
      <Text style={tw('text-center pb-6')}>{t`pages.delete all articles.delete all articles?`}</Text>
    </View>
    <View style={styles.footer}>
      <Button title={t`common.no`} onPress={_ => navigate('/')} />
      <Button title={t`common.yes`} primary onPress={doDeleteAll} />
    </View>
  </ModalDialog>
}

const styles = StyleSheet.create({
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
