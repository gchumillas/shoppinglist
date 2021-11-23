import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ title, primary = false, ...props }) => {
  return <Pressable style={[styles.wrapper, primary && styles.primary]} {...props}>
    <Text style={[styles.text, primary && styles.primaryText]}>{title}</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  wrapper: tw('py-1.5 px-3 rounded-md'),
  text: { ...tw('uppercase font-bold') },
  primary: tw('bg-gray-500 text-white'),
  primaryText: tw('text-white')
})

export default Component
