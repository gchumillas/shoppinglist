import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ title, primary = false, disabled = false, ...props }) => {
  return <Pressable style={[styles.wrapper, primary && styles.primary]} disabled={disabled} {...props}>
    {/* TODO: (all?) use classNames */}
    <Text style={[styles.text, primary && styles.primaryText, disabled && styles.disabledText]}>{title}</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  wrapper: tw('py-1.5 px-3 rounded-md'),
  text: { ...tw('uppercase font-bold') },
  primary: tw('bg-gray-500 text-primary-light'),
  primaryText: tw('text-primary-light'),
  disabledText: tw('text-gray-400')
})

export default Component
