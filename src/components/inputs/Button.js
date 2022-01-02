import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import cn from 'react-native-classnames'
import { tw } from '~/src/libs/tailwind'

const Component = ({ title, primary = false, disabled = false, ...props }) => {
  return <Pressable style={cn(styles, 'wrapper', { primary })} disabled={disabled} {...props}>
    <Text style={cn(styles, 'text', { primaryText: primary, disabledText: disabled })}>{title}</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  wrapper: tw`py-1.5 px-3 rounded-md`,
  text: { ...tw`text-base text-primary`, fontFamily: 'RobotoSlab_500Medium' },
  primary: tw`bg-gray-500 text-primary-light`,
  primaryText: tw`text-primary-light`,
  disabledText: tw`text-gray-400`
})

export default Component
