import { ViewContent } from '@/components/Themed'
import { StyleSheet, Text } from 'react-native'

export default function message() {
  return (
    <ViewContent style={styles.container}>
      <Text>Message</Text>
    </ViewContent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
