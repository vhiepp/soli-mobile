import { useFriendApi } from '@/apis'
import { FriendRequestItem, FriendRequestItemSkeleton } from '@/components/friend'
import { RefreshSpinner } from '@/components/spinner'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native'

export default function FriendRequest() {
  const [state, setState] = useState({
    friendRequestList: [],
    totalFriendRequest: 0,
    currentPage: 1,
    refreshing: false,
  })
  const { getFriendRequestList } = useFriendApi()

  const setMultipleState = (value: any) => {
    setState((prev) => ({ ...prev, ...value }))
  }

  const handleGetFriendRequestList = async () => {
    if (state.currentPage > 0) {
      console.log('load friend request list currentPage', state.currentPage)

      const data = await getFriendRequestList(state.currentPage)

      if (data && data.total > 0) {
        setMultipleState({
          friendRequestList: [...state.friendRequestList, ...data.data],
          totalFriendRequest: data.total,
          currentPage: state.currentPage < data.last_page ? state.currentPage + 1 : 0,
          refreshing: false,
        })
      }
    }
  }

  const handleAgreedFriendRequest = (user: any) => {
    setMultipleState({
      friendRequestList: [...state.friendRequestList.filter((item: any) => item.id !== user.id)],
      totalFriendRequest: state.totalFriendRequest > 1 ? state.totalFriendRequest - 1 : 0,
    })
  }

  const handleOnRefresh = async () => {
    setMultipleState({
      refreshing: true,
      friendRequestList: [],
      totalFriendRequest: 0,
      currentPage: 1,
    })
  }

  useEffect(() => {
    if (state.refreshing) {
      handleGetFriendRequestList()
    }
  }, [state.refreshing])

  useEffect(() => {
    handleGetFriendRequestList()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={state.friendRequestList}
        renderItem={({ item }: any) => (
          <FriendRequestItem
            user={item}
            onAgreedFriendRequest={handleAgreedFriendRequest}
          />
        )}
        keyExtractor={(item: any, index) => `friendrequest-${item.uid}`}
        ListFooterComponent={
          <>
            {state.currentPage > 0 && (
              <>
                <FriendRequestItemSkeleton />
                <FriendRequestItemSkeleton />
                <FriendRequestItemSkeleton />
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
        onEndReachedThreshold={1}
        onEndReached={() => {
          if (state.currentPage > 1) handleGetFriendRequestList()
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
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
