import { FlatList, StatusBar, StyleSheet } from 'react-native'
import { ViewContent } from '@/components/Themed'
import { Post, PostSkeleton } from '@/components/post'
import { HomeScreenHeader } from '@/components/header'
import { StoryListBar } from '@/components/story'
import { Line } from '@/components/theme'
import { useEffect, useRef, useState } from 'react'
import { RefreshSpinner } from '@/components/spinner'
import { useUserStateContext } from '@/contexts'
import { usePostApi } from '@/apis'

export default function TabOneScreen() {
  const [state, setState] = useState({
    refreshing: false,
    onLoadMore: false,
    isEndPostList: false,
    postList: [],
    exceptPostList: '[]',
  })

  const setMultipleState = (value: any) => {
    setState((prev) => ({ ...prev, ...value }))
  }

  const setRefreshing = (value: true | false) => {
    setState((prev) => ({ ...prev, refreshing: value }))
  }

  const setOnLoadMore = (value: true | false) => {
    setState((prev) => ({ ...prev, onLoadMore: value }))
  }

  const setIsEndPostList = (value: true | false) => {
    setState((prev) => ({ ...prev, isEndPostList: value }))
  }

  const setPostList = (value: any) => {
    setState((prev) => ({ ...state, postList: value }))
  }

  const setExceptPostList = (value: string) => {
    setState((prev) => ({ ...state, exceptPostList: value }))
  }

  console.log('home re render')

  const { userInfo } = useUserStateContext()
  const { getPostListHomePageForYou } = usePostApi()

  const flatListRef = useRef(null)

  const handleGetPostList = async (excPostList = state.exceptPostList) => {
    if (!state.isEndPostList && userInfo) {
      console.log('get post list')

      const data = await getPostListHomePageForYou(state.exceptPostList)

      console.log('get post success')
      if (data.posts.length === 0) setIsEndPostList(true)
      return {
        posts: data.posts,
        except_posts: data.except_posts,
      }
    }
    return {
      posts: [],
      except_posts: excPostList,
    }
  }

  const handleLoadMore = async () => {
    if (!state.onLoadMore && userInfo && !state.refreshing) {
      console.log('load more')
      setOnLoadMore(true)

      const { posts, except_posts } = await handleGetPostList()
      setMultipleState({
        postList: [...state.postList, ...posts],
        exceptPostList: except_posts,
        onLoadMore: false,
      })
    }
  }

  const onRefresh = async () => {
    if (!state.refreshing && userInfo) {
      console.log('refresh')

      setRefreshing(true)

      const { posts, except_posts } = await handleGetPostList('[]')
      setMultipleState({
        exceptPostList: except_posts,
        postList: posts,
        refreshing: false,
        isEndPostList: false,
      })
    }
  }

  useEffect(() => {
    if (!userInfo && state.postList.length > 0) {
      console.log('no')
      setMultipleState({
        postList: [],
        exceptPostList: '[]',
        isEndPostList: false,
      })
      if (flatListRef.current) {
        // @ts-ignore
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
      }
    } else {
      onRefresh()
    }
  }, [userInfo])

  return (
    <ViewContent style={styles.container}>
      <FlatList
        ref={flatListRef}
        ListHeaderComponent={
          <>
            <HomeScreenHeader />
            <StoryListBar style={styles.storyListBar} />
            <Line />
          </>
        }
        ListFooterComponent={() => {
          return <>{!state.isEndPostList && <PostSkeleton />}</>
        }}
        data={state.postList}
        renderItem={PostRenderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={1}
        initialNumToRender={4}
        onEndReached={handleLoadMore}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshSpinner
            refreshing={state.refreshing}
            onRefresh={onRefresh}
          />
        }
      />
    </ViewContent>
  )
}

// @ts-ignore
const PostRenderItem = ({ item, index }) => <Post post={item} />

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
