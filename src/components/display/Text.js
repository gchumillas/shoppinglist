import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ style, ...props }) => {
  return <Text {...props} style={{ ...styles.text, ...style }} />
}

const styles = StyleSheet.create({
  text: {
    ...tw`text-base text-primary`,
    fontFamily: 'RobotoSlab_400Regular'
  }
})

export default Component
