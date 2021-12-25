import React from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { tw } from '~/src/libs/tailwind'

const Component = ({ title = '', dense = false, autoFocus = false, value, onChange, ...inputProps }) => {
  const inputRef = React.useRef(null)
  const [text, setText] = React.useState('')

  React.useEffect(_ => {
    autoFocus && inputRef.current && setTimeout(_ => inputRef.current.focus(), 100)
  }, [autoFocus])

  React.useEffect(_ => {
    if (value.trim() != text.trim()) {
      setText(value)
    }
  }, [value])

  const doChangeText = text => {
    const trimmedText = text.trim()
    if (value != trimmedText) {
      onChange(trimmedText)
    }

    setText(text)
  }

  return <View style={[styles.wrapper, dense && styles.dense]}>
    {!!title && <Text style={styles.title}>{title}</Text>}
    <TextInput {...inputProps} ref={inputRef} value={text} onChangeText={doChangeText} style={styles.input} />
  </View>
}

const styles = StyleSheet.create({
  wrapper: tw('mb-4'),
  dense: tw('mb-0'),
  title: tw('text-xs'),
  input: tw('border-b-2 text-primary')
})

export default Component
