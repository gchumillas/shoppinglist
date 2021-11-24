import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ ...props }) => {
  return <TextInput {...props} style={styles.input} />
}

const styles = StyleSheet.create({
  input: tw('border-b-2 text-gray-800')
})

export default Component
