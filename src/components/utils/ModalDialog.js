import React from 'react'
import { Modal, Pressable, StyleSheet, View, StatusBar } from 'react-native'
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
  box: {
    ...tw`bg-white mt-7 p-5 rounded-md w-11/12`,
    marginTop: StatusBar.currentHeight
  }
})

export default Component
