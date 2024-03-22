import { StyleSheet, View, ViewProps } from 'react-native'

export default function Line(props: ViewProps) {
  const { style, ...ortherProps } = props
  return (
    <View
      style={[styles.line, style]}
      {...ortherProps}
    ></View>
  )
}

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
})
