import { FlatList, StatusBar, StyleSheet } from 'react-native'

import { ViewContent } from '@/components/Themed'
import { Post, PostSkeleton } from '@/components/post'
import { HomeScreenHeader } from '@/components/header'
import { StoryListBar } from '@/components/story'
import { Line } from '@/components/theme'
import { useEffect, useState } from 'react'
import { RefreshSpinner } from '@/components/spinner'
import { useUserStateContext } from '@/contexts'
import axiosClient from '@/apis/axios-client'

export default function TabOneScreen() {
  const [refreshing, setRefreshing] = useState(false)
  const [onLoadMore, setOnLoadMore] = useState(false)
  const [isEndPostList, setIsEndPostList] = useState(false)

  const [postList, setPostList]: any = useState([])
  const [exceptPostList, setExceptPostList] = useState('[]')
  const { accessToken } = useUserStateContext()

  useEffect(() => {
    handleLoadMore()
  }, [])

  const handleGetPostList = async (excPostList = exceptPostList) => {
    if (!isEndPostList) {
      console.log('get post list')
      const { data } = await axiosClient.post(
        'posts/for-you',
        { except_posts: excPostList },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      console.log('get post success')
      if (data.data.posts.length === 0) setIsEndPostList(true)
      return {
        posts: data.data.posts,
        except_posts: data.data.except_posts,
      }
    }
    return {
      posts: [],
      except_posts: excPostList,
    }
  }

  const handleLoadMore = async () => {
    if (!onLoadMore) {
      setOnLoadMore(true)
      const { posts, except_posts } = await handleGetPostList()
      if (posts.length > 0) {
        // @ts-ignore
        setPostList((prev) => [...prev, ...posts])
        setExceptPostList(except_posts)
      }
      setOnLoadMore(false)
    }
  }

  const onRefresh = async () => {
    setRefreshing(true)
    if (isEndPostList) setIsEndPostList(false)

    const { posts, except_posts } = await handleGetPostList('[]')

    await setExceptPostList(except_posts)
    await setPostList(posts)
    setRefreshing(false)
  }

  return (
    <ViewContent style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <HomeScreenHeader />
            <StoryListBar style={styles.storyListBar} />
            <Line />
          </>
        }
        ListFooterComponent={() => {
          return <>{!isEndPostList && <PostSkeleton />}</>
        }}
        data={postList}
        renderItem={({ item, index }) => <Post post={item} />}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={1}
        initialNumToRender={4}
        onEndReached={handleLoadMore}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshSpinner
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </ViewContent>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    position: 'relative',
  },
  scollViewContent: {},
  storyListBar: {
    paddingVertical: 14,
  },
})
