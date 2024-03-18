import { ViewContent } from '@/components/Themed'
import { StyleSheet, Text } from 'react-native'

export default function NotificationScreen() {
  return (
    <ViewContent style={styles.container}>
      <Text>Thông báo</Text>
    </ViewContent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
