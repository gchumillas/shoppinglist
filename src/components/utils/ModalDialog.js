import React from 'react'
import { Modal, Pressable, StyleSheet, View } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ visible = false, onRequestClose = undefined, children }) => {
  return <Modal animationType="fade" transparent visible={visible} onRequestClose={onRequestClose}>
    <Pressable onPress={onRequestClose}>
      <View style={styles.wrapper}>
        <View onStartShouldSetResponder={_ => true} style={styles.box}>
          {children}
        </View>
      </View>
    </Pressable>
  </Modal>
}

const styles = StyleSheet.create({
  wrapper: tw`flex h-full justify-start items-center pt-10`,
  box: tw`bg-white p-5 border rounded-lg w-11/12`
})

export default Component
