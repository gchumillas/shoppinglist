import React from 'react'
import { Modal, Pressable, StyleSheet, View } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ visible = false, width = 'xs', onRequestClose = undefined, children }) => {
  const compact = React.useMemo(() => !['xs', 'sm', 'lg'].includes(width), [width])

  return <Modal animationType="fade" transparent visible={visible} onRequestClose={onRequestClose}>
    <Pressable onPress={onRequestClose}>
      <View style={styles.wrapper}>
        <View
          onStartShouldSetResponder={_ => true}
          style={{ ...styles.box, ...!compact && tw(`w-full max-w-${width}`) }}
        >
          {children}
        </View>
      </View>
    </Pressable>
  </Modal>
}

const styles = StyleSheet.create({
  wrapper: tw`flex h-full justify-start items-center pt-10`,
  box: tw`bg-white p-5 border rounded-lg`
})

export default Component
