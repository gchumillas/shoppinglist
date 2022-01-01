import React from 'react'
import { Modal, Pressable, StyleSheet, View } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ visible = false, onRequestClose = undefined, children }) => {
  return <Modal animationType="fade" transparent visible={visible} onRequestClose={onRequestClose} statusBarTranslucent>
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
  wrapper: tw`flex h-full justify-start items-center bg-black bg-opacity-30`,
  box: tw`bg-white pt-7 p-5 rounded-lg w-11/12 border-t-0 rounded-t-none`
})

export default Component
