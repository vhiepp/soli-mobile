import { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'

// @ts-ignore
export default function TextInputCustom({ value, onChange, ...props }) {
  const [focus, setFocus] = useState(props?.autoFocus && true)

  const { style } = props
  return (
    <View style={[styles.container, style, focus ? { borderColor: '#1b1b1b' } : {}]}>
      {focus || value.length > 0 ? (
        <Text style={styles.placeholderTitle}>{props?.placeholder}</Text>
      ) : (
        <Text style={styles.placeholderBody}>{props?.placeholder}</Text>
      )}
      <TextInput
        {...props}
        placeholder=""
        onFocus={() => {
          setFocus(true)
        }}
        onBlur={() => {
          setFocus(false)
        }}
        onChangeText={(text) => onChange(text)}
        style={styles.textInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 13,
    paddingVertical: 6,
    paddingHorizontal: 18,
    justifyContent: 'center',
    height: 60,
  },
  placeholderTitle: {
    fontSize: 12,
    fontWeight: '400',
    color: '#18403c',
    flex: 1,
  },
  placeholderBody: {
    position: 'absolute',
    left: 18,
    fontSize: 15,
    fontWeight: '500',
    color: '#ccc',
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#1b1b1b',
    fontWeight: '500',
  },
})
