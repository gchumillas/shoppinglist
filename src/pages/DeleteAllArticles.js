import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigate } from 'react-router-native'
import { tw } from '~/src/libs/tailwind'
import { Text } from '~/src/components/display'
import { Button } from '~/src/components/inputs'
import ModalBox from '~/src/components/ModalBox'
import { deleteAllArticles } from '~/src/providers/articles'
import { context } from './Home'

const Component = _ => {
  const { reload } = React.useContext(context)
  const navigate = useNavigate()

  const doDeleteAll = async _ => {
    await deleteAllArticles()
    reload()
    navigate('/')
  }

  return <ModalBox visible>
    <View>
      <Text style={tw('text-center pb-6')}>Delete all articles?</Text>
    </View>
    <View style={styles.footer}>
      <Button title="No" onPress={_ => navigate('/')} />
      <Button title="Yes" primary onPress={doDeleteAll} />
    </View>
  </ModalBox>
}

const styles = StyleSheet.create({
  footer: tw('flex flex-row items-center justify-around')
})

export default Component
