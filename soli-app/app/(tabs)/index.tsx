import { ScrollView, StatusBar, StyleSheet } from 'react-native'

import { ViewContent } from '@/components/Themed'
import { PostList } from '@/components/post'
import { HomeScreenHeader } from '@/components/header'
import { StoryListBar } from '@/components/story'
import { Line } from '@/components/theme'

export default function TabOneScreen() {
  return (
    <ViewContent style={styles.container}>
      <ScrollView
        style={styles.scollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <HomeScreenHeader />
        <StoryListBar style={styles.storyListBar} />
        <Line />
        <PostList />
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
