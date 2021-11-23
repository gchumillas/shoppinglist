import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ title }) => {
  return <Pressable style={styles.wrapper}>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  wrapper: tw('py-1.5 px-3'),
  text: { ...tw('uppercase font-bold') }
  // text: tw('uppercase font-bold')
})

export default Component
