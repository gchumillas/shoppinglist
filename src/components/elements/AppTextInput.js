import React from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ title = '', dense = false, ...props }) => {
  return <View style={[styles.wrapper, dense && styles.dense]}>
    {!!title && <Text style={styles.title}>{title}</Text>}
    <TextInput {...props} style={styles.input} />
  </View>
}

const styles = StyleSheet.create({
  wrapper: tw('mb-4'),
  dense: tw('mb-0'),
  title: tw('text-xs'),
  input: tw('border-b-2 text-primary')
})

export default Component
