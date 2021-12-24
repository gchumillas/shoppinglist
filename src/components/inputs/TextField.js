import React from 'react'
import { TextInput, StyleSheet, View, Text } from 'react-native'
import { tw } from '~/src/libs/tailwind'
import { useFirstRender } from '~/src/libs/hooks'

const Component = ({ title = '', dense = false, autoFocus = false, value, onChangeText, ...props }) => {
  const inputRef = React.useRef(null)
  const firstRender = useFirstRender()
  const [internalValue, setInternalValue] = React.useState('')
  const trimmedValue = React.useMemo(() => internalValue.trim(), [internalValue])

  React.useEffect(() => {
    autoFocus && inputRef.current && setTimeout(() => inputRef.current.focus(), 40)
  }, [inputRef.current])

  React.useEffect(() => {
    if (trimmedValue != value) {
      setInternalValue(value)
    }
  }, [value])

  React.useEffect(() => {
    if (!firstRender && (trimmedValue != value)) {
      onChangeText(trimmedValue)
    }
  }, [firstRender, trimmedValue])

  return <View style={[styles.wrapper, dense && styles.dense]}>
    {!!title && <Text style={styles.title}>{title}</Text>}
    <TextInput {...props} ref={inputRef} style={styles.input} value={internalValue} onChangeText={setInternalValue} />
  </View>
}

const styles = StyleSheet.create({
  wrapper: tw('mb-4'),
  dense: tw('mb-0'),
  title: tw('text-xs'),
  input: tw('border-b-2 text-primary')
})

export default Component
