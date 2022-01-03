import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'
import cn from 'react-native-classnames'
import { tw } from '~/src/libs/tailwind'

const Component = ({ title, primary = false, disabled = false, ...props }) => {
  return <Pressable style={cn(styles, 'wrapper', { primary, primaryDisabled: primary && disabled })} disabled={disabled} {...props}>
    <Text style={cn(styles, 'text', { primaryText: primary, disabledText: disabled })}>{title}</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  wrapper: tw`py-1 pb-0.5 px-0.5 border-b-4 border-transparent`,
  primary: tw`border-primary`,
  primaryDisabled: tw`border-gray-300`,
  text: {
    ...tw`text-base text-primary`,
    fontFamily: 'RobotoSlab_900Black'
  },
  primaryText: {
    fontFamily: 'RobotoSlab_900Black'
  },
  disabledText: tw`text-gray-300`
})

export default Component
