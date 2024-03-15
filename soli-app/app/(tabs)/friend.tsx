import { ViewContent } from '@/components/Themed'
import { FriendRequestList } from '@/components/friend'
import { FriendScreenHeader } from '@/components/header'
import { Line } from '@/components/theme'
import { ScrollView, StatusBar, StyleSheet } from 'react-native'

export default function friend() {
  return (
    <ViewContent style={styles.container}>
      <ScrollView
        style={styles.scollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <FriendScreenHeader />
        <Line />
        <FriendRequestList />
        <Line />
      </ScrollView>
    </ViewContent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scollViewContent: {},
  line: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
})
