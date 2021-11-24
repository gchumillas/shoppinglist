import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ ...props }) => {
  return <TextInput {...props} style={styles.input} />
}

const styles = StyleSheet.create({
  input: tw('border-0')
})

export default Component
