import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { getColor, tw } from '~/src/libs/tailwind'
import { Text, Icon } from '~/src/components/display'

const Component = ({ label, icon, onPress }) => {
  return <Pressable onPress={onPress} style={styles.wrapper}>
    <Icon component={icon} size={30} color={getColor('primary')} style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  wrapper: tw`flex flex-row items-center mb-3`,
  icon: tw`mr-3`,
  label: {
    ...tw`py-2 text-lg`,
    fontFamily: 'RobotoSlab_500Medium'
  }
})

export default Component
