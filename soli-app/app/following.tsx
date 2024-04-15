import { useFollowApi } from '@/apis'
import { FriendItem, FriendItemSkeleton } from '@/components/friend'
import { RefreshSpinner } from '@/components/spinner'
import { removeDuplicatesByProperty } from '@/helpers'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

export default function FollowingScreen() {
  const [state, setState] = useState({
    followingList: [],
    totalFollowingList: 0,
    currentPage: 1,
    refreshing: false,
  })

  const { getFollowingList } = useFollowApi()

  const setMultipleState = (value: any) => {
    setState((prev) => ({ ...prev, ...value }))
  }

  const handleGetFollowingtList = async () => {
    if (state.currentPage > 0) {
      console.log('load following list currentPage', state.currentPage)

      const data = await getFollowingList(state.currentPage)

      if (data && data.total > 0) {
        setMultipleState({
          followingList: removeDuplicatesByProperty([...state.followingList, ...data.data], 'uid'),
          totalFollowingList: data.total,
          currentPage: state.currentPage < data.last_page ? state.currentPage + 1 : 0,
          refreshing: false,
        })
      }
    }
  }

  const handleOnRefresh = async () => {
    setMultipleState({
      refreshing: true,
      followingList: [],
      currentPage: 1,
      totalFollowingList: 0,
    })
  }

  useEffect(() => {
    if (state.refreshing) {
      handleGetFollowingtList()
    }
  }, [state.refreshing])

  useEffect(() => {
    if (state.currentPage === 2 && !state.refreshing) handleGetFollowingtList()
  }, [state.currentPage])

  return (
    <View style={styles.container}>
      <FlatList
        ListFooterComponent={
          <>
            {state.currentPage > 0 && (
              <>
                <FriendItemSkeleton />
                <FriendItemSkeleton />
                <FriendItemSkeleton />
              </>
            )}
          </>
        }
        refreshControl={
          <RefreshSpinner
            refreshing={state.refreshing}
            onRefresh={handleOnRefresh}
          />
        }
        data={state.followingList}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={1}
        onEndReached={handleGetFollowingtList}
        keyExtractor={(item: any, index: number) => `following-${item.uid}`}
        renderItem={({ item }) => <FriendItem user={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
