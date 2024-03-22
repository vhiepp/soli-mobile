import { ScrollView, StyleSheet, View } from 'react-native'
import MessageItem from './MessageItem'

export default function MessageList() {
  return (
    <View style={styles.container}>
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
})
