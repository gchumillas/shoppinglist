import React from 'react'
import { Modal, Pressable, StyleSheet, View } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ visible = false, onRequestClose = undefined, children }) => {
  return <Modal animationType="fade" transparent visible={visible} onRequestClose={onRequestClose}>
    <Pressable onPress={onRequestClose}>
      <View style={styles.wrapper}>
        <View style={styles.box} onStartShouldSetResponder={_ => true}>
          {children}
        </View>
      </View>
    </Pressable>
  </Modal>
}

const styles = StyleSheet.create({
  wrapper: tw('flex h-full justify-center items-center'),
  box: tw('bg-white p-5 max-w-xs w-full border rounded-lg')
})

export default Component
