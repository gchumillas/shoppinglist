import React from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ title = '', ...props }) => {
  return <View style={styles.wrapper}>
    {!!title && <Text style={styles.title}>{title}</Text>}
    <TextInput {...props} style={styles.input} />
  </View>
}

const styles = StyleSheet.create({
  wrapper: tw('mb-4'),
  title: tw('text-xs'),
  // TODO: add color palette (for example text-primary, etc....)
  input: tw('border-b-2 text-gray-800')
})

export default Component
