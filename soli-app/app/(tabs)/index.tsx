import { ScrollView, StatusBar, StyleSheet } from 'react-native'

import { ViewContent } from '@/components/Themed'
import { PostList } from '@/components/post'
import { HomeScreenHeader } from '@/components/header'
import { StoryListBar } from '@/components/story'
import { Line } from '@/components/theme'
import { useState } from 'react'
import { RefreshSpinner } from '@/components/spinner'

export default function TabOneScreen() {
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
        <HomeScreenHeader />
        <StoryListBar style={styles.storyListBar} />
        <Line />
        {!refreshing && <PostList />}
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
  storyListBar: {
    paddingVertical: 14,
  },
})
