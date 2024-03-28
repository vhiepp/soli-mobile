import { ViewContent } from '@/components/Themed'
import { FriendRequestList } from '@/components/friend'
import { FriendScreenHeader } from '@/components/header'
import { RefreshSpinner } from '@/components/spinner'
import { Line } from '@/components/theme'
import { useAuthorization } from '@/hooks'
import { useState } from 'react'
import { ScrollView, StatusBar, StyleSheet } from 'react-native'

export default function friend() {
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    // goi api
    setRefreshing(true)

    // Thực hiện các thao tác tải lại dữ liệu ở đây
    setTimeout(() => {
      setRefreshing(false) // khi hoan thanh
    }, 1500) // Giả định rằng việc tải lại mất khoảng 2 giây
  }

  return (
    <ViewContent style={styles.container}>
      <ScrollView
        style={styles.scollViewContent}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshSpinner
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <FriendScreenHeader />
        <Line />
        {!refreshing && <FriendRequestList />}
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
