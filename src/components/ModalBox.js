import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ visible = false, children }) => {
  return <Modal animationType="fade" transparent visible={visible}>
    <View style={styles.wrapper}>
      <View style={styles.box}>
        {children}
      </View>
    </View>
  </Modal>
}

const styles = StyleSheet.create({
  wrapper: tw('flex h-full justify-center items-center'),
  box: tw('bg-white p-5 max-w-xs w-full border rounded-lg')
})

export default Component
